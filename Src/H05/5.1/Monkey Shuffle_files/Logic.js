    pics = document.getElementById("pics");
    createPicsHolders();
    createAapImages();


    function createPicsHolders () {
        for (var i = 0; i < 9; i++) {

        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + (i+1);

        pics.appendChild(pictureHolder);
        }
    }

    function createAapImages() {
        pictureHolder = document.getElementsByClassName("picture-holder");

        for (var i = 0; i < pictureHolder.length; i++) {

            favoriet = document.createElement("div");
            favoriet.className = "favoriet";
            favoriet.id = "favoriet_" + (i+1);


            aapPlaatje = document.createElement("img");
            aapPlaatje.src = "Monkey%20Shuffle_files/" + (i+1) + ".png";
            aapPlaatje.id = (i+1);

            aapPlaatje.addEventListener("click", function() {
                maakFavoriet(this.id);
            });

            pictureHolder[i].appendChild(favoriet);
            pictureHolder[i].appendChild(aapPlaatje);
        }
    }

    function maakFavoriet(id) {
        notsofavoriet = document.getElementsByClassName("favoriet");

        for (var i = 0; i < notsofavoriet.length; i++) {
            notsofavoriet[i].style.backgroundImage = "none";
        }

        favoriet = document.getElementById("favoriet_" + id);
        favoriet.style.backgroundImage = "url('Monkey%20Shuffle_files/Heart.png')";
    }