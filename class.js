const tableauEntiers = [5, 2, 8, 1, 3, 7, 4];

tableauEntiers.sort((a, b) => a - b);

//Question 10
// Fonction pour vérifier si une chaîne est un palindrome
function estPalindrome(chaine) {
  const chaineMinuscules = chaine.toLowerCase().replace(/ /g, "");
  const chaineInverse = chaineMinuscules.split("").reverse().join("");
  return chaineMinuscules === chaineInverse;
}
