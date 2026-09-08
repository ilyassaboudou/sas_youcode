# 🔎 Jour 01 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> Quelle est la différence fondamentale entre `let`, `const` et `var` en JavaScript ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

    - let : modifiable, accessible dans le scoop;
    - const : n'est pas modifiable;
    - var : modifiable et asccessible dans la fonction;

### Question 02

> Quels sont les 7 types primitifs de données en JavaScript ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

    - boolean
    - string
    - number
    - bigInt
    - null
    - undefind
    - symbol
--- 

### Question 03

> Que signifie `typeof null` en JavaScript, et pourquoi est-ce considéré comme une erreur historique ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

    - null represente l'absence d'un objet/valeur
    - vieux bug de conception, il est garder pour ne pas casser le code existant

### Question 04

> Quelle est la différence entre l'opérateur d'égalité souple `==` et l'opérateur d'égalité stricte `===` ? Lequel faut-il privilégier ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

    - "==" comparer la valeur
    - "===" comparer la valeur et le type
    - 

### Question 05

> Que se passe-t-il si j'essaie de changer la valeur d'une variable déclarée avec `const` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

    - error, car const n'est pas modifiable

### Question 06

> Comment JavaScript gère-t-il l'addition entre un nombre et une chaîne de caractères (ex: `5 + "5"`) ? Comment appelle-t-on ce phénomène ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

    - 5 + "5" va donner "55", cast 5 au String, puis faire la concatination,
    - le phénomène s'appelle coercion

### Question 07

> À quoi sert l'opérateur modulo `%` et donnez un cas d'usage classique.

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

    - le reste de devision

    const n = 10;
    if ( n%2 == 0 ) { // pair } else { // impair } 

### Question 08

> Quelle est la différence entre `&&` (ET logique) et `||` (OU logique) dans une condition ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

    - && tous les condition faut être varai ;
    - ||  au moins une seule condition est vrai

### Question 09

> Est-il possible d'utiliser une condition `switch` à la place d'une série de `if / else if` ? Dans quel cas est-ce préférable ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

    - oui peut être prèfèrable dans le cas d'une condition simple, si non if else

### Question 10

> Qu'est-ce qu'une valeur "falsy" en JavaScript ? Citez 3 exemples.

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.
    - les valeurs qui sont considèré comme false dans la condition, example ("", false, 0, null ...)

## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
