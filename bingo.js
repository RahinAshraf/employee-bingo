const items = [
    "Complete Training Module", "Attend Staff Meeting", "Cover weekend shift",
    "Switch shift with co-worker", "Arrive 15 minutes early", "Cover an extra shift",
    "Assist Team Member", "Work a holiday shift", "Get a good customer review",
    "Work during a rush-hour shift", "Complete Training Module", "Attend Staff Meeting",
    "Cover weekend shift", "Switch shift with co-worker", "Arrive 15 minutes early",
    "Cover an extra shift", "Assist Team Member", "Work a holiday shift",
    "Get a good customer review", "Work during a rush-hour shift"
];

let completedCount = 0;

const bingoBoard = document.getElementById("bingoBoard");
const progress = document.getElementById("progress");
const progressBarInner = document.getElementById("progressBarInner");
const claimRewardsBtn = document.getElementById("claimRewardsBtn");
const rewardsModal = document.getElementById("rewardsModal");
const modalClose = document.getElementById("modalClose");

items.forEach((item, index) => {
    const cell = document.createElement("div");
    cell.className = "bingo-cell unselected";
    cell.innerText = item;
    cell.onclick = function() {
        toggleCompletion(cell);
    };
    bingoBoard.appendChild(cell);
});

function toggleCompletion(cell) {
    if (cell.classList.contains("completed")) {
        cell.classList.remove("completed");
        cell.classList.add("unselected");
        completedCount--;
    } else {
        cell.classList.remove("unselected");
        cell.classList.add("completed");
        completedCount++;
    }

    updateProgress();
}

function updateProgress() {
    progress.innerText = `Tasks completed: ${completedCount}/20`;
    const progressPercentage = (completedCount / items.length) * 100;
    progressBarInner.style.width = `${progressPercentage}%`;
    claimRewardsBtn.disabled = completedCount < items.length;
}

claimRewardsBtn.onclick = function() {
    rewardsModal.style.display = "block";
};

modalClose.onclick = function() {
    rewardsModal.style.display = "none";
};

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

function goHome() {
    alert("Navigating to Home...");
}

function toggleSettings() {
    alert("Opening Settings...");
}

function showInstructions() {
    alert("Showing Instructions...");
}

function showLeaderboard() {
    alert("Showing Leaderboard...");
}

function showFeedback() {
    alert("Showing Feedback...");
}

function showSupport() {
    alert("Showing Support...");
}

function resetGame() {
    completedCount = 0;
    bingoBoard.innerHTML = '';
    items.forEach((item) => {
        const cell = document.createElement("div");
        cell.className = "bingo-cell unselected";
        cell.innerText = item;
        cell.onclick = function() {
            toggleCompletion(cell);
        };
        bingoBoard.appendChild(cell);
    });
    updateProgress();
}

function logout() {
    alert("Logging out...");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const themeToggleButton = document.getElementById("themeToggle");
    themeToggleButton.innerText = document.body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
}
