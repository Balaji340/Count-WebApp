let saveEl = document.getElementById("save-el"); // New element to display save
let countEl = document.getElementById("count-el"); // New element to display count
let totalEl = document.getElementById("total-el"); // New element to display total
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count; // Update count display element
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr; 
    countEl.textContent = 0; 
    count = 0; // Update the save display element
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
    totalEl.textContent = "Total: " + total; // Update the total display element
}
