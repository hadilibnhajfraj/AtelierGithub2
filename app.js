// Fonction pour calculer la puissance d'un nombre
function puissance(nombre, exposant) {
  let resultat = 1;
  for (let i = 0; i < exposant; i++) {
    resultat *= nombre;
  }
  return resultat;
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
