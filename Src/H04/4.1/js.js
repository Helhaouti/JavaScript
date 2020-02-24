var mijnauto = {
    merk: "Ford",
    type: "Mondeo",
    aantalWielen: 4,
    kleur: "blauw",

    snelheid: 0,
    gasgeven: function() {
        this.snelheid += 5;
        console.log(this.snelheid);
    },
    toeteren: function () {
        console.log("toet!");
    }

}


console.log("De kleur van de auto is " + mijnauto.kleur);

mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();