# 13 Colonies Tracker

Electron application for tracking stations worked in the 13 colonies special event on amateur radio.

## Authors:

| Name              | Contact                      |
| ----------------- | ---------------------------- |
| CJ                | cjtheham@protonmail.com      |
| PotatoesMakeChips | info@potatoesmakechips.co.uk |

# Install Instructions (Dev Enviroment)

Yarn is the official package manager for this project. Although npm can also be used it is not suported and pull request that effect compatibility with yarn will be denyed.

## Yarn

*install instructions go here*

## Npm

To install the develoupment enviroment with npm run:
```shell
npm install
```

npm ci cannot be used as it requires a package-lock file not created by yarn. This limitation is the reasoning for npm not being supported for pull requests.

To start the app run:
```shell
npm run start
```

This will open the eletron app for testing so that changes can be previewed without building the application.

# Build Instructions (Prod Envirometn)
Yeah we haven't done that ourselfs yet but I'll put it here when we do.

# Contribution Guidelines
## Inside of Organisation
1. Create a new branch from the part of the project you wish to work on. It should be named with the folowing the convention: `<project-part>-<your-github-username>`

2. When you have made your controbutions open a pull request to the projects parts branch. ***Do Not Create Pull Requests To Main***.

## Outside of Organisation
1. Fork the reposotory to your personal github
2. Create a new branch from the part of the project you wish to work on. It should be named with the folowing the convention: `<project-part>-<your-github-username>`

3. When you have made your controbutions open a pull request to the projects parts branch from the branch you made following the naming convention. ***Don't push changes to main or the project part branch within your fork*** and try to make a pull request from there. As with inside organisation controbutions ***Do Not Create Pull Requests To Main***.
