var playerOneScore = 0, playerTwoScore = 0, playerNames = [];
var player = 0;

function validateForm(id) {    
    var x = document.forms["formPlayerOne"]["fPO"].value;
    var y = document.forms["formPlayerTwo"]["fPT"].value;

    console.log(x, y, id);
    if (id == 1) {
        playerNames.push(x);
        document.forms["formPlayerOne"]["fPOB"].style.display = "none";
    } else if (id == 2) {
        playerNames.push(y);
        document.forms["formPlayerTwo"]["fPTB"].style.display = "none";
    } 
    
    if (playerNames.length == 2) {
        pictureHolderGenerator();
        statKeeper();
        clickTracker();
    } 

    console.log(playerNames.length);
    return false;
}

var randomizedNumbers = [];

var clickCounter = 1;

var firstClickedPictureHolderInfo, secondClickedPictureHolderInfo;

var firstClickedPicId, secondClickedPicId;

randomizedNumbersGenerator();

function randomizedNumbersGenerator() {
    var randomNumbers = [];
    var randomNumbers2 = [];

    while (randomNumbers.length < 9) {
        random = Math.floor(Math.random() * 9 + 1);

        if (randomNumbers.lastIndexOf(random) == -1) {
            randomNumbers.push(random);
        }
    }
    while (randomNumbers2.length < 9) {
        random = Math.floor(Math.random() * 9 + 1);

        if (randomNumbers2.lastIndexOf(random) == -1) {
            randomNumbers2.push(random);
        }
    }

    if  (randomNumbers.length === 9 && randomNumbers2.length === 9) {
        randomizedNumbers = randomNumbers.concat(randomNumbers2);
    }
}

var previousClick = "";
function pictureHolderGenerator() {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("form").style.display = "none";
    document.getElementById("pics").style.display = "block";
    document.getElementById("volgendeButton").style.display = "block";
        
    for (var i = 0; i < 18; i++) {
        pics = document.getElementById("pics");

        pictureHolder = document.createElement("div");

        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + (i);

        pictureHolder.addEventListener("click", function () {
            var currentClick = this.id;

            if (currentClick !== previousClick && playerOneScore + playerTwoScore < 9) {
                clickTracker(this.id);
                clickCounter++;

                previousClick = currentClick;
            }
        });

        pics.appendChild(pictureHolder);
    }
}

function numberExtractor(id) {
    var matches = id.match(/(\d+)/);
    var result = matches[0];

    if (matches) {
        return result;
    }
}
function statKeeper() {
    statPlayerOne = document.getElementById("statPlayerOne");
    statPlayerTwo = document.getElementById("statPlayerTwo");

    statPlayerOne.innerHTML = playerNames[0] + ": " + playerOneScore;
    statPlayerTwo.innerHTML = playerNames[1] + ": " + playerTwoScore; 

    if (player == 0) {
        document.getElementById("statusKeeper").innerHTML = "Aan de beurt: " + playerNames[1];
        player = 1;
    } else if (player == 1) {
        document.getElementById("statusKeeper").innerHTML = "Aan de beurt: " + playerNames[0];
        player = 0;
    }
}

function clickTracker(id) {
    if (clickCounter < 3) {
        picHolder = document.getElementById(id);

        pic = document.createElement("img");
        pic.src = "pics/" + randomizedNumbers[numberExtractor(id)] + ".png";
        pic.id = "pic" + randomizedNumbers[numberExtractor(id)];

        picHolder.appendChild(pic);
    }

    if (clickCounter == 1) {
        firstClickedPictureHolderInfo = id;
        firstClickedPicId = pic.id;
    } else if (clickCounter == 2) {
        secondClickedPictureHolderInfo = id;
        secondClickedPicId = pic.id;
    }
}

function nextTurn () {
    if (clickCounter >= 2 && firstClickedPicId === secondClickedPicId) {

        firstClickedPictureHolderInfo = "", secondClickedPictureHolderInfo = "";
        clickCounter = 1;

        if (player == 0) {
            playerOneScore++;
        } else if (player == 1) {
            playerTwoScore++;
        }
        statKeeper();
    } else if (clickCounter >= 2 && firstClickedPicId !== secondClickedPicId) {
        var firstClicked = document.getElementById(firstClickedPictureHolderInfo);
        var secondClicked = document.getElementById(secondClickedPictureHolderInfo);

        firstClicked.removeChild(firstClicked.childNodes[0]);
        secondClicked.removeChild(secondClicked.childNodes[0]);

        firstClickedPictureHolderInfo = "", secondClickedPictureHolderInfo = "";
        clickCounter = 1;
        statKeeper();
    }

    if (playerOneScore + playerTwoScore === 9) {
        if (playerOneScore > playerTwoScore){
            alert("je hebt gewonnen " + playerNames[0]);
        } else if (playerOneScore < playerTwoScore) {
            alert("je hebt gewonnen " + playerNames[1]);
        }

        document.getElementById("volgendeButton").style.display = "none";
        document.getElementById("resetButton").style.display = "block";
    }
}

function reset () {
   window.location.reload();
}