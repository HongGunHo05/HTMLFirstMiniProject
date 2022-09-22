function showCard(card) {
    if (card == "card1") {
        for (let i = 1; i <= 3; i++) {
            if (i != 1) {
                document.getElementById(i + "card").style.color = "white";
                document.getElementById("card" + i).style.display = "none";
            } else {
                document.getElementById(i + "card").style.color = "purple";
                document.getElementById("card1").style.display = "block";
            }
        }
    }
    if (card == "card2") {
        for (let i = 1; i <= 3; i++) {
            if (i != 2) {
                document.getElementById(i + "card").style.color = "white";
                document.getElementById("card" + i).style.display = "none";
            } else {
                document.getElementById(i + "card").style.color = "purple";
                document.getElementById("card2").style.display = "block";
            }
        }
    }
    if (card == "card3") {
        for (let i = 1; i <= 3; i++) {
            if (i != 3) {
                document.getElementById(i + "card").style.color = "white";
                document.getElementById("card" + i).style.display = "none";
            } else {
                document.getElementById(i + "card").style.color = "purple";
                document.getElementById("card3").style.display = "block";
            }
        }
    }
}
