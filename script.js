// ========== DATA & CONSTANTS ==========

const STORE_KEY = 'quest_planner_v3';
const OLD_KEY_V2 = 'quest_planner_data_v2';
const OLD_KEY_V1 = 'quest_planner_data';

const PROJECT_COLORS = ['#8b5cf6','#3b82f6','#10b981','#f59e0b','#ef4444','#ec4899','#06b6d4','#f97316','#84cc16','#6366f1'];

const EVOLUTION_CHAINS = [
    [4,5,6],[7,8,9],[1,2,3],[172,25,26],[133,196,197],
    [92,93,94],[147,148,149],[246,247,248],[280,281,282],
    [374,375,376],[443,444,445],[447,448,448]
];
const LEGENDARIES = [150,384,493,249,250,383,382,483,484,487,151,243,244,245,377,378,379,380,381,385,386];

const RANKS = [
    'Novice','Apprentice','Squire','Adventurer','Scout',
    'Warrior','Knight','Sentinel','Guardian','Veteran',
    'Elite','Champion','Hero','Vanguard','Warden',
    'Master','Sage','Oracle','Archon','Sovereign',
    'Legend','Mythic','Titan','Celestial','Demigod',
    'Ascendant','Eternal','Transcendent','Cosmic','Omega'
];

// Gen1-3 Pokemon pool for Pokédex (151 pokemon)
const POKEMON_POOL = [
    [1,'Bulbasaur'],[2,'Ivysaur'],[3,'Venusaur'],[4,'Charmander'],[5,'Charmeleon'],
    [6,'Charizard'],[7,'Squirtle'],[8,'Wartortle'],[9,'Blastoise'],[10,'Caterpie'],
    [11,'Metapod'],[12,'Butterfree'],[13,'Weedle'],[14,'Kakuna'],[15,'Beedrill'],
    [16,'Pidgey'],[17,'Pidgeotto'],[18,'Pidgeot'],[19,'Rattata'],[20,'Raticate'],
    [21,'Spearow'],[22,'Fearow'],[23,'Ekans'],[24,'Arbok'],[25,'Pikachu'],
    [26,'Raichu'],[27,'Sandshrew'],[28,'Sandslash'],[29,'Nidoran♀'],[30,'Nidorina'],
    [31,'Nidoqueen'],[32,'Nidoran♂'],[33,'Nidorino'],[34,'Nidoking'],[35,'Clefairy'],
    [36,'Clefable'],[37,'Vulpix'],[38,'Ninetales'],[39,'Jigglypuff'],[40,'Wigglytuff'],
    [41,'Zubat'],[42,'Golbat'],[43,'Oddish'],[44,'Gloom'],[45,'Vileplume'],
    [46,'Paras'],[47,'Parasect'],[48,'Venonat'],[49,'Venomoth'],[50,'Diglett'],
    [51,'Dugtrio'],[52,'Meowth'],[53,'Persian'],[54,'Psyduck'],[55,'Golduck'],
    [56,'Mankey'],[57,'Primeape'],[58,'Growlithe'],[59,'Arcanine'],[60,'Poliwag'],
    [61,'Poliwhirl'],[62,'Poliwrath'],[63,'Abra'],[64,'Kadabra'],[65,'Alakazam'],
    [66,'Machop'],[67,'Machoke'],[68,'Machamp'],[69,'Bellsprout'],[70,'Weepinbell'],
    [71,'Victreebel'],[72,'Tentacool'],[73,'Tentacruel'],[74,'Geodude'],[75,'Graveler'],
    [76,'Golem'],[77,'Ponyta'],[78,'Rapidash'],[79,'Slowpoke'],[80,'Slowbro'],
    [81,'Magnemite'],[82,'Magneton'],[83,'Farfetchd'],[84,'Doduo'],[85,'Dodrio'],
    [86,'Seel'],[87,'Dewgong'],[88,'Grimer'],[89,'Muk'],[90,'Shellder'],
    [91,'Cloyster'],[92,'Gastly'],[93,'Haunter'],[94,'Gengar'],[95,'Onix'],
    [96,'Drowzee'],[97,'Hypno'],[98,'Krabby'],[99,'Kingler'],[100,'Voltorb'],
    [101,'Electrode'],[102,'Exeggcute'],[103,'Exeggutor'],[104,'Cubone'],[105,'Marowak'],
    [106,'Hitmonlee'],[107,'Hitmonchan'],[108,'Lickitung'],[109,'Koffing'],[110,'Weezing'],
    [111,'Rhyhorn'],[112,'Rhydon'],[113,'Chansey'],[114,'Tangela'],[115,'Kangaskhan'],
    [116,'Horsea'],[117,'Seadra'],[118,'Goldeen'],[119,'Seaking'],[120,'Staryu'],
    [121,'Starmie'],[122,'Mr. Mime'],[123,'Scyther'],[124,'Jynx'],[125,'Electabuzz'],
    [126,'Magmar'],[127,'Pinsir'],[128,'Tauros'],[129,'Magikarp'],[130,'Gyarados'],
    [131,'Lapras'],[132,'Ditto'],[133,'Eevee'],[134,'Vaporeon'],[135,'Jolteon'],
    [136,'Flareon'],[137,'Porygon'],[138,'Omanyte'],[139,'Omastar'],[140,'Kabuto'],
    [141,'Kabutops'],[142,'Aerodactyl'],[143,'Snorlax'],[144,'Articuno'],[145,'Zapdos'],
    [146,'Moltres'],[147,'Dratini'],[148,'Dragonair'],[149,'Dragonite'],[150,'Mewtwo'],
    [151,'Mew']
];

function spriteUrl(id) {
    return `./assets/gifs/${id}.gif`;
}
function spriteUrlStatic(id) {
    return `./assets/gifs/${id}.gif`;
}

function xpForLevel(level) { return Math.floor(100 * Math.pow(1.15, level)); }

function getRank(level) {
    if (level <= 30) return RANKS[level - 1];
    if (level <= 40) return `Omega+${level}`;
    if (level <= 50) return `Beta+${level}`;
    return `Alpha+${level}`;
}

function getAvatarPokemon(level) {
    if (level <= 36) {
        const chainIdx = Math.floor((level - 1) / 3);
        const stageIdx = (level - 1) % 3;
        return EVOLUTION_CHAINS[chainIdx][stageIdx];
    }
    const legIdx = (level - 37) % LEGENDARIES.length;
    return LEGENDARIES[legIdx];
}

function genId() { return Math.random().toString(36).substr(2, 9) + Date.now().toString(36).slice(-4); }

// ========== STATE ==========

const DEFAULT_STATE = {
    player: { name: '', xp: 0, level: 1, lastBackup: Date.now() },
    projects: [],
    pokedex: [], // { instId, pokemonId, taskTitle, sourcePriority, date }
    oakTutorialDone: false,
    profilePokemon: null,
    items: { rare_candy: 0, fire_stone: 0, water_stone: 0, thunder_stone: 0, leaf_stone: 0, moon_stone: 0 }
};

let state = loadState();
let currentView = 'dashboard';
let currentProjectId = null;
let currentFilter = 'all';
let searchQuery = '';
let expandedTasks = new Set();
let pendingRevert = null;

function loadState() {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved) return JSON.parse(saved);

    // Migration from v2
    const v2 = localStorage.getItem(OLD_KEY_V2) || localStorage.getItem(OLD_KEY_V1);
    if (v2) {
        const old = JSON.parse(v2);
        if (old && old.quests) {
            const migrated = JSON.parse(JSON.stringify(DEFAULT_STATE));
            migrated.player = { ...migrated.player, ...old.player };
            const avatarUrls = {
                ash: './assets/avatars/ash.png',
                misty: './assets/avatars/misty.png',
                brock: './assets/avatars/brock.png',
                serena: './assets/avatars/serena.png',
                gary: './assets/avatars/gary.png',
                dawn: './assets/avatars/dawn.png',
                tracy: './assets/avatars/tracy.png',
                may: './assets/avatars/may.png',
                max: './assets/avatars/max.png',
                paul: './assets/avatars/paul.png',
                clemont: './assets/avatars/clemont.png',
                lillie: './assets/avatars/lillie.png',
                oak: './assets/avatars/oak.png'
            };
            const proj = {
                id: genId(), name: 'Legacy Quests', description: 'Migrated from previous version',
                color: '#8b5cf6', pokemonId: 25, createdAt: Date.now(), status: 'active', tasks: []
            };
            old.quests.forEach(q => {
                const subtasks = (q.subtasks || []).map(s => ({
                    id: s.id || genId(), text: s.text, done: s.progress === 100 || s.completed || false
                }));
                proj.tasks.push({
                    id: q.id || genId(), title: q.title, description: '',
                    priority: q.severity || 3,
                    status: q.completed ? 'done' : (subtasks.some(s => s.done) ? 'in-progress' : 'todo'),
                    deadline: q.deadline || '', createdAt: q.createdAt || Date.now(),
                    completedAt: q.completed ? Date.now() : null, subtasks
                });
            });
            migrated.projects.push(proj);
            return migrated;
        }
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function save() {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

// ========== INIT ==========

document.addEventListener('DOMContentLoaded', () => {
    if (!state.oakTutorialDone) {
        startOakTutorial();
    } else {
        renderAll();
    }
    setupEventListeners();
    checkBackupReminder();
});

function setupEventListeners() {
    // Sidebar nav
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    // Sidebar toggle
    document.getElementById('sidebar-toggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });

    // Close sidebar on main content click (mobile)
    document.querySelector('.main-content').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
    });

    // Oak Tutorial
    document.getElementById('btn-oak-next').addEventListener('click', () => {
        const name = document.getElementById('oak-trainer-name').value.trim();
        if (!name) return;
        state.player.name = name;
        document.getElementById('oak-step-1').classList.add('hidden');
        document.getElementById('oak-step-2').classList.remove('hidden');
    });

    let selectedStarterId = null;
    document.querySelectorAll('.starter-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.starter-card').forEach(c => c.style.transform = 'scale(1)');
            card.style.transform = 'scale(1.1)';
            selectedStarterId = parseInt(card.dataset.pokemon);
            document.getElementById('btn-oak-start').disabled = false;
        });
    });

    document.getElementById('btn-oak-start').addEventListener('click', () => {
        if (!selectedStarterId) return;
        state.oakTutorialDone = true;
        const starterInstId = 'pk_' + genId();
        state.profilePokemon = {
            instId: starterInstId,
            pokemonId: selectedStarterId,
            level: 5,
            xp: 0
        };
        state.pokedex.push({
            instId: starterInstId,
            pokemonId: selectedStarterId,
            taskTitle: "Oak's Gift",
            sourcePriority: 3,
            date: Date.now(),
            level: 5,
            xp: 0,
            inParty: true
        });
        save();
        document.getElementById('oak-modal').classList.add('hidden');
        renderAll();
        notify(`You received a Pokémon from Professor Oak!`, 'reward', spriteUrlStatic(selectedStarterId));
    });

    // Project CRUD
    document.getElementById('btn-new-project').addEventListener('click', () => openProjectModal());
    document.getElementById('project-form').addEventListener('submit', handleSaveProject);
    document.getElementById('btn-cancel-project').addEventListener('click', () => closeModal('project-modal'));

    // Task CRUD
    document.getElementById('btn-new-task').addEventListener('click', () => openTaskModal());
    document.getElementById('task-form').addEventListener('submit', handleSaveTask);
    document.getElementById('btn-cancel-task').addEventListener('click', () => closeModal('task-modal'));

    // Project detail actions
    document.getElementById('btn-back-dash').addEventListener('click', () => switchView('dashboard'));
    document.getElementById('btn-edit-project').addEventListener('click', () => openProjectModal(currentProjectId));
    document.getElementById('btn-archive-project').addEventListener('click', archiveCurrentProject);
    document.getElementById('btn-delete-project').addEventListener('click', deleteCurrentProject);

    // Backup
    document.getElementById('btn-export').addEventListener('click', exportData);
    document.getElementById('file-import').addEventListener('change', importData);

    // Search & Filter
    document.getElementById('task-search').addEventListener('input', e => { searchQuery = e.target.value.toLowerCase(); renderProjectDetail(); });
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProjectDetail();
        });
    });

    // Pokemon detail close
    document.getElementById('btn-close-pokemon').addEventListener('click', () => closeModal('pokemon-detail-modal'));

    // Sad alert revert
    document.getElementById('btn-cancel-revert').addEventListener('click', () => {
        pendingRevert = null;
        closeModal('sad-alert-modal');
    });
    document.getElementById('btn-confirm-revert').addEventListener('click', () => {
        if (pendingRevert) pendingRevert();
        pendingRevert = null;
        closeModal('sad-alert-modal');
    });

    // Close modals on backdrop click
    document.querySelectorAll('.modal').forEach(m => {
        m.addEventListener('click', e => { if (e.target === m) m.classList.add('hidden'); });
    });

    // Keyboard
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
    });

    const setProfileBtn = document.getElementById('btn-set-profile');
    if (setProfileBtn) {
        setProfileBtn.addEventListener('click', () => {
            const idx = setProfileBtn.dataset.idx;
            if (idx !== undefined) {
                const entry = state.pokedex[idx];
                state.profilePokemon = {
                    instId: entry.instId,
                    pokemonId: entry.pokemonId,
                    level: entry.level || 5,
                    xp: entry.xp || 0
                };
                save();
                renderAll();
                closeModal('pokemon-detail-modal');
                notify('Buddy updated!', 'info');
            }
        });
    }

    const togglePartyBtn = document.getElementById('btn-toggle-party');
    if (togglePartyBtn) {
        togglePartyBtn.addEventListener('click', () => {
            const idx = togglePartyBtn.dataset.idx;
            if (idx !== undefined) {
                const entry = state.pokedex[idx];
                if (entry.inParty) {
                    entry.inParty = false;
                    notify('Removed from Party!', 'info');
                } else {
                    const partyCount = state.pokedex.filter(p => p.inParty).length;
                    if (partyCount >= 6) {
                        notify('Your party is full! Remove a Pokémon first.', 'error');
                        return;
                    }
                    entry.inParty = true;
                    notify('Added to Party!', 'reward');
                }
                save();
                renderAll();
                closeModal('pokemon-detail-modal');
            }
        });
    }
}

// ========== VIEWS ==========

function switchView(view, projectId) {
    currentView = view;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    if (view === 'project' && projectId) {
        currentProjectId = projectId;
        document.getElementById('view-project').classList.add('active');
        // Highlight project in sidebar
        document.querySelectorAll('.project-item').forEach(p => p.classList.toggle('active', p.dataset.id === projectId));
        renderProjectDetail();
    } else {
        currentProjectId = null;
        document.getElementById(`view-${view}`).classList.add('active');
        const navBtn = document.querySelector(`.nav-item[data-view="${view}"]`);
        if (navBtn) navBtn.classList.add('active');
        document.querySelectorAll('.project-item').forEach(p => p.classList.remove('active'));
        if (view === 'dashboard') renderDashboard();
        else if (view === 'pokedex') renderPokedex();
        else if (view === 'archived') renderArchived();
    }
}

function renderAll() {
    updateTopBar();
    renderSidebarProjects();
    renderDashboard();
}

// ========== TOP BAR ==========

function updateTopBar() {
    let level = 1, xp = 0, pokeId = 25; // fallback Pikachu
    if (state.profilePokemon) {
        level = state.profilePokemon.level || 1;
        xp = state.profilePokemon.xp || 0;
        pokeId = state.profilePokemon.pokemonId;
    }
    const needed = xpForLevel(level);
    document.getElementById('player-level').textContent = level;
    document.getElementById('player-rank').textContent = getRank(level);
    document.getElementById('current-xp').textContent = xp;
    document.getElementById('next-level-xp').textContent = needed;
    document.getElementById('xp-bar').style.width = `${(xp / needed) * 100}%`;
    document.getElementById('player-avatar').src = spriteUrl(pokeId);

    // Overall progress
    const activeProjects = state.projects.filter(p => p.status === 'active');
    let allTasks = [];
    activeProjects.forEach(p => allTasks = allTasks.concat(p.tasks));
    const pct = calculateProgress(allTasks);
    document.getElementById('overall-pct').textContent = pct + '%';
    const circumference = 2 * Math.PI * 16;
    document.getElementById('overall-ring').style.strokeDashoffset = circumference - (pct / 100) * circumference;

    // Pokedex count
    document.getElementById('pokedex-count').textContent = state.pokedex.length;
}

// ========== SIDEBAR ==========

function renderParty() {
    const partyEl = document.getElementById('pokemon-party');
    if (!partyEl) return;

    let party = [];
    if (state.profilePokemon) party.push(state.profilePokemon);
    
    // Fill the rest with pokedex entries (unique pokemonIds)
    const partyIds = new Set(party.map(p => p.pokemonId));
    for (const p of state.pokedex) {
        if (party.length >= 6) break;
        if (!partyIds.has(p.pokemonId)) {
            party.push(p);
            partyIds.add(p.pokemonId);
        }
    }

    let html = '';
    for (let i = 0; i < 6; i++) {
        if (i < party.length) {
            const pk = party[i];
            const isBuddy = (i === 0 && state.profilePokemon && pk.instId === state.profilePokemon.instId);
            const db = POKEMON_POOL.find(d => d.id === pk.pokemonId);
            const name = db ? db.name : `Pokémon #${pk.pokemonId}`;
            html += `<div class="party-slot filled" title="${name}">
                <img src="${spriteUrlStatic(pk.pokemonId)}" alt="${name}">
                ${isBuddy ? '<span class="party-badge">Buddy</span>' : ''}
            </div>`;
        } else {
            html += `<div class="party-slot empty" title="Empty Slot"></div>`;
        }
    }
    partyEl.innerHTML = html;
}

function renderSidebarProjects() {
    const list = document.getElementById('project-list');
    const active = state.projects.filter(p => p.status === 'active');
    if (!active.length) {
        list.innerHTML = '<div class="empty-state"><p>No projects yet</p></div>';
        return;
    }
    list.innerHTML = active.map(p => {
        const taskCount = p.tasks.filter(t => t.status !== 'done').length;
        return `<button class="project-item ${currentProjectId === p.id ? 'active' : ''}" data-id="${p.id}" onclick="window._openProject('${p.id}')">
            <span class="project-dot" style="background:${p.color}"></span>
            <span class="project-item-name">${esc(p.name)}</span>
            <span class="project-item-count">${taskCount}</span>
        </button>`;
    }).join('');
}

window._openProject = id => switchView('project', id);

// ========== DASHBOARD ==========

function renderDashboard() {
    renderParty();
    const statsGrid = document.getElementById('stats-grid');
    const active = state.projects.filter(p => p.status === 'active');
    let totalTasks = 0, doneTasks = 0, overdueTasks = 0, inProgressTasks = 0;
    const now = new Date();
    active.forEach(p => p.tasks.forEach(t => {
        totalTasks++;
        if (t.status === 'done') doneTasks++;
        else if (t.status === 'in-progress') inProgressTasks++;
        if (t.deadline) {
            const deadlineDate = new Date(t.deadline);
            deadlineDate.setHours(0,0,0,0);
            const today = new Date();
            today.setHours(0,0,0,0);
            if (deadlineDate < today && t.status !== 'done') overdueTasks++;
        }
    }));

    statsGrid.innerHTML = `
        <div class="stat-card"><div class="stat-value" style="color:var(--primary)">${active.length}</div><div class="stat-label">Active Projects</div></div>
        <div class="stat-card"><div class="stat-value" style="color:var(--info)">${totalTasks - doneTasks}</div><div class="stat-label">Pending Tasks</div></div>
        <div class="stat-card"><div class="stat-value" style="color:var(--success)">${doneTasks}</div><div class="stat-label">Tasks Completed</div></div>
        <div class="stat-card"><div class="stat-value" style="color:var(--danger)">${overdueTasks}</div><div class="stat-label">Overdue Tasks</div></div>
    `;

    const overview = document.getElementById('projects-overview');
    if (!active.length) {
        overview.innerHTML = '<div class="empty-state"><p>Create your first project to get started!</p></div>';
        return;
    }
    overview.innerHTML = active.map(p => {
        const total = p.tasks.length;
        const done = p.tasks.filter(t => t.status === 'done').length;
        const pct = calculateProgress(p.tasks);
        const c = 2 * Math.PI * 16;
        const offset = c - (pct / 100) * c;
        return `<div class="project-overview-card" onclick="window._openProject('${p.id}')">
            <div class="project-ring-wrap">
                <svg class="project-ring" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="16" class="ring-bg"/>
                    <circle cx="20" cy="20" r="16" class="ring-fill" style="stroke:${p.color};stroke-dashoffset:${offset}"/>
                </svg>
                <span class="project-ring-pct" style="color:${p.color}">${pct}%</span>
            </div>
            <div class="project-overview-info">
                <div class="project-overview-name">${esc(p.name)}</div>
                <div class="project-overview-stats">${done}/${total} tasks fully done</div>
            </div>
        </div>`;
    }).join('');
}

// ========== PROJECT DETAIL ==========

function getProject(id) { return state.projects.find(p => p.id === (id || currentProjectId)); }

function renderProjectDetail() {
    const proj = getProject();
    if (!proj) return switchView('dashboard');

    document.getElementById('project-name').textContent = proj.name;
    const iconEl = document.getElementById('project-pokemon-icon');
    const avatarUrls = {
        ash: './assets/avatars/ash.png',
        misty: './assets/avatars/misty.png',
        brock: './assets/avatars/brock.png',
        serena: './assets/avatars/serena.png',
        gary: './assets/avatars/gary.png',
        dawn: './assets/avatars/dawn.png',
        tracy: './assets/avatars/tracy.png',
        may: './assets/avatars/may.png',
        max: './assets/avatars/max.png',
        paul: './assets/avatars/paul.png',
        clemont: './assets/avatars/clemont.png',
        lillie: './assets/avatars/lillie.png',
        oak: './assets/avatars/oak.png'
    };
    if (!proj.avatar) proj.avatar = 'ash'; // Default to character
    if (avatarUrls[proj.avatar]) { 
        iconEl.src = avatarUrls[proj.avatar]; 
        iconEl.style.display = ''; 
    } else {
        iconEl.style.display = 'none';
    }

    let tasks = [...proj.tasks];
    if (searchQuery) tasks = tasks.filter(t => t.title.toLowerCase().includes(searchQuery) || (t.description || '').toLowerCase().includes(searchQuery));
    if (currentFilter !== 'all') tasks = tasks.filter(t => t.status === currentFilter);

    const buckets = { todo: [], 'in-progress': [], done: [] };
    tasks.forEach(t => { if (buckets[t.status]) buckets[t.status].push(t); });

    ['todo', 'in-progress', 'done'].forEach(status => {
        const containerId = status === 'todo' ? 'tasks-todo' : status === 'in-progress' ? 'tasks-progress' : 'tasks-done';
        const countId = status === 'todo' ? 'count-todo' : status === 'in-progress' ? 'count-progress' : 'count-done';
        const container = document.getElementById(containerId);
        document.getElementById(countId).textContent = buckets[status].length;

        if (!buckets[status].length) {
            container.innerHTML = '<div class="empty-state"><p>No tasks</p></div>';
        } else {
            container.innerHTML = buckets[status].map(t => renderTaskCard(t, proj.id)).join('');
        }
    });

    setupDragAndDrop();
}

function renderTaskCard(task, projectId) {
    const priorityLabels = { 1:'Low', 2:'Med', 3:'Normal', 4:'High', 5:'Critical' };
    let deadlineBadge = '';
    if (task.deadline) {
        const deadlineDate = new Date(task.deadline);
        deadlineDate.setHours(0,0,0,0);
        const today = new Date();
        today.setHours(0,0,0,0);
        const diff = deadlineDate - today;
        const days = Math.round(diff / 86400000);
        const isOverdue = days < 0 && task.status !== 'done';
        const label = isOverdue ? 'Overdue' : days === 0 ? 'Today' : days === 1 ? 'Tomorrow' : `${days}d`;
        deadlineBadge = `<span class="task-badge deadline ${isOverdue ? 'overdue' : ''}">⏳ ${label}</span>`;
    }

    const stDone = task.subtasks.filter(s => s.done).length;
    const stTotal = task.subtasks.length;
    const stBar = stTotal ? `<div class="task-subtasks-bar">
        <div class="subtask-mini-bar"><div class="subtask-mini-fill" style="width:${(stDone/stTotal)*100}%"></div></div>
        <span class="subtask-mini-text">${stDone}/${stTotal}</span>
    </div>` : '';

    const subtasksHtml = task.subtasks.length ? task.subtasks.map(s =>
        `<div class="subtask-check-item ${s.done ? 'checked' : ''}">
            <input type="checkbox" ${s.done ? 'checked' : ''} onchange="window._toggleSubtask('${projectId}','${task.id}','${s.id}',this.checked)">
            <label>${esc(s.text)}</label>
        </div>`
    ).join('') : '';

    const descHtml = task.description ? `<div class="task-description">${esc(task.description)}</div>` : '';
    const hasExpand = task.description || task.subtasks.length;
    const isOpen = expandedTasks.has(task.id) ? 'open' : '';

    return `<div class="task-card priority-${task.priority}" draggable="true" data-task-id="${task.id}" data-project-id="${projectId}">
        <div class="task-card-title" ${hasExpand ? `style="cursor:pointer" onclick="window._toggleTaskExpand('${task.id}', this)"` : ''}>${esc(task.title)}</div>
        <div class="task-card-meta" style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; gap: 4px; align-items: center;">
                <span class="task-badge">P${task.priority}</span>
                ${deadlineBadge}
            </div>
            <div class="task-card-actions" style="margin-top: 0; display: flex; gap: 4px;">
                <button class="task-action-glass" onclick="window._editTask('${projectId}','${task.id}')">✏️ Edit</button>
                <button class="task-action-glass delete-btn" onclick="window._deleteTask('${projectId}','${task.id}')">🗑️ Delete</button>
            </div>
        </div>
        ${stBar}
        ${hasExpand ? `<div class="task-expand ${isOpen}">${descHtml}${subtasksHtml}</div>` : ''}
    </div>`;
}

// ========== DRAG AND DROP ==========

function setupDragAndDrop() {
    document.querySelectorAll('.task-card[draggable]').forEach(card => {
        card.addEventListener('dragstart', e => {
            card.classList.add('dragging');
            e.dataTransfer.setData('text/plain', JSON.stringify({
                taskId: card.dataset.taskId,
                projectId: card.dataset.projectId
            }));
            e.dataTransfer.effectAllowed = 'move';
        });
        card.addEventListener('dragend', () => card.classList.remove('dragging'));
    });

    document.querySelectorAll('.kanban-column').forEach(col => {
        col.addEventListener('dragover', e => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; col.classList.add('drag-over'); });
        col.addEventListener('dragleave', () => col.classList.remove('drag-over'));
        col.addEventListener('drop', e => {
            e.preventDefault();
            col.classList.remove('drag-over');
            try {
                const { taskId, projectId } = JSON.parse(e.dataTransfer.getData('text/plain'));
                const newStatus = col.dataset.status;
                moveTask(projectId, taskId, newStatus);
            } catch(err) {}
        });
    });
}

// ========== TASK ACTIONS ==========

function moveTask(projectId, taskId, newStatus) {
    const proj = getProject(projectId);
    const task = proj?.tasks.find(t => t.id === taskId);
    if (!task || task.status === newStatus) return;

    const oldStatus = task.status;
    const doMove = () => {
        task.status = newStatus;
        if (newStatus === 'done' && oldStatus !== 'done') {
            task.completedAt = Date.now();
            task.subtasks.forEach(s => s.done = true);
            const xp = 20 * task.priority;
            addXP(xp);
            catchPokemon(task);
            showCelebration(xp);
            fireConfetti(true);
        } else if (newStatus !== 'done' && oldStatus === 'done') {
            task.completedAt = null;
        }
        save();
        renderProjectDetail();
        renderSidebarProjects();
        updateTopBar();
    };

    if (oldStatus === 'done' && newStatus !== 'done') {
        const xpLost = 20 * task.priority;
        document.getElementById('sad-alert-xp').textContent = xpLost;
        pendingRevert = () => {
            removeXP(xpLost);
            notify(`Lost ${xpLost} XP`, 'punish');

            if (task.caughtPokemonInstId) {
                const idx = state.pokedex.findIndex(p => p.instId === task.caughtPokemonInstId);
                if (idx !== -1) {
                    const removed = state.pokedex.splice(idx, 1)[0];
                    if (state.profilePokemon && state.profilePokemon.instId === removed.instId) {
                        const starter = state.pokedex.find(p => p.taskTitle === "Oak's Gift") || state.pokedex[0];
                        if (starter) {
                            state.profilePokemon = {
                                instId: starter.instId, pokemonId: starter.pokemonId, xp: 0, level: 5
                            };
                            notify('Buddy lost. Reverted to your starter Pokémon!', 'info');
                        } else {
                            state.profilePokemon = null;
                        }
                    }
                }
                delete task.caughtPokemonInstId;
            }

            doMove();
        };
        document.getElementById('sad-alert-modal').classList.remove('hidden');
        return;
    }

    doMove();
}

window._toggleTaskExpand = (taskId, el) => {
    if (expandedTasks.has(taskId)) expandedTasks.delete(taskId);
    else expandedTasks.add(taskId);
    const expandEl = el.parentElement.querySelector('.task-expand');
    if (expandEl) expandEl.classList.toggle('open');
};

window._moveTask = (pId, tId, status) => moveTask(pId, tId, status);
window._editTask = (pId, tId) => openTaskModal(tId);
window._deleteTask = (pId, tId) => {
    if (!confirm('Delete this task?')) return;
    const proj = getProject(pId);
    proj.tasks = proj.tasks.filter(t => t.id !== tId);
    save();
    renderProjectDetail();
    renderSidebarProjects();
    updateTopBar();
};

window._toggleSubtask = (pId, tId, sId, checked) => {
    const proj = getProject(pId);
    const task = proj?.tasks.find(t => t.id === tId);
    const sub = task?.subtasks.find(s => s.id === sId);
    if (!sub) return;

    const wasDone = sub.done;
    if (checked === wasDone) return;

    if (!checked && wasDone) {
        let xpLost = 5 * task.priority;
        const willRevertMainTask = (task.status === 'done');
        if (willRevertMainTask) xpLost += 20 * task.priority;

        document.getElementById('sad-alert-xp').textContent = xpLost;
        pendingRevert = () => {
            sub.done = false;
            removeXP(xpLost);
            notify(`Lost ${xpLost} XP`, 'punish');

            if (task.caughtPokemonInstId) {
                const idx = state.pokedex.findIndex(p => p.instId === task.caughtPokemonInstId);
                if (idx !== -1) {
                    const removed = state.pokedex.splice(idx, 1)[0];
                    if (state.profilePokemon && state.profilePokemon.instId === removed.instId) {
                        const starter = state.pokedex.find(p => p.taskTitle === "Oak's Gift") || state.pokedex[0];
                        if (starter) {
                            state.profilePokemon = {
                                instId: starter.instId, pokemonId: starter.pokemonId, xp: 0, level: 5
                            };
                            notify('Buddy lost. Reverted to your starter Pokémon!', 'info');
                        } else {
                            state.profilePokemon = null;
                        }
                    }
                }
                delete task.caughtPokemonInstId;
            }
            
            const anyDone = task.subtasks.some(s => s.done);
            if (willRevertMainTask) {
                task.status = 'in-progress';
                task.completedAt = null;
            } else if (!anyDone && task.status === 'in-progress') {
                task.status = 'todo';
            }

            save();
            renderProjectDetail();
            renderSidebarProjects();
            updateTopBar();
        };
        document.getElementById('sad-alert-modal').classList.remove('hidden');
        return;
    }

    sub.done = true;
    const xp = 5 * task.priority;
    addXP(xp);
    notify(`+${xp} XP!`, 'reward');
    fireConfetti(false);

    // Auto-status
    const allDone = task.subtasks.length && task.subtasks.every(s => s.done);
    const anyDone = task.subtasks.some(s => s.done);
    if (allDone && task.status !== 'done') {
        moveTask(pId, tId, 'done');
        return;
    } else if (anyDone && task.status === 'todo') {
        task.status = 'in-progress';
    }

    save();
    renderProjectDetail();
    updateTopBar();
};

// ========== POKEDEX ==========

function showCatchConfetti(id, name) {
    if (window.confetti) {
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
    }
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100vw';
    banner.style.height = '100vh';
    banner.style.background = 'rgba(0,0,0,0.85)';
    banner.style.zIndex = '10001';
    banner.style.display = 'flex';
    banner.style.alignItems = 'center';
    banner.style.justifyContent = 'center';
    banner.style.flexDirection = 'column';
    banner.style.animation = 'popIn 0.3s';
    banner.innerHTML = `
        <h2 style="color: var(--primary); font-size: 2rem; margin-bottom: 20px; text-shadow: 0 0 20px var(--primary); text-align: center;">Gotcha! ${name} was caught!</h2>
        <img src="${spriteUrlStatic(id)}" style="height: 150px; image-rendering: pixelated; margin-bottom: 30px; filter: drop-shadow(0 0 10px rgba(255,255,255,0.5));" alt="${name}">
        <button class="btn btn-primary glow-btn" onclick="this.parentElement.remove()" style="font-size: 1.2rem; padding: 10px 30px;">Awesome!</button>
    `;
    document.body.appendChild(banner);
}

function catchPokemon(task) {
    const caughtIds = new Set(state.pokedex.map(p => p.pokemonId));
    
    let targetRarities = [1, 2];
    if (task.priority == 3) targetRarities = [3];
    else if (task.priority == 4) targetRarities = [4];
    else if (task.priority == 5) targetRarities = [5];

    let available = [];
    if (typeof POKEMON_DB !== 'undefined') {
        available = POKEMON_DB.filter(p => targetRarities.includes(p.rarity) && !caughtIds.has(p.id));
        if (!available.length) available = POKEMON_DB.filter(p => targetRarities.includes(p.rarity));
        if (!available.length) available = POKEMON_DB;
    } else {
        available = POKEMON_POOL.map(p => ({ id: p[0], name: p[1] }));
    }

    const p = available[Math.floor(Math.random() * available.length)];
    
    const instId = 'pk_' + genId();
    let level = 5;
    if (task.priority == 3) level = 15;
    if (task.priority == 4) level = 30;
    if (task.priority == 5) level = 50;

    const inParty = state.pokedex.filter(x => x.inParty).length < 6;

    state.pokedex.push({ 
        instId,
        pokemonId: p.id, 
        taskTitle: task.title, 
        sourcePriority: task.priority,
        date: Date.now(),
        level: level,
        xp: 0,
        inParty: inParty
    });
    task.caughtPokemonInstId = instId;
    save();

    showCatchConfetti(p.id, p.name || p[1]);

    if (!inParty && state.pokedex.length === 7) {
        document.getElementById('oak-party-full-modal').classList.remove('hidden');
    }
}

function renderPokedex() {
    const activeGrid = document.getElementById('pokedex-grid-active');
    const passiveGrid = document.getElementById('pokedex-grid-passive');
    if (!activeGrid || !passiveGrid) return;
    
    if (state.pokedex.length > 0 && state.pokedex.filter(p => p.inParty).length === 0) {
        state.pokedex.forEach((p, i) => { if (i < 6) p.inParty = true; else p.inParty = false; });
        save();
    }

    const party = state.pokedex.filter(p => p.inParty);
    const box = state.pokedex.filter(p => !p.inParty);

    const renderGrid = (list) => {
        if (!list.length) return `<div class="empty-state"><p>Empty</p></div>`;
        return list.map((entry) => {
            const pokeId = entry.pokemonId;
            let pokeName = 'Unknown';
            if (typeof POKEMON_DB !== 'undefined') {
                const p = POKEMON_DB.find(x => x.id === pokeId);
                if (p) pokeName = p.name;
            } else {
                const p = POKEMON_POOL.find(x => x[0] === pokeId);
                if (p) pokeName = p[1];
            }
            const idx = state.pokedex.indexOf(entry);
            return `<div class="pokedex-card" onclick="window._showPokemon(${idx})">
                <img src="${spriteUrlStatic(pokeId)}" alt="${pokeName}">
                <span>${pokeName} <small style="display:block;color:var(--text-dim);font-size:10px;">Lv.${entry.level || 5}</small></span>
            </div>`;
        }).join('');
    };

    activeGrid.innerHTML = renderGrid(party);
    passiveGrid.innerHTML = renderGrid(box);
}

window._showPokemon = idx => {
    const entry = state.pokedex[idx];
    if (!entry) return;
    const pokeId = entry.pokemonId;
    let pokeName = 'Unknown';
    if (typeof POKEMON_DB !== 'undefined') {
        const p = POKEMON_DB.find(x => x.id === pokeId);
        if (p) pokeName = p.name;
    } else {
        const p = POKEMON_POOL.find(x => x[0] === pokeId);
        if (p) pokeName = p[1];
    }
    document.getElementById('pd-sprite').src = spriteUrl(pokeId);
    document.getElementById('pd-name').textContent = pokeName + ` (Lv.${entry.level || 5})`;
    document.getElementById('pd-task').textContent = entry.taskTitle;
    document.getElementById('pd-date').textContent = new Date(entry.date).toLocaleDateString('en-GB');
    const btnSetProfile = document.getElementById('btn-set-profile');
    if (btnSetProfile) btnSetProfile.dataset.idx = idx;
    const btnToggleParty = document.getElementById('btn-toggle-party');
    if (btnToggleParty) {
        btnToggleParty.dataset.idx = idx;
        btnToggleParty.textContent = entry.inParty ? 'Remove from Party' : 'Add to Party';
    }
    document.getElementById('pokemon-detail-modal').classList.remove('hidden');
};

// ========== ARCHIVED ==========

function renderArchived() {
    const archived = state.projects.filter(p => p.status === 'archived');
    const container = document.getElementById('archived-list');
    if (!archived.length) {
        container.innerHTML = '<div class="empty-state"><p>No archived projects.</p></div>';
        return;
    }
    container.innerHTML = archived.map(p => {
        const done = p.tasks.filter(t => t.status === 'done').length;
        return `<div class="archived-card">
            <div class="archived-card-info">
                <h4><span style="color:${p.color}">●</span> ${esc(p.name)}</h4>
                <p>${done}/${p.tasks.length} tasks completed</p>
            </div>
            <div style="display:flex;gap:8px">
                <button class="btn btn-sm btn-secondary" onclick="window._unarchive('${p.id}')">♻️ Restore</button>
                <button class="btn btn-sm btn-danger" onclick="window._deleteProject('${p.id}')">🗑️</button>
            </div>
        </div>`;
    }).join('');
}

window._unarchive = id => {
    const p = state.projects.find(pr => pr.id === id);
    if (p) { p.status = 'active'; save(); renderAll(); renderArchived(); }
};

window._deleteProject = id => {
    if (!confirm('Permanently delete this project and all its tasks?')) return;
    state.projects = state.projects.filter(p => p.id !== id);
    save();
    renderAll();
    if (currentView === 'archived') renderArchived();
};

// ========== PROJECT MODAL ==========

function openProjectModal(editId) {
    const modal = document.getElementById('project-modal');
    const form = document.getElementById('project-form');
    form.reset();
    document.getElementById('p-id').value = '';

    // Color picker
    const picker = document.getElementById('color-picker');
    picker.innerHTML = PROJECT_COLORS.map(c =>
        `<div class="color-swatch" style="background:${c}" data-color="${c}" onclick="document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('selected'));this.classList.add('selected')"></div>`
    ).join('');

    if (editId) {
        const p = state.projects.find(pr => pr.id === editId);
        document.getElementById('project-modal-title').textContent = 'Edit Project';
        document.getElementById('p-id').value = p.id;
        document.getElementById('p-name').value = p.name;
        document.getElementById('p-desc').value = p.description || '';
        document.getElementById('p-avatar').value = p.avatar || 'ash';
        const swatch = picker.querySelector(`.color-swatch[data-color="${p.color}"]`);
        if (swatch) swatch.classList.add('selected');
    } else {
        document.getElementById('project-modal-title').textContent = 'New Project';
        document.getElementById('p-avatar').value = 'ash';
        picker.querySelector('.color-swatch')?.classList.add('selected');
    }

    modal.classList.remove('hidden');
}

function handleSaveProject(e) {
    e.preventDefault();
    const id = document.getElementById('p-id').value;
    const name = document.getElementById('p-name').value.trim();
    const desc = document.getElementById('p-desc').value.trim();
    const avatar = document.getElementById('p-avatar').value;
    const selectedColor = document.querySelector('.color-swatch.selected');
    const color = selectedColor ? selectedColor.dataset.color : PROJECT_COLORS[0];

    if (id) {
        const p = state.projects.find(pr => pr.id === id);
        p.name = name; p.description = desc; p.color = color; p.avatar = avatar;
        notify('Project updated!', 'info');
    } else {
        state.projects.push({
            id: genId(), name, description: desc, color, avatar,
            createdAt: Date.now(), status: 'active', tasks: []
        });
        notify('Project created!', 'reward');
    }

    save();
    closeModal('project-modal');
    renderAll();
}

// ========== TASK MODAL ==========

function openTaskModal(editTaskId) {
    const modal = document.getElementById('task-modal');
    const form = document.getElementById('task-form');
    form.reset();
    document.getElementById('t-id').value = '';

    const proj = getProject();
    
    const assignees = new Set();
    state.projects.forEach(p => p.tasks.forEach(t => { 
        if (t.assignee) assignees.add(t.assignee); 
        t.subtasks.forEach(s => {
            const matches = s.text.match(/@([a-zA-Z0-9_]+)/g);
            if (matches) matches.forEach(m => assignees.add(m.substring(1)));
        });
    }));
    document.getElementById('assignees-list').innerHTML = Array.from(assignees).sort().map(a => `<option value="${esc(a)}">`).join('');

    if (editTaskId) {
        const task = proj.tasks.find(t => t.id === editTaskId);
        document.getElementById('task-modal-title').textContent = 'Edit Task';
        document.getElementById('t-id').value = task.id;
        document.getElementById('t-title').value = task.title;
        document.getElementById('t-desc').value = task.description || '';
        document.getElementById('t-priority').value = task.priority;
        document.getElementById('t-deadline').value = task.deadline || '';
        document.getElementById('t-assignee').value = task.assignee || '';
        document.getElementById('t-subtasks').value = task.subtasks.map(s => s.text).join('\n');
    } else {
        document.getElementById('task-modal-title').textContent = 'New Task';
    }
    modal.classList.remove('hidden');
}

function handleSaveTask(e) {
    e.preventDefault();
    const proj = getProject();
    if (!proj) return;

    const id = document.getElementById('t-id').value;
    const title = document.getElementById('t-title').value.trim();
    const desc = document.getElementById('t-desc').value.trim();
    const priority = parseInt(document.getElementById('t-priority').value);
    const deadline = document.getElementById('t-deadline').value;
    const assignee = document.getElementById('t-assignee').value.trim();
    const subtaskLines = document.getElementById('t-subtasks').value.split('\n').map(s => s.trim()).filter(Boolean);

    if (id) {
        const task = proj.tasks.find(t => t.id === id);
        task.title = title;
        task.description = desc;
        task.priority = priority;
        task.deadline = deadline;
        task.assignee = assignee;
        // Smart merge subtasks
        task.subtasks = subtaskLines.map(text => {
            const existing = task.subtasks.find(s => s.text.toLowerCase() === text.toLowerCase());
            return existing ? { ...existing, text } : { id: genId(), text, done: false };
        });
        notify('Task updated!', 'info');
    } else {
        proj.tasks.push({
            id: genId(), title, description: desc, priority,
            status: 'todo', deadline, assignee, createdAt: Date.now(), completedAt: null,
            subtasks: subtaskLines.map(text => ({ id: genId(), text, done: false }))
        });
        notify('Task created!', 'reward');
    }

    save();
    closeModal('task-modal');
    renderProjectDetail();
    renderSidebarProjects();
    updateTopBar();
}

// ========== ARCHIVE / DELETE PROJECT ==========

function archiveCurrentProject() {
    const proj = getProject();
    if (!proj || !confirm(`Archive "${proj.name}"?`)) return;
    proj.status = 'archived';
    save();
    switchView('dashboard');
    renderAll();
    notify('Project archived.', 'info');
}

function deleteCurrentProject() {
    if (!confirm('Permanently delete this project and all tasks?')) return;
    state.projects = state.projects.filter(p => p.id !== currentProjectId);
    save();
    switchView('dashboard');
    renderAll();
}

// ========== GAMIFICATION ==========

function removeXP(amount) {
    if (!state.profilePokemon) return;
    state.profilePokemon.xp -= amount;
    while (state.profilePokemon.xp < 0 && state.profilePokemon.level > 1) {
        state.profilePokemon.level--;
        state.profilePokemon.xp += xpForLevel(state.profilePokemon.level);
    }
    if (state.profilePokemon.xp < 0) state.profilePokemon.xp = 0;
    
    // Sync to pokedex
    const entry = state.pokedex.find(p => p.instId === state.profilePokemon.instId);
    if (entry) {
        entry.level = state.profilePokemon.level;
        entry.xp = state.profilePokemon.xp;
        entry.pokemonId = state.profilePokemon.pokemonId;
    }

    save();
    updateTopBar();
}

function addXP(amount) {
    if (!state.profilePokemon) return;
    state.profilePokemon.xp += amount;
    let needed = xpForLevel(state.profilePokemon.level);
    let leveledUp = false;
    
    while (state.profilePokemon.xp >= needed) {
        state.profilePokemon.xp -= needed;
        state.profilePokemon.level++;
        needed = xpForLevel(state.profilePokemon.level);
        leveledUp = true;
    }
    
    // Check evolutions
    if (leveledUp && typeof POKEMON_DB !== 'undefined') {
        const db = POKEMON_DB.find(p => p.id === state.profilePokemon.pokemonId);
        if (db && db.evolutions && db.evolutions.length > 0) {
            const nextEvo = db.evolutions.find(e => state.profilePokemon.level >= e.level);
            if (nextEvo) {
                state.profilePokemon.pokemonId = nextEvo.id;
                notify(`Your Pokémon evolved!`, 'reward', spriteUrlStatic(nextEvo.id));
                fireConfetti(true);
            }
        }
        notify(`LEVEL UP! Now Level ${state.profilePokemon.level} — ${getRank(state.profilePokemon.level)}`, 'reward',
            spriteUrlStatic(state.profilePokemon.pokemonId));
        if (!leveledUp) fireConfetti(true);
    }

    // Sync to pokedex
    const entry = state.pokedex.find(p => p.instId === state.profilePokemon.instId);
    if (entry) {
        entry.level = state.profilePokemon.level;
        entry.xp = state.profilePokemon.xp;
        entry.pokemonId = state.profilePokemon.pokemonId;
    }

    save();
    updateTopBar();
}

function showCelebration(xp) {
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    const pokeId = state.profilePokemon ? state.profilePokemon.pokemonId : 25;
    overlay.innerHTML = `<img src="${spriteUrl(pokeId)}" alt=""><h2>TASK CLEARED!</h2><p>+${xp} XP</p>`;
    document.body.appendChild(overlay);
    setTimeout(() => { overlay.style.opacity = '0'; overlay.style.transition = 'opacity 0.5s'; setTimeout(() => overlay.remove(), 500); }, 3000);
}

function fireConfetti(big) {
    if (typeof confetti === 'undefined') return;
    const colors = ['#8b5cf6','#10b981','#f59e0b','#06b6d4','#ec4899'];
    if (big) {
        const end = Date.now() + 2000;
        (function frame() {
            confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors });
            confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors });
            if (Date.now() < end) requestAnimationFrame(frame);
        })();
    } else {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 }, colors });
    }
}

// ========== BACKUP ==========

function exportData() {
    state.player.lastBackup = Date.now();
    save();
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quest_planner_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    notify('Backup saved!', 'reward');
}

function importData(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        try {
            const data = JSON.parse(ev.target.result);
            if (data.player && data.projects) {
                state = data;
                if (!state.pokedex) state.pokedex = [];
                save();
                renderAll();
                switchView('dashboard');
                notify('Backup loaded!', 'reward');
            } else throw new Error('Invalid');
        } catch { notify('Invalid backup file.', 'punish'); }
    };
    reader.readAsText(file);
    e.target.value = '';
}

function checkBackupReminder() {
    const daysSince = (Date.now() - state.player.lastBackup) / 86400000;
    if (daysSince > 7) {
        notify('It has been over 7 days since your last backup! You can export your data in the sidebar.', 'info');
    }
}

// ========== UTILITIES ==========

function startOakTutorial() {
    document.getElementById('oak-modal').classList.remove('hidden');
    document.getElementById('oak-step-1').classList.remove('hidden');
    document.getElementById('oak-step-2').classList.add('hidden');
    document.getElementById('oak-trainer-name').value = state.player.name || '';
}

function calculateProgress(tasks) {
    if (!tasks || !tasks.length) return 0;
    let completedWeight = 0;
    tasks.forEach(t => {
        if (t.status === 'done') {
            completedWeight += 1;
        } else if (t.subtasks && t.subtasks.length > 0) {
            const subDone = t.subtasks.filter(s => s.done).length;
            completedWeight += (subDone / t.subtasks.length);
        } else if (t.status === 'in-progress') {
            completedWeight += 0.5;
        }
    });
    return Math.round((completedWeight / tasks.length) * 100);
}

function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function esc(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}


function notify(message, type = 'info', imgUrl) {
    const container = document.getElementById('notification-container');
    const el = document.createElement('div');
    el.className = `notification ${type}`;
    const icon = imgUrl ? `<img src="${imgUrl}">` : type === 'reward' ? '⭐' : type === 'punish' ? '⚠️' : 'ℹ️';
    el.innerHTML = `${imgUrl ? icon : `<span style="font-size:1.2rem">${icon}</span>`} <div>${message}</div>`;
    
    container.appendChild(el);
    setTimeout(() => {
        el.style.opacity = '0'; el.style.transform = 'translateX(120%)'; el.style.transition = 'all 0.3s';
        setTimeout(() => el.remove(), 300);
    }, 3500);
}
