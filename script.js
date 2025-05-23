function calculateLove() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    var loveScore = Math.floor(Math.random() * 100) + 1;
    var message = "";

    if (loveScore > 70) {
        message = `❤️ Your love score is ${loveScore}% — Your love is truly great! 💖`;
    } else if (loveScore > 40) {
        message = `💘 Your love score is ${loveScore}% — Your love is good! 😊`;
    } else {
        message = `💔 Your love score is ${loveScore}% — You need to work on your love! 🌧️`;
    }

    document.getElementById("result").innerText = message;
}
