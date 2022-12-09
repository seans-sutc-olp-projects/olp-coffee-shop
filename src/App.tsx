import type { Component } from 'solid-js';

import logo from './logo.svg';
import grid from './grid.module.css';
const App: Component = () => {
  return (
    <div class={grid.parent}>
      <div class={grid.div2}>
        <img src="/assets/UTC-Sheffield-Olympic-Legacy-Park-Horizontal.svg" alt="logo" />
      </div>
    </div>
  );
};

export default App;
