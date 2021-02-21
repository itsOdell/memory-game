let clickedYet = false;
let first, second, firstCard, secondCard;
let firstParent, secondParent;
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let shuffleInfo = [
    {
        "element": "p",
        "text": "vue",
        "data": "vue"
    },
    {
        "element": "p",
        "text": "vue",
        "data": "vue"
    },
    {
        "element": "p",
        "text": "react",
        "data": "react"
    }, 
    {
        "element": "p",
        "text": "react",
        "data": "react"
    }, 
    {
        "element": "p",
        "text": "angular",
        "data": "angular"
    }, 
    {
        "element": "p",
        "text": "angular",
        "data": "angular"
    }
]
function main() {
    shuffle();
    for (let i = 0; i < document.querySelectorAll("p").length; i++) {
        let card = document.querySelectorAll(".img-cont")[i];
        card.addEventListener("click", click);
    }
}

function click() {
        this.children[0].style.display = "block";
        if (clickedYet == false) {
            first = this.children[0].dataset.framework;
            firstCard = this.children[0];
            firstParent = this;
            firstParent.removeEventListener("click", click);
            clickedYet = true;
        } else {
            second = this.children[0].dataset.framework;
            secondCard = this.children[0];
            secondParent = this;
            clickedYet = false;
            matchCheck();
        }
}

function matchCheck() {
    if (first == second) {
        firstParent.removeEventListener("click", click);
        secondParent.removeEventListener("click", click);
        firstParent.style.cursor = "default";
        secondParent.style.cursor = "default";
        h1.innerHTML = "Correct!";
    } else {
        h1.innerHTML = "Wrong!"
        setTimeout(function() {
            firstCard.style.display = "none";
            secondCard.style.display = "none";
            firstParent.addEventListener("click", click);
        }, 400);
    }
}

function shuffle() {
    shuffleInfo = _.shuffle(shuffleInfo);
    for (let i = 0; i < document.querySelectorAll(".img-cont").length; i++) {
        let card2 = document.querySelectorAll(".img-cont")[i];
        let elem = document.createElement(shuffleInfo[i].element);
        elem.innerHTML = shuffleInfo[i].text;
        elem.setAttribute("data-framework", shuffleInfo[i].data);
        card2.append(elem);
    }
}
btn.onclick = () => location.reload();
main();