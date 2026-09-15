/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.


function  ajouterUtilisateur(nom, email) {
    utilisateurs.push({id, nom, email})
    id++;
}

function trouverParEmail(email)  {
    for (let el of utilisateurs) {
        if (email == el["email"]) {
            return el
        }
    }
    return {}
}

function supprimerParId(id) {
    
    for (let i=0; i<utilisateurs.length; i++) {
        let el = utilisateurs[i]

        if (id == el.id) {
            utilisateurs.splice(i, 1)
            return
        }
    }
}

function afficherAnnuaire() {
    for (let el of utilisateurs) {
        console.log(`id: ${el.id}, nom: ${el.nom}, email: ${el.email}`)
    }
}

var id = 1;
var utilisateurs = [];
ajouterUtilisateur("fouad", "1@hotmail.com")
ajouterUtilisateur("houda", "2@hotmail.com")
ajouterUtilisateur("ilyass", "3@hotmail.com")
console.log(trouverParEmail("3@hotmail.com"))

supprimerParId(2)
afficherAnnuaire()