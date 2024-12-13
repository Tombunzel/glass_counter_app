let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let dailyCount = 0
let today = new Date().toISOString().slice(0, 10)

function increment() {
    count += 1
    countEl.textContent = count
    dailyCount += 1
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    countEl.textContent = 0
    let dailyCountPar = document.getElementById("daily-count")
    dailyCountPar.innerText = today + " cups drunk: " + dailyCount
    saveEl.textContent = "Previous entries today: "
}