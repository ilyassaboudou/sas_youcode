/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day04/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.

let panier = [101, 105, 101, 102]

function ajouterAuPanier(id) {
    panier.push(id);
}

function retirerDuPanier(id) {
    panier = panier.filter(el => el != id)
}

function afficherQuantites() {
    let mp = new Map()

    for (let el of panier) {
        if (mp.has(el))
            mp.set(el, mp.get(el) + 1)
        else 
            mp.set(el, 1)
    }

    return mp
}

retirerDuPanier(101)
let mp =  afficherQuantites()

for (let [key, val] of mp) {
    console.log(`article ${key}: ${val}`)
}