import { useState, useCallback, useEffect } from 'react';

export const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [disableAppBarVisibility, setDisableAppBarVisibility] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const html = document.documentElement;
    const body = document.body;

    if (isMenuOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
      setDisableAppBarVisibility(true);
    } else {
      html.style.overflow = '';
      body.style.overflow = '';
      setDisableAppBarVisibility(false);
    }

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
      setDisableAppBarVisibility(false);
    };
  }, [isMenuOpen, hasMounted]);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return {
    isMenuOpen,
    disableAppBarVisibility,
    openMenu,
    closeMenu,
    toggleMenu
  };
};
