/**
 * JOUR 03 — GUIDE 02
 * Comprendre la Portée (Scope)
 *
 * OBJECTIF
 * Essayez de déclarer une variable à l'intérieur d'une fonction, et essayez de l'afficher console.log() à l'extérieur de la fonction. Que se passe-t-il ?
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.

function maFonction() {

    let v = 'salut'

    return v;
}

console.log(v);

// on peux pas acceder a un variable declarer à l'interieur de la fonction, ça provoque une error,