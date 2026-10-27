# Expense Tracker App

A small React application for managing expense transactions. The app demonstrates
creating, viewing, editing, and deleting transactions with client-side routing.

## Features

- View transactions in a table with their title, amount, and date.
- Add a transaction or edit an existing one.
- Delete a transaction from the list.
- Navigate between the list and transaction form using React Router.

Transactions are held in React state and are not saved to a database or browser
storage. The sample transactions return when the page is reloaded.

## Requirements

- Node.js (with npm)

## Getting started

From this directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint on the project. |

## Routes

| Route | Page |
| --- | --- |
| `/` | Transaction list |
| `/add-transaction` | Add a transaction |
| `/edit-transaction/:title` | Edit a transaction |

## Project structure

```text
src/
  components/
    AddEditForm.jsx   # Add and edit transaction form
    Header.jsx        # Application heading
    Home.jsx          # Transaction list and actions
  App.jsx             # Routes and shared transaction state
  main.jsx            # React application entry point
```

## Technologies

- React
- Vite
- React Router
- ESLint
