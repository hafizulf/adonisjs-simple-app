# Learn - AdonisJS

## Description

CRUD application with simple Authentication developed from the results of learning AdonisJS.

Objective :
- Retrieve data
- Saving data (Insert and Update)
- Delete data
- Authentication (Sign up, login and logout, user access)
- Implement UI

## Stack

- **Node.js** - [website](http://nodejs.org/)
- **Adonis Js** - [website](https://legacy.adonisjs.com/)

## Quick Start

Clone project and install dependencies:

```bash
git clone https://github.com/hafizulf/learn-adonisjs
cd learn-adonisjs
npm install
```

Setup `.env` and `migration`

```bash
# copy and configure it
cp .env.example .env

# create new database, based on .env
# migrate
adonis migration:run
```

Run app

```bash
adonis serve --dev
```
