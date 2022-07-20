

console.log ('js ok');

const km = parseInt( prompt('Quanti km vuoi percorrere?', '10') )
console.log(km);

const age = parseInt ( prompt("quanti hanni hai?" , '29') )
console.log(age);

let ticket = (km * 0.21);
console.log(ticket);

if(age > 65) {
    ticket = (ticket - (ticket * 0.40))
} else if (age < 18 ) {
    ticket = (ticket - (ticket * 0.20));
}

const finalTicket = document .getElementById('finalTicket')

document.getElementById('finalTicket').innerText = 'Il tuo biglietto costa'+' '+ ticket +' '+ '€'