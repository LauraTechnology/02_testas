console.log('-----1-----');
//1. Duotas masyvas, console.log atspausdinti masyvo ilgį

const mas1 = [12, 5, 9, 7, 5, 4];

console.log(mas1);

console.log(mas1.length);


console.log('-----2-----');
//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;

const mas2 = [13, '785', 92, 'labas', 522, 6984];

for (let i = 0; i < mas2.length; i++) {
    console.log(mas2[i], i);
}

// PADARYTI TOKIU 10.

 // console.log(mas2);

//
//console.log(mas2[0]);
//console.log(mas2[1]);
//console.log(mas2[2]);
//console.log(mas2[3]);
//console.log(mas2[4]);
//console.log(mas2[5]);


 console.log('-----3-----');
//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)

const mas3 = [889, 52, 698, 752, 9333, 7];

for (let i = 0; i < mas3.length; i++) {
    if (mas3[i] % 2 === 0) { 
        console.log(mas3[i], i);
    }
   
}

// i - indeksas
// [i] - reikšmė
// mas3[i] - norint gauti masyvo reikšmę
// jeigu skaicius neturi liekanos (dalinasi is 2), vadinasi jis EVEN




console.log('-----4-----');
//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a;

const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];



mas4.forEach(element => {
    if (element.charAt(0) === 'a') {
        console.log(element);
    } if (element.charAt(0) === 'A') {
        console.log(element);
} 

/* su element pasiekiamas kiekvienas masyvo narys*/


// i  if value starts with 'A, a'
// mas4[i]
// forEach kiekvieno ciklo metu grazinamas kiekvienas masyvo narys

 

console.log('-----5-----');
//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z;

const str1 = 'Storas zebras, bėga nuo zuulu genties medžiotojų.';
 



console.log('-----6-----');
//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį
const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio']);
 

console.log('-----7-----');
//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(), kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
const str2 = 'Ku ku';
// console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti
 

console.log('-----8-----');
//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };
 

console.log('-----9-----');
//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"







