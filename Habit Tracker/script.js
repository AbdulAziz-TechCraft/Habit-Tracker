const list = document.getElementById("habit-list");
const addBtn = document.getElementById("add-habit");
const toggleDark = document.getElementById("toggle-dark");
const toast = document.getElementById("toast");

let habits = JSON.parse(localStorage.getItem("habits")) || [];

function showToast(msg) {
  toast.textContent = msg;
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 1500);
}

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function renderHabits() {
  list.innerHTML = "";
  habits.forEach((habit, i) => {
    const li = document.createElement("li");
    li.className = "habit";
    li.innerHTML = `
      <span>${habit.emoji || "📌"} ${habit.name} (🔥${habit.streak})</span>
      <div>
        <button onclick="checkHabit(${i})">✅</button>
        <button onclick="pinHabit(${i})">📌</button>
        <button onclick="deleteHabit(${i})">🗑️</button>
      </div>`;
    if (habit.pinned) li.style.order = -1;
    list.appendChild(li);
  });
}

function addHabit() {
  const name = document.getElementById("habit-name").value.trim();
  const emoji = document.getElementById("habit-emoji").value.trim();
  if (!name) return;

  habits.push({
    name,
    emoji,
    streak: 0,
    lastCheck: null,
    pinned: false,
  });

  saveHabits();
  renderHabits();

  document.getElementById("habit-name").value = "";
  document.getElementById("habit-emoji").value = "";
}

function checkHabit(i) {
  const today = new Date().toDateString();
  if (habits[i].lastCheck !== today) {
    habits[i].streak++;
    habits[i].lastCheck = today;
    showToast("✅ Habit Checked!");
    saveHabits();
    renderHabits();
  } else {
    showToast("⏳ Already checked today");
  }
}

function pinHabit(i) {
  habits[i].pinned = !habits[i].pinned;
  saveHabits();
  renderHabits();
}

function deleteHabit(i) {
  if (confirm("Delete this habit?")) {
    habits.splice(i, 1);
    saveHabits();
    renderHabits();
  }
}

addBtn.addEventListener("click", addHabit);
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});

document.getElementById("search").addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();
  Array.from(list.children).forEach((li) => {
    li.style.display = li.textContent.toLowerCase().includes(val) ? "" : "none";
  });
});

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

renderHabits();
