/*Descripció
L'objectiu d'aquest exercici és crear un joc de consola en Node.js on l'usuari pugui jugar a Pedra-Paper-Tisora contra l'ordinador. El joc seguirà les regles clàssiques:

    · Pedra guanya a Tisora.
    · Tisora guanya a Paper.
    · Paper guanya a Pedra.
*/
const prompt = require('prompt-sync')();

function escollir(){
    const eleccio = ['pedra', 'paper', 'tisora'];
    const numRandom = Math.floor(Math.random()*eleccio.length);
    return eleccio[numRandom];
}

function guanyador(usuari, ordinador){
    if (usuari === ordinador){
        return `Empat!`;
    }
    if ((usuari === 'pedra' && ordinador === 'tisora') ||
        (usuari === 'paper' && ordinador === 'pedra') ||
        (usuari === 'tisora' && ordinador === 'paper')){
            return `Has guanyat!`;
        }else{
            return `Has perdut LMAO`;
        }
}

function joc(){
    const eleccioUsuari = prompt('Tria pedra, paper o tisora: ').toLowerCase();
    const eleccions = ['pedra', 'paper', 'tisora'];
    if (!eleccions.includes(eleccioUsuari)){
        console.log(`Elecció inválida. Escull una altra opció`);
        return;
    }

    const eleccioOrdinador = escollir();
    console.log(`L'ordinador ha escollit: ${eleccioOrdinador}`);
    const resultat = guanyador(eleccioUsuari, eleccioOrdinador);
    console.log(resultat);
}

joc();