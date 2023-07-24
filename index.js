let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

function calculateTotal() {
    let saveCounts = saveEl.textContent.split(" - ");
    let total = 0;
    for (let i = 0; i < saveCounts.length; i++) {
        let countNum = parseInt(saveCounts[i]);
        if (!isNaN(countNum)) {
            total += countNum;
        }
    }
    alert("Total: " + total);
}
