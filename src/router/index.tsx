import React, { useState, useEffect, createContext, useContext } from 'react';
import { AuthService } from '../services/authService';

export interface RouteMatch {
  path: string;
  params: Record<string, string>;
}

interface RouterContextType {
  path: string;
  params: Record<string, string>;
  navigate: (to: string) => void;
  replace: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  params: {},
  navigate: () => {},
  replace: () => {},
});

export const useRouter = () => useContext(RouterContext);

// Normalize base path for GitHub Pages and subfolder deployments
const rawBase = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
const BASE_PATH = rawBase.endsWith('/') && rawBase !== '/' ? rawBase.slice(0, -1) : (rawBase === '/' ? '' : rawBase);

export function normalizePath(pathname: string): string {
  if (BASE_PATH && pathname.startsWith(BASE_PATH)) {
    const stripped = pathname.slice(BASE_PATH.length);
    return stripped.startsWith('/') ? stripped : '/' + stripped;
  }
  return pathname || '/';
}

export function denormalizePath(to: string): string {
  const cleanTo = to.startsWith('/') ? to : '/' + to;
  return BASE_PATH + cleanTo;
}

export function matchPath(pattern: string, pathname: string): { matches: boolean; params: Record<string, string> } {
  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = pathname.split('/').filter(Boolean);

  if (patternParts.length !== pathParts.length) {
    return { matches: false, params: {} };
  }

  const params: Record<string, string> = {};

  for (let i = 0; i < patternParts.length; i++) {
    const pPart = patternParts[i];
    const aPart = pathParts[i];

    if (pPart.startsWith(':')) {
      const paramName = pPart.slice(1);
      params[paramName] = aPart;
    } else if (pPart !== aPart) {
      return { matches: false, params: {} };
    }
  }

  return { matches: true, params };
}

function getInitialPath(): string {
  if (typeof window === 'undefined') return '/';
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    return window.location.hash.slice(1);
  }
  return normalizePath(window.location.pathname);
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        setCurrentPath(window.location.hash.slice(1));
      } else {
        setCurrentPath(normalizePath(window.location.pathname));
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (to: string) => {
    if (typeof window !== 'undefined') {
      const fullPath = denormalizePath(to);
      if (window.location.pathname !== fullPath) {
        window.history.pushState({}, '', fullPath);
        setCurrentPath(to);
      }
    }
  };

  const replace = (to: string) => {
    if (typeof window !== 'undefined') {
      const fullPath = denormalizePath(to);
      window.history.replaceState({}, '', fullPath);
      setCurrentPath(to);
    }
  };

  return (
    <RouterContext.Provider value={{ path: currentPath, params, navigate, replace }}>
      {children}
    </RouterContext.Provider>
  );
};
