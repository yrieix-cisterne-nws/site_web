# Portfolio – Yrieix Cisterne

Bienvenue sur mon portfolio personnel ! Ce site web présente mon parcours, mes compétences et mes projets.

---

## Sommaire

1. [Présentation](#présentation)
2. [Fonctionnalités et pages](#fonctionnalités-et-pages)
3. [Technologies et outils](#technologies-et-outils)
4. [Installation et configuration](#installation-et-configuration)
   - [Pré-requis](#pré-requis)
   - [Installation du projet](#installation-du-projet)
   - [Lancement en développement](#lancement-en-développement)
   - [Compilation pour la production](#compilation-pour-la-production)
5. [Déploiement](#déploiement)
6. [Auteur](#auteur)
7. [Licence](#licence)

---

## Présentation

Ce portfolio a été conçu pour mettre en avant mon profil, mes expériences et mes réalisations. Il propose une navigation fluide entre différentes sections : Home, Projets et Contact.

---

## Fonctionnalités et pages

- **Accueil** : Introduction, présentation rapide et accès aux principales rubriques.
- **Projets** : Galerie de projets réalisés (sites web, maquettes, logos, etc.) avec carrousel interactif.
- **Contact** : Formulaire de contact sécurisé (EmailJS)
- **Mentions légales** : Informations légales du site.

---

## Technologies et outils

- **React** : Framework principal pour la construction de l’interface.
- **TailwindCSS** : Framework CSS utilitaire pour un design moderne et responsive.
- **React Router DOM** : Navigation entre les pages.
- **EmailJS** : Envoi d’emails via le formulaire de contact.

---

## Installation et configuration

### Pré-requis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) (fourni avec Node.js)
- Un terminal (cmd, PowerShell, ou terminal intégré VS Code)

### Installation du projet

1. **Cloner le dépôt :**
   ```sh
   git clone https://github.com/yrieix-cisterne-nws/site_web.git
   cd site_web
   ```

2. **Installer les dépendances :**
   ```sh
   npm install
   ```

   Cela installera toutes les librairies nécessaires, dont :
   - react
   - react-dom
   - react-router-dom
   - tailwindcss
   - emailjs-com
   - etc.

3. **Configurer EmailJS :**
   - Renseignez vos clés API dans les fichiers concernés (`.env` ou directement dans le code selon votre organisation).

### Lancement en développement

```sh
npm run dev
```
Le site sera accessible sur [http://localhost:5173](http://localhost:5173).

### Compilation pour la production

```sh
npm run build
```
Les fichiers optimisés seront générés dans le dossier `dist/`.

---

## Déploiement


Le site est en ligne : [yrieix-cisterne.fr](https://yrieix-cisterne.fr)

---

## Auteur

**Yrieix Cisterne**  
Étudiant à la Normandie Web School 

- [LinkedIn](https://www.linkedin.com/in/yrieix-cisterne)
- [GitHub](https://github.com/yrieix-cisterne-nws)

---

## Licence

Projet réalisé dans le cadre de ma formation et enrichi régulièrement.  
Toute reproduction ou utilisation doit mentionner l’auteur.
