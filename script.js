const rock = document.querySelector(".play-rock");
const paper = document.querySelector(".play-paper");
const scissors = document.querySelector(".play-scissors");
const loadingFace = document.querySelector(".thinker");
const loadingCircle = document.querySelector(".loading");
const playBtn = document.querySelectorAll(".play-btn");
const reactionImg = document.querySelector(".reaction-img");


rock.addEventListener("click", () => {
    const computerMove = pickComputerMove();

    let result = "";

    if (computerMove === "rock 🗻") {
        result = "Tie.";
    } else if (computerMove === "paper 📃") {
        result = "You lose ... skill issue";
    } else if (computerMove === "scissors ✂") {
        result = "You won ... accidentally";
    }

    loadingCircle.classList.add("active");
    loadingFace.classList.add("active");

    setTimeout(function gameResult() {
        const resultHolder = document.querySelector(".result");
        resultHolder.innerHTML = `You picked rock 🗻. Pepe picked ${computerMove}. ${result}`;
    }, 1000);

    setTimeout(function thinkingMf() {
        loadingCircle.classList.remove("active");
        loadingFace.classList.remove("active");
    }, 1000);

    const imageArray = [
        "img/loughter-1.png",
        "img/loughter-2.png",
        "img/loughter-3.png",
        "img/pepe-holding-loughter.png",
    ];
    const imageArray2 = [
        "img/sad-cat.png",
        "img/sad-jordan.png",
        "img/sad-pepe-2.png",
    ];
    const imageArray3 = ["img/face.png", "img/pepe-thinking.png"];
    const bully = Math.floor(Math.random() * imageArray.length);
    const cry = Math.floor(Math.random() * imageArray2.length);
    const think = Math.floor(Math.random() * imageArray3.length);

    setTimeout(function () {
        if (result === "You won ... accidentally") {
            crymf();
        } else if (result === "You lose ... skill issue") {
            bullymf();
        } else {
            thinkmf();
        }
        function bullymf() {
            reactionImg.src = imageArray[bully];
        }
        function crymf() {
            reactionImg.src = imageArray2[cry];
        }
        function thinkmf() {
            reactionImg.src = imageArray3[think];
        }
    }, 950);
});
paper.addEventListener("click", () => {
    const computerMove = pickComputerMove();

    let result = "";

    if (computerMove === "paper 📃") {
        result = "Tie.";
    } else if (computerMove === "scissors ✂") {
        result = "You lose ... skill issue";
    } else if (computerMove === "rock 🗻") {
        result = "You won ... accidentally";
    }
    loadingCircle.classList.add("active");
    loadingFace.classList.add("active");

    setTimeout(function gameResult() {
        const resultHolder = document.querySelector(".result");
        resultHolder.innerHTML = `You picked paper 📃. Pepe picked ${computerMove}. ${result}`;
    }, 1000);

    setTimeout(function thinkingMf() {
        loadingCircle.classList.remove("active");
        loadingFace.classList.remove("active");
    }, 1000);

    const imageArray = [
        "img/loughter-1.png",
        "img/loughter-2.png",
        "img/loughter-3.png",
        "img/pepe-holding-loughter.png",
    ];
    const imageArray2 = [
        "img/sad-cat.png",
        "img/sad-jordan.png",
        "img/sad-pepe-2.png",
    ];
    const imageArray3 = ["img/face.png", "img/pepe-thinking.png"];
    const bully = Math.floor(Math.random() * imageArray.length);
    const cry = Math.floor(Math.random() * imageArray2.length);
    const think = Math.floor(Math.random() * imageArray3.length);

    setTimeout(function () {
        if (result === "You won ... accidentally") {
            crymf();
        } else if (result === "You lose ... skill issue") {
            bullymf();
        } else {
            thinkmf();
        }
        function bullymf() {
            reactionImg.src = imageArray[bully];
        }
        function crymf() {
            reactionImg.src = imageArray2[cry];
        }
        function thinkmf() {
            reactionImg.src = imageArray3[think];
        }
    }, 950);
});

scissors.addEventListener("click", () => {
    const computerMove = pickComputerMove();

    let result = "";

    if (computerMove === "scissors ✂") {
        result = "Tie.";
    } else if (computerMove === "rock 🗻") {
        result = "You lose ... skill issue";
    } else if (computerMove === "paper 📃") {
        result = "You won ... accidentally";
    }
    loadingCircle.classList.add("active");
    loadingFace.classList.add("active");

    setTimeout(function gameResult() {
        const resultHolder = document.querySelector(".result");
        resultHolder.innerHTML = `You picked scissors ✂. Pepe picked ${computerMove}. ${result}`;
    }, 1000);

    setTimeout(function thinkingMf() {
        loadingCircle.classList.remove("active");
        loadingFace.classList.remove("active");
    }, 1000);

    const imageArray = [
        "img/loughter-1.png",
        "img/loughter-2.png",
        "img/loughter-3.png",
        "img/pepe-holding-loughter.png",
    ];
    const imageArray2 = [
        "img/sad-cat.png",
        "img/sad-jordan.png",
        "img/sad-pepe-2.png",
    ];
    const imageArray3 = ["img/face.png", "img/pepe-thinking.png"];
    const bully = Math.floor(Math.random() * imageArray.length);
    const cry = Math.floor(Math.random() * imageArray2.length);
    const think = Math.floor(Math.random() * imageArray3.length);

    setTimeout(function () {
        if (result === "You won ... accidentally") {
            crymf();
        } else if (result === "You lose ... skill issue") {
            bullymf();
        } else {
            thinkmf();
        }
        function bullymf() {
            reactionImg.src = imageArray[bully];
        }
        function crymf() {
            reactionImg.src = imageArray2[cry];
        }
        function thinkmf() {
            reactionImg.src = imageArray3[think];
        }
    }, 950);
});

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = "";

    if (randomNumber >= 2 / 3) {
        computerMove = "rock 🗻";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper 📃";
    } else if (randomNumber < 1 / 3) {
        computerMove = "scissors ✂";
    }

    return computerMove;
}
