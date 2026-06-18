// Game Logic and Data Management

const GAME_STATE_KEY = 'quest_planner_data_v2';

const DEFAULT_STATE = {
    player: {
        xp: 0,
        level: 1,
        lastBackup: Date.now()
    },
    quests: []
};

// Pokemon GIFs
const subtaskPokemons = [
    25, // Pikachu
    4,  // Charmander
    7,  // Squirtle
    1,  // Bulbasaur
    133, // Eevee
    39, // Jigglypuff
    52, // Meowth
    54, // Psyduck
    152, // Chikorita
    155, // Cyndaquil
    158  // Totodile
];

const MAIN_BOSS_POKEMON = 143; // Snorlax

const RANKS = [
    'Novice', 'Apprentice', 'Squire', 'Adventurer', 'Mercenary', 
    'Warrior', 'Knight', 'Veteran', 'Elite', 'Champion', 
    'Hero', 'Master', 'Grandmaster', 'Legend', 'Mythic', 'Demigod', 'God'
];

let gameState = JSON.parse(localStorage.getItem(GAME_STATE_KEY));

// Migration or Init
if (!gameState) {
    // Try to migrate from v1
    const oldState = JSON.parse(localStorage.getItem('quest_planner_data'));
    if (oldState) {
        gameState = oldState;
        // Migrate subtasks to progress objects
        gameState.quests.forEach(q => {
            q.subtasks.forEach(st => {
                if (st.progress === undefined) {
                    st.progress = st.completed ? 100 : 0;
                    st.rewardClaimed = st.completed;
                }
            });
        });
        localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
    } else {
        gameState = DEFAULT_STATE;
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    renderQuests();
    checkBackupNotification();
    checkDeadlines();

    // Event Listeners
    document.getElementById('btn-new-quest').addEventListener('click', () => {
        openModal();
    });

    document.getElementById('btn-cancel-modal').addEventListener('click', () => {
        document.getElementById('quest-modal').classList.add('hidden');
    });

    document.getElementById('quest-form').addEventListener('submit', handleSaveQuest);
    
    document.getElementById('btn-export').addEventListener('click', exportJSON);
    document.getElementById('file-import').addEventListener('change', importJSON);
    
    setInterval(checkDeadlines, 60000);
});

function saveState() {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
    updateDashboard();
}

function openModal(questId = null) {
    const modal = document.getElementById('quest-modal');
    const form = document.getElementById('quest-form');
    const titleEl = document.getElementById('modal-title');
    
    form.reset();
    
    if (questId) {
        const q = gameState.quests.find(x => x.id === questId);
        titleEl.textContent = "Edit Quest";
        document.getElementById('q-id').value = q.id;
        document.getElementById('q-title').value = q.title;
        document.getElementById('q-severity').value = q.severity;
        if(q.deadline) {
            document.getElementById('q-deadline').value = q.deadline;
        }
        document.getElementById('q-subtasks').value = q.subtasks.map(s => s.text).join(', ');
        document.getElementById('btn-save-modal').textContent = "Update Quest";
    } else {
        titleEl.textContent = "Create New Quest";
        document.getElementById('q-id').value = "";
        document.getElementById('btn-save-modal').textContent = "Accept Quest";
    }
    
    modal.classList.remove('hidden');
}

function handleSaveQuest(e) {
    e.preventDefault();
    const id = document.getElementById('q-id').value;
    const title = document.getElementById('q-title').value;
    const severity = parseInt(document.getElementById('q-severity').value);
    const deadline = document.getElementById('q-deadline').value;
    const subtasksText = document.getElementById('q-subtasks').value;

    const newSubtaskTexts = subtasksText.split(',').map(s => s.trim()).filter(s => s);

    if (id) {
        // Update Existing
        const quest = gameState.quests.find(q => q.id === id);
        quest.title = title;
        quest.severity = severity;
        quest.deadline = deadline;
        
        // Smart merge subtasks to preserve progress
        const updatedSubtasks = newSubtaskTexts.map(text => {
            const existing = quest.subtasks.find(s => s.text.toLowerCase() === text.toLowerCase());
            if (existing) return existing;
            return { id: generateId(), text, progress: 0, rewardClaimed: false };
        });
        quest.subtasks = updatedSubtasks;
        showNotification('Quest Updated Successfully!', 'info');

        // Check completion state in case subtasks were removed making it 100%
        checkQuestCompletion(quest);

    } else {
        // Create New
        const subtasks = newSubtaskTexts.map(text => ({
            id: generateId(),
            text,
            progress: 0,
            rewardClaimed: false
        }));

        const newQuest = {
            id: generateId(),
            title,
            severity,
            deadline,
            subtasks,
            createdAt: Date.now(),
            completed: false,
            punished: false
        };
        gameState.quests.push(newQuest);
        showNotification('New Quest Added!', 'reward');
    }

    saveState();
    document.getElementById('quest-modal').classList.add('hidden');
    renderQuests();
}

function getRankLabel(severity) {
    const labels = {1: 'D (Easy)', 2: 'C (Medium)', 3: 'B (Hard)', 4: 'A (Epic)', 5: 'S (Legendary)'};
    return `Rank ${labels[severity] || severity}`;
}

function renderQuests() {
    const activeContainer = document.getElementById('active-quests');
    const completedContainer = document.getElementById('completed-quests');
    activeContainer.innerHTML = '';
    completedContainer.innerHTML = '';

    // Sort: severity desc, then deadline
    const sortedQuests = [...gameState.quests].sort((a, b) => {
        if (a.severity !== b.severity) return b.severity - a.severity;
        if (a.deadline && b.deadline) return new Date(a.deadline) - new Date(b.deadline);
        if (a.deadline) return -1;
        if (b.deadline) return 1;
        return b.createdAt - a.createdAt;
    });

    sortedQuests.forEach(quest => {
        const card = document.createElement('div');
        card.className = `glass-panel quest-card severity-${quest.severity} ${quest.completed ? 'completed' : ''}`;
        
        // Calc Progress
        let progressPercent = 0;
        if (quest.completed) {
            progressPercent = 100;
        } else if (quest.subtasks.length > 0) {
            const total = quest.subtasks.reduce((sum, st) => sum + st.progress, 0);
            progressPercent = Math.round(total / quest.subtasks.length);
        }

        let deadlineHtml = '';
        let isOverdue = false;
        if (quest.deadline) {
            const timeDiff = new Date(quest.deadline) - new Date();
            const daysLeft = timeDiff / (1000 * 60 * 60 * 24);
            isOverdue = timeDiff < 0 && !quest.completed;
            let timeStr = isOverdue ? 'Overdue!' : (daysLeft < 1 ? Math.floor(timeDiff / (1000 * 60 * 60)) + ' hrs left' : `${Math.ceil(daysLeft)} days left`);
            deadlineHtml = `<span class="badge badge-deadline ${isOverdue ? 'overdue' : ''}">⏳ ${timeStr}</span>`;
        }

        const subtasksHtml = quest.subtasks.map(st => `
            <div class="subtask-item ${st.progress === 100 ? 'done' : ''}">
                <div class="subtask-header">
                    <span class="subtask-label">${st.text}</span>
                    <span class="subtask-percent" id="pct-${st.id}">${st.progress}%</span>
                </div>
                <input type="range" class="subtask-slider" min="0" max="100" value="${st.progress}" 
                       oninput="updateVisualProgress(this, '${st.id}')"
                       onchange="commitSubtaskProgress('${quest.id}', '${st.id}', this.value)"
                       ${quest.completed ? 'disabled' : ''}>
            </div>
        `).join('');

        card.innerHTML = `
            <div class="quest-header">
                <div class="quest-title-area">
                    <div class="quest-title">${quest.title}</div>
                    <div class="quest-badges">
                        <span class="badge badge-rank">${getRankLabel(quest.severity)}</span>
                        ${deadlineHtml}
                    </div>
                </div>
            </div>
            
            <div class="progress-bar-bg" style="height: 6px; margin: 15px 0;">
                <div class="progress-bar-fill" style="width: ${progressPercent}%; ${progressPercent === 100 ? 'background: var(--success);' : ''}"></div>
            </div>

            <div class="subtask-list">
                ${subtasksHtml}
            </div>

            ${!quest.subtasks.length && !quest.completed ? `
                <div style="margin-top: 15px;">
                    <button class="btn btn-primary glow-btn" onclick="completeTaskWithoutSubtasks('${quest.id}')">
                        ⚡ Complete Quest
                    </button>
                </div>
            ` : ''}

            <div class="quest-actions">
                ${!quest.completed ? `<button class="btn-icon" onclick="openModal('${quest.id}')" title="Edit Quest">✏️ Edit</button>` : ''}
                <button class="btn-icon delete" onclick="deleteQuest('${quest.id}')" title="Delete Quest">🗑️ Delete</button>
            </div>
        `;

        if (quest.completed) {
            completedContainer.appendChild(card);
        } else {
            activeContainer.appendChild(card);
        }
    });

    if(activeContainer.innerHTML === '') {
        activeContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">No active quests. Time to rest, or accept a new one!</p>';
    }
    if(completedContainer.innerHTML === '') {
        completedContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">The Hall of Fame is empty. Complete quests to forge your legacy!</p>';
    }
}

// Live update slider text
window.updateVisualProgress = function(sliderEl, subtaskId) {
    document.getElementById(`pct-${subtaskId}`).textContent = `${sliderEl.value}%`;
};

// Commit slider change
window.commitSubtaskProgress = function(questId, subtaskId, value) {
    const val = parseInt(value);
    const quest = gameState.quests.find(q => q.id === questId);
    const subtask = quest.subtasks.find(s => s.id === subtaskId);
    
    subtask.progress = val;

    if (val === 100 && !subtask.rewardClaimed) {
        subtask.rewardClaimed = true;
        // Dynamic XP based on quest severity: 15 to 30 base * severity
        const xpReward = Math.floor(Math.random() * 16 + 15) * quest.severity; 
        addXP(xpReward);
        fireConfetti(false);
        
        // Random small pokemon
        const pokeId = subtaskPokemons[Math.floor(Math.random() * subtaskPokemons.length)];
        const pokeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeId}.gif`;
        
        showNotification(`+${xpReward} XP! Subtask cleared.`, 'reward', pokeUrl);
    } 
    // If they move it back from 100
    else if (val < 100 && subtask.rewardClaimed) {
        // Optional: remove rewardClaimed so they can earn it again? No, prevents abuse.
        // But if they genuinely reopened it, we'll keep rewardClaimed=true to prevent infinite XP farming.
    }

    checkQuestCompletion(quest);
    saveState();
    renderQuests();
};

function checkQuestCompletion(quest) {
    if (quest.subtasks.length > 0) {
        const allDone = quest.subtasks.every(s => s.progress === 100);
        if (allDone && !quest.completed) {
            completeQuest(quest);
        } else if (!allDone && quest.completed) {
            quest.completed = false; // Reopened
        }
    }
}

window.completeTaskWithoutSubtasks = function(questId) {
    const quest = gameState.quests.find(q => q.id === questId);
    if(!quest.completed) {
        completeQuest(quest);
        saveState();
        renderQuests();
    }
};

function completeQuest(quest) {
    quest.completed = true;
    // Base massive reward for full quest: 100 to 200 * severity
    const xpReward = Math.floor(Math.random() * 101 + 100) * quest.severity;
    addXP(xpReward);
    showQuestCompleteCelebration(xpReward);
}

window.deleteQuest = function(questId) {
    if(confirm("Are you sure you want to delete this quest completely?")) {
        gameState.quests = gameState.quests.filter(q => q.id !== questId);
        saveState();
        renderQuests();
    }
};

// Gamification System
function addXP(amount) {
    gameState.player.xp += amount;
    checkLevelUp();
}

function checkLevelUp() {
    let xpNeeded = gameState.player.level * 150; // harder to level up
    
    while (gameState.player.xp >= xpNeeded) {
        gameState.player.xp -= xpNeeded;
        gameState.player.level += 1;
        xpNeeded = gameState.player.level * 150;
        
        showNotification(`LEVEL UP! You are now Level ${gameState.player.level}`, 'reward', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rare-candy.png');
        fireConfetti(true);
    }
}

function updateDashboard() {
    const level = gameState.player.level;
    const xp = gameState.player.xp;
    const xpNeeded = level * 150;

    document.getElementById('player-level').textContent = level;
    document.getElementById('current-xp').textContent = xp;
    document.getElementById('next-level-xp').textContent = xpNeeded;
    document.getElementById('xp-bar').style.width = `${(xp / xpNeeded) * 100}%`;

    const rankIndex = Math.min(level - 1, RANKS.length - 1);
    document.getElementById('player-rank').textContent = RANKS[rankIndex] + (level > RANKS.length ? '+' : '');

    // Calculate Overall Project Progress
    let totalWeight = 0;
    let completedWeight = 0;

    gameState.quests.forEach(q => {
        const weight = q.severity;
        totalWeight += weight;
        
        if (q.completed) {
            completedWeight += weight;
        } else if (q.subtasks.length > 0) {
            const subDonePct = q.subtasks.reduce((sum, st) => sum + st.progress, 0) / q.subtasks.length;
            completedWeight += (subDonePct / 100) * weight;
        }
    });

    const percent = totalWeight === 0 ? 0 : Math.round((completedWeight / totalWeight) * 100);
    document.getElementById('overall-progress-bar').style.width = `${percent}%`;
    document.getElementById('overall-progress-text').textContent = `${percent}% Complete`;
}

// Visual Effects
function fireConfetti(massive = false) {
    if(massive) {
        var duration = 3 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({ particleCount: 6, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#8b5cf6', '#10b981', '#f59e0b', '#06b6d4'] });
            confetti({ particleCount: 6, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#8b5cf6', '#10b981', '#f59e0b', '#06b6d4'] });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    } else {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 }, colors: ['#8b5cf6', '#10b981', '#06b6d4'] });
    }
}

function showQuestCompleteCelebration(xpReward) {
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    
    // Always Snorlax for full task completion
    const snorlaxUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${MAIN_BOSS_POKEMON}.gif`;
    
    overlay.innerHTML = `
        <img src="${snorlaxUrl}" alt="Snorlax">
        <h2>QUEST CLEARED!</h2>
        <p>+${xpReward} XP</p>
    `;
    
    document.body.appendChild(overlay);
    fireConfetti(true);
    
    setTimeout(() => {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.6s';
        setTimeout(() => overlay.remove(), 600);
    }, 4500);
}

function showNotification(message, type = 'info', imgUrl = null) {
    const container = document.getElementById('notification-container');
    const el = document.createElement('div');
    el.className = `notification ${type}`;
    
    let iconHtml = '';
    if (imgUrl) {
        iconHtml = `<img src="${imgUrl}" class="poke-sprite">`;
    } else {
        let icon = 'ℹ️';
        if(type === 'reward') icon = '⭐';
        if(type === 'punish') icon = '⚠️';
        iconHtml = `<span style="font-size: 1.5rem">${icon}</span>`;
    }

    el.innerHTML = `${iconHtml} <div>${message}</div>`;
    container.appendChild(el);

    setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(120%)';
        el.style.transition = 'all 0.4s ease';
        setTimeout(() => el.remove(), 400);
    }, 4000);
}

// Backup & Import
function exportJSON() {
    gameState.player.lastBackup = Date.now();
    saveState();
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gameState));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `quest_log_backup_${new Date().toISOString().split('T')[0]}.json`);
    dlAnchorElem.click();
    showNotification('Backup Saved Successfully!', 'reward');
}

function importJSON(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if(data.player && data.quests) {
                gameState = data;
                saveState();
                renderQuests();
                showNotification('Backup Loaded Successfully!', 'reward');
            } else {
                throw new Error("Invalid format");
            }
        } catch (err) {
            showNotification('Error loading file. Invalid format.', 'punish');
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

function checkBackupNotification() {
    const twoDaysMs = 2 * 24 * 60 * 60 * 1000;
    if (Date.now() - gameState.player.lastBackup > twoDaysMs) {
        showNotification('It has been over 2 days since your last backup! Please export your quests.', 'punish');
    }
}

function checkDeadlines() {
    let punished = false;
    gameState.quests.forEach(q => {
        if (!q.completed && q.deadline) {
            const timeDiff = new Date(q.deadline) - new Date();
            if (timeDiff < 0 && !q.punished) {
                // Overdue
                gameState.player.xp = Math.max(0, gameState.player.xp - 50); // increased punishment
                q.punished = true; 
                punished = true;
                showNotification(`Quest Overdue: ${q.title}! -50 XP`, 'punish');
            }
        }
    });
    
    if(punished) {
        saveState();
        renderQuests();
    }
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}
