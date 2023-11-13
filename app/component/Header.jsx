'use client';

import { useEffect, useState } from 'react';

const Header = () => {
  const size = '24px';
  const [darkMode, setDarkMode] = useState(undefined > undefined);

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', 'true');
      window.document.documentElement.classList.add('dark');
    } else if (darkMode === false) {
      localStorage.setItem('darkMode', false);
      window.document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(localStorage.getItem('darkMode') === 'true');
    }
  }, [darkMode]);

  return (
    <header className='bg-rose-700 flex items-center justify-end w-full p-4'>
      <button
        className='bg-green-700 rounded-l-full border border-green-950 py-1.5 px-4 transition cursor-pointer hover:bg-green-400 hover:text-blue-600'
        onClick={switchMode}
      >
        {!darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};

export default Header;
