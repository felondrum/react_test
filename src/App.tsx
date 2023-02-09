import { returnTasks } from "./utils.tsx";
import "./styles.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardPage from "./modules/CardPage.tsx";
import HomePage from "./modules/HomePage.tsx";
import Navbar from "./components/Navbar.tsx"

export default function App() {
    return (
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/cards' element={<CardPage/>} />
          </Routes>
        </Router>
      );
}

export const usersCount = 52674;

export const products = [
  {
    name: "Продукт 1",
    dateOfAdding: "20.09.2022",
    usersCount: 20865
  },
  {
    name: "Продукт 2",
    dateOfAdding: "22.10.2022",
    usersCount: 50477
  },
  {
    name: "Продукт 3",
    dateOfAdding: "29.09.2022",
    usersCount: 46348
  },
  {
    name: "Продукт 4",
    dateOfAdding: "30.08.2022",
    usersCount: 24903
  }
];