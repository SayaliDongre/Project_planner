// Game Logic and Data Management

const GAME_STATE_KEY = 'quest_planner_data';

const DEFAULT_STATE = {
    player: {
        xp: 0,
        level: 1,
        lastBackup: Date.now()
    },
    quests: []
};

// Pokemon GIFs for completion
const completionGifs = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif", // Pikachu
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",  // Charmander
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif",  // Squirtle
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",  // Bulbasaur
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif", // Gengar
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif" // Snorlax
];

let gameState = JSON.parse(localStorage.getItem(GAME_STATE_KEY)) || DEFAULT_STATE;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    renderQuests();
    checkBackupNotification();
    checkDeadlines();

    // Event Listeners
    document.getElementById('btn-new-quest').addEventListener('click', () => {
        document.getElementById('quest-modal').classList.remove('hidden');
    });

    document.getElementById('btn-cancel-modal').addEventListener('click', () => {
        document.getElementById('quest-modal').classList.add('hidden');
    });

    document.getElementById('new-quest-form').addEventListener('submit', handleNewQuest);
    
    document.getElementById('btn-export').addEventListener('click', exportJSON);
    document.getElementById('file-import').addEventListener('change', importJSON);
    
    // Check deadlines every minute
    setInterval(checkDeadlines, 60000);
});

function saveState() {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
    updateDashboard();
}

function handleNewQuest(e) {
    e.preventDefault();
    const title = document.getElementById('q-title').value;
    const severity = parseInt(document.getElementById('q-severity').value);
    const deadline = document.getElementById('q-deadline').value;
    const subtasksText = document.getElementById('q-subtasks').value;

    const subtasks = subtasksText.split(',').map(s => s.trim()).filter(s => s).map(s => ({
        id: generateId(),
        text: s,
        completed: false
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
    saveState();
    
    document.getElementById('new-quest-form').reset();
    document.getElementById('quest-modal').classList.add('hidden');
    renderQuests();
    
    showNotification('New Quest Added!', 'reward');
}

function renderQuests() {
    const container = document.getElementById('active-quests');
    container.innerHTML = '';

    // Sort by: Incomplete first, then by severity (desc), then deadline
    const sortedQuests = [...gameState.quests].sort((a, b) => {
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        if (a.severity !== b.severity) return b.severity - a.severity;
        if (a.deadline && b.deadline) return new Date(a.deadline) - new Date(b.deadline);
        if (a.deadline) return -1;
        if (b.deadline) return 1;
        return b.createdAt - a.createdAt;
    });

    sortedQuests.forEach(quest => {
        const card = document.createElement('div');
        card.className = `glass-panel quest-card severity-${quest.severity} ${quest.completed ? 'completed' : ''}`;
        
        let subtasksCompleted = quest.subtasks.filter(s => s.completed).length;
        let progressPercent = quest.subtasks.length > 0 ? (subtasksCompleted / quest.subtasks.length) * 100 : (quest.completed ? 100 : 0);

        let deadlineHtml = '';
        let isOverdue = false;
        if (quest.deadline) {
            const timeDiff = new Date(quest.deadline) - new Date();
            const daysLeft = timeDiff / (1000 * 60 * 60 * 24);
            isOverdue = timeDiff < 0 && !quest.completed;
            let timeStr = isOverdue ? 'Overdue!' : (daysLeft < 1 ? Math.floor(timeDiff / (1000 * 60 * 60)) + ' hours left' : `${Math.ceil(daysLeft)} days left`);
            deadlineHtml = `<span class="badge badge-deadline ${isOverdue ? 'overdue' : ''}">⏳ ${timeStr}</span>`;
        }

        const subtasksHtml = quest.subtasks.map(st => `
            <li class="subtask-item ${st.completed ? 'done' : ''}">
                <input type="checkbox" class="subtask-cb" 
                    ${st.completed ? 'checked' : ''} 
                    onchange="toggleSubtask('${quest.id}', '${st.id}')"
                    ${quest.completed ? 'disabled' : ''}>
                <span class="subtask-label">${st.text}</span>
            </li>
        `).join('');

        card.innerHTML = `
            <div class="quest-header">
                <div class="quest-title">${quest.title}</div>
                <div class="quest-badges">
                    ${deadlineHtml}
                    <span class="badge" style="background: rgba(255,255,255,0.1)">Rank ${quest.severity}</span>
                </div>
            </div>
            
            <div class="progress-bar-bg" style="height: 6px; margin: 15px 0;">
                <div class="progress-bar-fill" style="width: ${progressPercent}%; ${progressPercent === 100 ? 'background: var(--success);' : ''}"></div>
            </div>

            <ul class="subtask-list">
                ${subtasksHtml}
            </ul>

            ${!quest.subtasks.length ? `
                <div style="margin-top: 15px;">
                    <button class="btn btn-primary" onclick="completeTaskWithoutSubtasks('${quest.id}')" ${quest.completed ? 'disabled' : ''}>
                        ${quest.completed ? 'Quest Completed ✓' : 'Complete Quest'}
                    </button>
                </div>
            ` : ''}

            <div class="quest-actions">
                <button class="btn-icon" onclick="deleteQuest('${quest.id}')" title="Abandon Quest">🗑️</button>
            </div>
        `;
        container.appendChild(card);
    });
}

window.toggleSubtask = function(questId, subtaskId) {
    const quest = gameState.quests.find(q => q.id === questId);
    const subtask = quest.subtasks.find(s => s.id === subtaskId);
    
    if (!subtask.completed) {
        subtask.completed = true;
        addXP(10); // Reward for subtask
        fireConfetti(false);
        showNotification('+10 XP', 'reward');
    } else {
        subtask.completed = false;
    }

    // Check if all subtasks are done
    const allDone = quest.subtasks.every(s => s.completed);
    if (allDone && !quest.completed) {
        completeQuest(quest);
    } else if (!allDone && quest.completed) {
        quest.completed = false;
    }

    saveState();
    renderQuests();
};

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
    const xpReward = quest.severity * 50;
    addXP(xpReward);
    showQuestCompleteCelebration(xpReward);
}

window.deleteQuest = function(questId) {
    if(confirm("Abandon this quest? You won't gain any XP.")) {
        gameState.quests = gameState.quests.filter(q => q.id !== questId);
        saveState();
        renderQuests();
    }
};

// Gamification System
function addXP(amount) {
    gameState.player.xp += amount;
    const xpNeeded = gameState.player.level * 100;
    
    if (gameState.player.xp >= xpNeeded) {
        gameState.player.xp -= xpNeeded;
        gameState.player.level += 1;
        showNotification(`LEVEL UP! You are now Level ${gameState.player.level}`, 'reward');
        fireConfetti(true);
    }
}

function updateDashboard() {
    const level = gameState.player.level;
    const xp = gameState.player.xp;
    const xpNeeded = level * 100;

    document.getElementById('player-level').textContent = level;
    document.getElementById('current-xp').textContent = xp;
    document.getElementById('next-level-xp').textContent = xpNeeded;
    document.getElementById('xp-bar').style.width = `${(xp / xpNeeded) * 100}%`;

    const titles = ['Novice', 'Apprentice', 'Adventurer', 'Knight', 'Master', 'Grandmaster', 'Legend'];
    document.getElementById('player-rank').textContent = titles[Math.min(Math.floor((level - 1)/2), titles.length - 1)];

    // Calculate Overall Project Progress
    let totalWeight = 0;
    let completedWeight = 0;

    gameState.quests.forEach(q => {
        const weight = q.severity;
        totalWeight += weight;
        
        if (q.completed) {
            completedWeight += weight;
        } else if (q.subtasks.length > 0) {
            const subDone = q.subtasks.filter(s => s.completed).length;
            completedWeight += (subDone / q.subtasks.length) * weight;
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
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#8b5cf6', '#10b981', '#f59e0b', '#ef4444']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#8b5cf6', '#10b981', '#f59e0b', '#ef4444']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    } else {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8b5cf6', '#10b981']
        });
    }
}

function showQuestCompleteCelebration(xpReward) {
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    
    const randomGif = completionGifs[Math.floor(Math.random() * completionGifs.length)];
    
    overlay.innerHTML = `
        <img src="${randomGif}" alt="Dancing Sprite">
        <h2>QUEST CLEARED!</h2>
        <p>+${xpReward} XP</p>
    `;
    
    document.body.appendChild(overlay);
    fireConfetti(true);
    
    setTimeout(() => {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.5s';
        setTimeout(() => overlay.remove(), 500);
    }, 4000);
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    const el = document.createElement('div');
    el.className = `notification ${type}`;
    
    let icon = 'ℹ️';
    if(type === 'reward') icon = '⭐';
    if(type === 'punish') icon = '⚠️';

    el.innerHTML = `<span style="font-size: 1.5rem">${icon}</span> <div>${message}</div>`;
    container.appendChild(el);

    setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(100%)';
        el.style.transition = 'all 0.3s ease';
        setTimeout(() => el.remove(), 300);
    }, 3000);
}

// Backup & Import
function exportJSON() {
    gameState.player.lastBackup = Date.now();
    saveState();
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gameState));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `quest_backup_${new Date().toISOString().split('T')[0]}.json`);
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
    e.target.value = ''; // Reset input
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
                gameState.player.xp = Math.max(0, gameState.player.xp - 20);
                q.punished = true; // Mark as punished so we don't drain XP forever
                punished = true;
                showNotification(`Quest Overdue: ${q.title}! -20 XP`, 'punish');
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
