import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CalculatesView } from './calculate.view.jsx';
import { DocumentsView } from './document.view.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <CalculatesView />
        <DocumentsView />
      </div>
    </div>
  );
}

export default App;
