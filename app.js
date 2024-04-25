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

  // amina*
  //Question 9
  const tableauEntiers = [5, 2, 8, 1, 3, 7, 4];

  tableauEntiers.sort((a, b) => a - b);

  console.log("Tableau trié en ordre croissant :", tableauEntiers);

  //Question 10
  // Fonction pour vérifier si une chaîne est un palindrome
  function estPalindrome(chaine) {
    const chaineMinuscules = chaine.toLowerCase().replace(/ /g, "");
    const chaineInverse = chaineMinuscules.split("").reverse().join("");
    return chaineMinuscules === chaineInverse;
  }
}
