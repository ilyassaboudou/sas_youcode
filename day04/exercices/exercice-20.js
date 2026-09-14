/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * GÉNÉRATEUR DE COMBINAISONS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Étant donné un tableau de 3 couleurs ["Rouge", "Vert", "Bleu"], générez toutes les paires possibles : ["Rouge-Vert", "Rouge-Bleu", "Vert-Rouge", ...].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day04/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


function rec(input, res, i, j) {
    if (input.length < 2) return input;
    if (i == input.length - 1) return res;
    if (j == input.length) return rec(input, res, i+1, i+2)
    
    if (i != j) {
        res.push(`${input[i]} ${input[j]}`);
    }

    return rec(input, res, i, j+1);

}

let a = rec(["Rouge", "Vert", "Bleu"], [], 0, 1)

console.log(a)