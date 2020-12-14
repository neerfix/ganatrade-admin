![GitHub package.json version](https://img.shields.io/github/package-json/v/ganatrade/admin)
![GitHub repo size](https://img.shields.io/github/repo-size/ganatrade/admin)

# Ganatrade - Administration / Back Office

## Link
- Dev - https://beta.acp.ganatrade.xyz
- Prod - https://acp.ganatrade.xyz

## Présentation

Le back office de Ganatrade à été réalisé en ReactJs. 
Nous avons choisi React pour le Back Office puisque c'est un framework assez fluide et facile à prendre en main. 
C'est également l'un des meilleurs derrière VuesJs, donc il comporte une grande communauté pour répondre aux questions.
Ayant plus de connaissance et de pratique en ReactJs qu'en VueJs, le choix s'est donc porté sur ReactJs.

## Architecture du site

    📦src
     ┣ 📂assets
     ┃ ┣ 📂img
     ┃ ┗ 📂scss
     ┃ ┃ ┣ 📂components
     ┃ ┃ ┃ ┗--> Différent block
     ┃ ┃ ┣ 📂layouts
     ┃ ┃ ┃ ┃ ┗--> Styles de différentes pages
     ┃ ┃ ┣ 📂settings
     ┃ ┃ ┃   ┗--> Contient les variables en Scss comme ici les couleurs.
     ┃ ┃ ┗ 📜App.scss
     ┃ ┃ 
     ┣ 📂components
     ┃ ┣ 📂containers
     ┃ ┃ ┗--> Les fonctions MapStateToProps et mapDispatchToProps sont dans ces différents fichier.
     ┃ ┃
     ┃ ┗ 📂views
     ┃ ┃ ┃ ┗--> Les différents composants retourner
     ┃ ┃ ┣ 📂FormData
     ┃ ┃ ┃ ┃ ┗--> Contient les composants utiles pour l'édition de donnée ou la création de cellc-ci. (Users, Tasks, Categories, Lists)
     ┃ ┃ ┃ ┣ 📜Categories.js
     ┃ ┃ ┃ ┃ ┗--> Fetch pour Create / Updates une catégories ainsi que le formulaire.
     ┃ ┃ ┃ ┣ 📜FieldText.js
     ┃ ┃ ┃ ┃ ┗--> Champs pour les formulaires
     ┃ ┃ ┃ ┣ 📜FooterForm.js
     ┃ ┃ ┃ ┃ ┗--> Contient le bouton submit du formulaire ainsi que le Toast.
     ┃ ┃ ┃ ┣ 📜FormData.js
     ┃ ┃ ┃ ┃ ┗--> Composant parent appelé par la route qui, affiche le composant enfant (Users, Categories, Tasks ou Lists) en fonction de la route. 
     ┃ ┃ ┃ ┣ 📜GenderRadioButton.js
     ┃ ┃ ┃ ┃ ┗--> Bouton pour "Homme" et "Femme" 
     ┃ ┃ ┃ ┣ 📜Lists.js
     ┃ ┃ ┃ ┃ ┗--> Fetch pour Create / Updates une liste ainsi que le formulaire.
     ┃ ┃ ┃ ┣ 📜NationalitySelect.js
     ┃ ┃ ┃ ┃ ┗--> Select qui boucle sur toutes les nationalités (voir tools/Nationalities.js)
     ┃ ┃ ┃ ┣ 📜Switch.js
     ┃ ┃ ┃ ┃ ┗--> Bouton de switch
     ┃ ┃ ┃ ┣ 📜Tasks.js
     ┃ ┃ ┃ ┃ ┗--> Fetch pour Create / Updates une tâche ainsi que le formulaire.
     ┃ ┃ ┃ ┗ 📜Users.js
     ┃ ┃ ┃   ┗--> Fetch pour Create / Updates un utilisateur ainsi que le formulaire.
     ┃ ┃ ┃ 
     ┃ ┃ ┣ 📂Header
     ┃ ┃ ┃ ┃ ┗--> Contient les composants du header.
     ┃ ┃ ┃ ┣ 📜Dropdown.js
     ┃ ┃ ┃ ┃ ┗--> Menu déroulant 
     ┃ ┃ ┃ ┗ 📜Header.js
     ┃ ┃ ┃   ┗--> Navbar de l'office
     ┃ ┃ ┃ 
     ┃ ┃ ┣ 📂Index
     ┃ ┃ ┃ ┃ ┗--> Contient les composants de l'index.
     ┃ ┃ ┃ ┣ 📜ComparisonTasksWeek.js
     ┃ ┃ ┃ ┃ ┗--> Affiche la liste des jours de la semaine avec les stats propres à ce jour.
     ┃ ┃ ┃ ┣ 📜GenderStatistics.js
     ┃ ┃ ┃ ┃ ┗--> Affich le pourcentage d'homme et de femme inscrit sur le site.
     ┃ ┃ ┃ ┣ 📜Index.js
     ┃ ┃ ┃ ┃ ┗--> Page d'accueil et parents des autres composant. C'est ce composant qui est appelé par la route.
     ┃ ┃ ┃ ┣ 📜SmallGraph.js
     ┃ ┃ ┃ ┃ ┗--> Les petits graphiques, new users, users active, new lists et new task
     ┃ ┃ ┃ ┗ 📜WeekStatistics.js
     ┃ ┃ ┃   ┗--> Composant enfant de Index, mais également parent des autres composants.
     ┃ ┃ ┃ 
     ┃ ┃ ┣ 📂Lists
     ┃ ┃ ┃ ┃ ┗--> Contient les composants pour l'affichage des différentes listes de données (Users, Categories, Tasks, Lists).
     ┃ ┃ ┃ ┣ 📜ButtonGroupAction.js
     ┃ ┃ ┃ ┃ ┗--> Bouton d'action Edit / Delete data, contient les fonctions
     ┃ ┃ ┃ ┣ 📜Categories.js
     ┃ ┃ ┃ ┃ ┗--> Affiche le tableau des catégories.
     ┃ ┃ ┃ ┣ 📜ListData.js
     ┃ ┃ ┃ ┃ ┗--> Composant parents. C'est ce composant qui est appelé par la route.
     ┃ ┃ ┃ ┣ 📜Lists.js
     ┃ ┃ ┃ ┃ ┗--> Affiche le tableau des listes.
     ┃ ┃ ┃ ┣ 📜Tasks.js
     ┃ ┃ ┃ ┃ ┗--> Affiche le tableau des tâches.
     ┃ ┃ ┃ ┗ 📜Users.js
     ┃ ┃ ┃   ┗--> Affiche le tableau des utilisateurs.
     ┃ ┃ ┃ 
     ┃ ┃ ┣ 📂Menu
     ┃ ┃ ┃ ┃ ┗--> Contient les composants pour le menu latérale.
     ┃ ┃ ┃ ┣ 📜ListGroupItem.js
     ┃ ┃ ┃ ┃ ┗--> Model de composant pour les listes de données.
     ┃ ┃ ┃ ┗ 📜Menu.js
     ┃ ┃ ┃   ┗--> Composant parent
     ┃ ┃ ┃ 
     ┃ ┃ ┣ 📂modules
     ┃ ┃ ┃ ┃ ┗--> Contient des composants utiles dans multiples autres composants.
     ┃ ┃ ┃ ┣ 📜Loading.js
     ┃ ┃ ┃ ┃ ┗--> Block qui affiche 3 spinners pour le chargement des données.
     ┃ ┃ ┃ ┗ 📜Toasts.js
     ┃ ┃ ┃   ┗--> Toasts qui affiche des notifications lors da réalisation de tâche.
     ┃ ┃ ┃ 
     ┃ ┃ ┣ 📜Login.js
     ┃ ┃ ┃ ┃ ┗--> Form qui permet de se loguer
     ┃ ┃ ┗ 📜ProfileSettings.js
     ┃ ┃     ┗--> Form et page qui affiche les données de l'administrateur connecté.
     ┃ ┃ 
     ┣ 📂functions
     ┃ ┃ ┗--> Contient des fonctions appelés dans les composants.
     ┃ ┗ 📜getToken.js
     ┃ 
     ┣ 📂middlewares
     ┃ ┃ ┗--> Contient des middlewares
     ┃ ┗ 📜CheckAuth.js
     ┃ 
     ┣ 📂redux
     ┃ ┃ ┗--> Contient les fichiers utiles pour Redux
     ┃ ┣ 📂actions
     ┃ ┃ ┃ ┗--> Contient les actions de Redux
     ┃ ┃ ┣ 📜Disconnect.action.js
     ┃ ┃ ┣ 📜OnLogin.action.js
     ┃ ┃ ┗ 📜PushRoute.action.js
     ┃ ┃ 
     ┃ ┣ 📂reducers
     ┃ ┃ ┃ ┗--> Contient les reducers de Redux
     ┃ ┃ ┣ 📜FetchLogin.reducer.js
     ┃ ┃ ┣ 📜Push.reducer.js
     ┃ ┃ ┣ 📜StatusLogin.reducer.js
     ┃ ┃ ┣ 📜UpdateProfile.reducer.js
     ┃ ┃ ┣ 📜UserSession.reducer.js
     ┃ ┃ ┗ 📜rootReducer.js
     ┃ ┃
     ┃ ┗ 📂store
     ┃ ┃ ┃ ┗--> Contient le defaultStore de Redux 
     ┃ ┃ ┗ 📜defaultStore.js
     ┃ ┃ 
     ┣ 📂tests
     ┃ ┃ ┗--> Contient les tests unitaires
     ┃ ┗ 📜App.test.js
     ┃ 
     ┣ 📂tools
     ┃ ┃ ┗--> Contient des outils utiles dans les composants (Constantes, listes des nationnalités, route pour l'api...).
     ┃ ┣ 📜Constants.js
     ┃ ┣ 📜Nationalities.js
     ┃ ┗ 📜routeAPI.js
     ┃ 
     ┣ 📜App.js
     ┣ 📜firebaseConfig.js
     ┣ 📜index.js
     ┣ 📜privateKey.json
     ┗ 📜serviceWorker.js 