/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


let x = "chie"
let y = "niche"

if (y.length != x.length) {
    console.log("not an anagram")
    return
}

for(let i=0; i< y.length; i++) {
    if (x.includes(y[i])) {
        x = x.replace(x[x.indexOf(y[i])], "")
    }
}

console.log(x.length == 0 ? "anagram" : "not an anagram")