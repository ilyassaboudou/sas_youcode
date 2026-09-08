/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * JEU : PIERRE, PAPIER, CISEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez deux variables joueur1 = "Pierre" et joueur2 = "Ciseaux". En utilisant des conditions, déterminez qui a gagné. (Gérez tous les cas possibles ou utilisez une logique optimisée).
 *
 * RÉSULTAT ATTENDU
 * Joueur 1 gagne !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day01/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let joueur1 = "pierre";
let joueur2 = "PAPIER";
let res = "";


// PIERRE, PAPIER, CISEAUX

let a = (joueur1 + " " + joueur2).toUpperCase();

    if (a == "PIERRE CISEAUX"  ||  a == "PAPIER PIERRE" || a == "CISEAUX PAPIER") {
        res = "Joueur 2 gagne !";
    }
    
    else if ( a == "CISEAUX PIERRE" || a == "PIERRE PAPIER" || a == "PAPIER CISEAUX") {
        res = "Joueur 1 gagne !";
    }
    else {
        res = "égale";
    }

console.log(res);