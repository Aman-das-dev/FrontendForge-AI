'use client';

import { useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'nexus-theme';

const listeners = new Set<() => void>();

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const themeFromDom = document.documentElement.dataset.theme;
  if (themeFromDom === 'dark' || themeFromDom === 'light') {
    return themeFromDom;
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function emitThemeChange() {
  for (const listener of listeners) {
    listener();
  }
}

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
  emitThemeChange();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => 'dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-secondary-dark/60 bg-secondary-dark/20 px-4 py-2 text-xs font-mono uppercase tracking-[0.26em] text-secondary-light transition-all duration-200 hover:border-primary-yellow/50 hover:text-light"
      aria-label={`Switch to ${isLight ? 'night' : 'day'} mode`}
      aria-pressed={isLight}
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current/40 bg-current/10 text-[10px] leading-none">
        {isLight ? '☀' : '☾'}
      </span>
      {isLight ? 'Day' : 'Night'}
    </button>
  );
}
