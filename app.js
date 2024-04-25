// Fonction pour calculer la puissance d'un nombre
function puissance(nombre, exposant) {
  let resultat = 1;
  for (let i = 0; i < exposant; i++) {
    resultat *= nombre;
  }
  return resultat;
}

// amina*
//Question 9
const tableauEntiers = [5, 2, 8, 1, 3, 7, 4];

tableauEntiers.sort((a, b) => a - b);

//console.log("Tableau trié en ordre croissant :", tableauEntiers);

//Question 10
// Fonction pour vérifier si une chaîne est un palindrome
function estPalindrome(chaine) {
  const chaineMinuscules = chaine.toLowerCase().replace(/ /g, "");
  const chaineInverse = chaineMinuscules.split("").reverse().join("");
  return chaineMinuscules === chaineInverse;
}

// Fonction pour calculer le PGCD de deux nombres
function pgcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return pgcd(b, a % b);
  }
}

// Question 1 Raouf
function calculerSomme(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme;
}

// Question 1 Raouf
function calculerMoyenne(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme / tableau.length;
}

//wajdi
// ques 3
function calculerFactorielle(nombre) {
  if (nombre < 0) {
    return "La factorielle n'est pas définie pour les nombres négatifs.";
  }

  let resultat = 1;

  for (let i = 1; i <= nombre; i++) {
    resultat *= i;
  }

  return resultat;
}

//ques 4
// Fonction pour vérifier si un nombre est pair
function estPair(nombre) {
  return nombre % 2 === 0;
}

//wijden
//Question 5
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const num = 7;
if (isPrime(num)) {
  console.log(`${num} is a prime number.`);
} else {
  console.log(`${num} is not a prime number.`);
}

//Question 6
function reverseString(str) {
  return str.split("").reverse().join("");
}

const inputStr = "hello";
const reversedStr = reverseString(inputStr);
console.log(`Original String: ${inputStr}`);
console.log(`Reversed String: ${reversedStr}`);
