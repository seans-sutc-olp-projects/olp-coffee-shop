import type { Component } from 'solid-js';

import grid from './grid.module.css';
import { Router } from '@solidjs/router';
import { Routes } from './routes.jsx';
const App: Component = () => {
  return (
    <div class={grid.parent}>
      <div class={grid.div1}></div>
      <div class={grid.div2}>
        <img src="/assets/UTC-Sheffield-Olympic-Legacy-Park-Horizontal.svg" alt="logo" />
      </div>
      <div class={grid.div3}></div>
      <div class={grid.div4}>
        <Router>
          <Routes />
        </Router>
      </div>
    </div>
  );
};

export default App;
