let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-btn")
let countSum = document.getElementById("count-sum") 
let resetBtn = document.getElementById("reset-btn")

let count = 0
let saveNum = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


function save() {
  saveNum = saveNum + count
  count = 0
  countEl.innerText = count
  countSum.innerText = saveNum
}

function reset() {
  saveNum = 0
  count = 0
  countEl.innerText = 0
  countSum.innerText = 0
}