console.log("Typing Master");

const textArea = document.getElementById("text");
let wordCount = 0;
let letterCount = 0;
let startTime;

textArea.addEventListener("input", handleInputChange);

function handleInputChange() {
    const text = textArea.value.trim();
    
    // Count words
    const words = text.split(/\s+/);
    wordCount = words.filter(word => word.length > 0).length;

    // Count letters
    letterCount = text.replace(/\s/g, "").length;

    // Start the timer
    if (!startTime) {
        startTime = new Date();
    }

    updateStats();
}

const worldCounetr = document.getElementById("worldCounetr");
const letterCounetr = document.getElementById("letterCounetr");
const TimeCounetr = document.getElementById("TimeCounetr");
function updateStats() {
    const elapsedTime = getElapsedTime();
    worldCounetr.innerHTML =`Word : ${wordCount}`;
    letterCounetr.innerHTML = `Letter : ${letterCount}`;
    TimeCounetr.innerHTML = `Time : ${elapsedTime}s`;

    // You can use these values as needed, for example, display them on the UI.
}

function getElapsedTime() {
    if (startTime) {
        const currentTime = new Date();
        const elapsedTime = (currentTime - startTime) / 1000; // in seconds
        return elapsedTime.toFixed(2);
    }

    return 0;
}
const HandleRest = () =>{
    worldCounetr.innerHTML =`Word 0`;
    letterCounetr.innerHTML = `Letter 0 `;
    TimeCounetr.innerHTML = `Time 0`;
}
