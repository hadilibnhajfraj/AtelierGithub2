//Question 10
// Fonction pour vérifier si une chaîne est un palindrome
function estPalindrome(chaine) {
    const chaineMinuscules = chaine.toLowerCase().replace(/ /g, "");
    const chaineInverse = chaineMinuscules.split("").reverse().join("");
    return chaineMinuscules === chaineInverse;
  }
  