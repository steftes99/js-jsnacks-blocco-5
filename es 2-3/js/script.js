var zucchine = [
    {
        varietà: "nera",
        lunghezza: 13,
        peso: 150
    },
    {
        varietà: "tonda",
        lunghezza: 8,
        peso: 180
    },
    {
        varietà: "lunga",
        lunghezza: 18,
        peso: 190
    },
    {
        varietà: "tonda",
        lunghezza: 10,
        peso: 130
    },
    {
        varietà: "nera",
        lunghezza: 12,
        peso: 130
    },
    {
        varietà: "lunga",
        lunghezza: 21,
        peso: 200
    },
    {
        varietà: "nera",
        lunghezza: 14,
        peso: 130
    },
    {
        varietà: "tonda",
        lunghezza: 11,
        peso: 120
    },
    {
        varietà: "nera",
        lunghezza: 13,
        peso: 140
    },
    {
        varietà: "lunga",
        lunghezza: 19,
        peso: 180
    },
];

var pesoTotale = 0;


for(i = 0; i < zucchine.length; i++){
    pesoTotale += zucchine[i].peso;
}
console.log(pesoTotale + ' ' +'g');

var pesoInKg = pesoTotale / 1000;

console.log(pesoInKg + ' ' + 'kg');