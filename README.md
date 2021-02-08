# Projet

## Générateur de site statique

### Concepte

La création d'un projet qui permet de générer des sites statiques.

### Comment ça marche ?

Il suffit de créer dans le dossier `pages` le contenu de la page cible. Par exemple :

```js
const index = () => /*html*/ `
    <div>
        lorem ipsum
    </div>`
}

module.exports = index();
```

Dans l'exemple ci dessus, la cible est `index.js` qui sera in fine `index.html`

Et le contenu sera intégré dans une page html prefabriqué.

### Comment lancer le projet ?

Il faut le fork, puis le clone et enfin

```shell
$ npm install
# OU
$ yarn install
```

Une fois les dépendances installé, on éxécute la commande

```shell
$ npm start
# OU
$ yarn start
```

### Le projet est fini ?

Pas du tout, j'attend de finir le css et l'ajout de script :smile:

### Qui suis-je ?

-   [Anthony Gorski](https://gorskianthony.github.io/me/)
-   Mon [twitter](https://twitter.com/Gorski_anthony)
-   Mon profile [Malt](https://www.malt.fr/profile/anthonygorski)
-   Et bientôt [youtube](https://www.youtube.com/channel/UCWVgHNcrKtH_mTf9aMPA_4g)
