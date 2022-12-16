import type { Component } from 'solid-js';

import { Router } from '@solidjs/router';
import { Routes } from './routes.jsx';
const App: Component = () => {
  return (
        <Router>
          <Routes />
        </Router>
  );
};

export default App;
