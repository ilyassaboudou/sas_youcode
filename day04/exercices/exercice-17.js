/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots 
 * ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day04/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


const mp = new Map()

function fn(t) {
    for (let el of t ) {
        if (mp.has(el))
            mp.set(el, mp.get(el) + 1)
        else 
            mp.set(el, 1)
    }
    
    for (let [k, v] of mp) {
        console.log(k + ":"  + v);
    }
    
}

let t = ["pomme", "banane", "pomme", "orange", "banane", "pomme"];

fn(t)