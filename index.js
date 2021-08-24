if (window.innerWidth < 500){
    document.getElementById("demo").style.display = "none";
    document.getElementById("message").style.display = "block";
}

const handOptions = {
    "rock": "assets/rock.png",
    "paper": "assets/paper.png",
    "scissor": "assets/scissor.png",
    "lizard": "assets/lizard.png",
    "spock": "assets/spock.png"
};

let SCORE = 0;

const pickUserhand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set user Image
    document.getElementById("userPickImage").src = handOptions[hand];

    let cphand = pickComputerHand(hand);
    result(hand, cphand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissor", "lizard", "spock"];
    let cphand = hands[Math.floor(Math.random() * 5)];

    // set computer Image
    document.getElementById("computerPickImage").src = handOptions[cphand];

    return cphand;
};

const result = (userhand, cphand) => {
    if (userhand == cphand) {
        setDecision("It is a Tie!");
    }
    else if (userhand == "rock") {
        if (cphand == "scissor" || cphand == "lizard") {setDecision("You Won!!"); setScore(SCORE + 1);}
    }
    else if (userhand == "paper"){
        if (cphand == "rock" || cphand == "spock") {setDecision("You Won!!"); setScore(SCORE + 1);}
    }
    else if (userhand == "scissor"){
        if (cphand == "paper" || cphand == "lizard") {setDecision("You Won!!"); setScore(SCORE + 1);}
    }
    else if (userhand == "lizard"){
        if (cphand == "paper" || cphand == "spock") {setDecision("You Won!!"); setScore(SCORE + 1);}
    }
    else if (userhand == "spock"){
        if (cphand == "scissor" || cphand == "rock") {setDecision("You Won!!"); setScore(SCORE + 1);}
    }
    else { setDecision("You Lose");}
};

const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerHTML = decision;
}
  
const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}

