// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var biciclette = [
    {
        nome: "mountain bike",
        peso: 2
    },
    {
        nome: "sportiva",
        peso: 1.7
    },
    {
        nome: "fat bike",
        peso: 5
    },
    {
        nome: "graziella",
        peso: 3
    }

];
    var pesoMinimo = biciclette[0];

for (i = 0; i < biciclette.length; i++){
    if(biciclette[i].peso < pesoMinimo.peso){
       pesoMinimo = biciclette[i];
    }
} console.log(pesoMinimo);