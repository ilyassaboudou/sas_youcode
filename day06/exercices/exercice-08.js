/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


function withmaxScore(cond) {

    if (cond.length == 0) return undefined

    let max = cond[0]
    
    cond.forEach(e => {
        max = e.score > max.score ? e : max
    })

    return max
}

    let condidat = [
        {nom: "a", score: 10},
        {nom: "b", score: 45},
        {nom: "c", score: 1},
        {nom: "d", score: 6},
        {nom: "e", score: 19},
    ]

console.log(withmaxScore(condidat))