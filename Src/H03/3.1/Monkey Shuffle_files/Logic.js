    var plaatjes = document.getElementsByTagName("img");
    var random = 0;

    var randomNumbers = [];

    while (randomNumbers.length < 9) {
        random = Math.floor(Math.random() * 9 + 1);

        if (randomNumbers.lastIndexOf(random) == -1) {
            randomNumbers.push(random);
        }
    }

    random = 0;

    for (var plaatje in plaatjes) {
        plaatjes[plaatje].src = "Monkey%20Shuffle_files/" + randomNumbers[random] + ".png";
        random++;
    }