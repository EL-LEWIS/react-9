import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container d-flex justify-content-between align-items-center">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          <div>Aluno: Fulano de Tal</div>
        </div>
      </Navbar>

      {/* Adicionando o Menu ao corpo da aplicação */}
      <div className="container mt-4">
        <Menu />
      </div>
    </div>
  );
}

export default App;

