var nome = prompt("Qual'è il tuo nome");
console.log(nome);

var cognome = prompt("Qual'è il tuo cognome");
console.log(cognome);

var colore = prompt("Qual'è il tuo colore preferito");
console.log(colore);

var password = nome + cognome + colore + '19';
console.log(password);

document.getElementById('user-pwd').innerHTML = password;
