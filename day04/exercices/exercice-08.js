/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, 
 * SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day04/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function findMaxMin(tableau) {
    let max;
    let min;

    for (let i = 0; i < tableau.length; i++) {
    
        if (!max || !min) {
            max = tableau[i];
            min = tableau[i];
        }
    
        if (tableau[i] > max) {
            max = tableau[i];
        }
    
        if (tableau[i] < min) {
            min = tableau[i];
        }
    }

    return { max, min };
}

console.log(findMaxMin([1, 2, 3, 4, 5, 6]));