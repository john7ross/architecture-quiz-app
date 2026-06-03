import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/themes.css';
import './styles/responsive.css';

// Задаём тему до первого рендера, чтобы не было вспышки нестилизованного контента.
(function initTheme() {
  let theme = 'light';
  try {
    const saved = localStorage.getItem('quiz-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
  } catch (e) { /* localStorage недоступен */ }
  document.documentElement.setAttribute('data-theme', theme);
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);