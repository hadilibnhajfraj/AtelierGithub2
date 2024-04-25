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






