'use client';

import { useState } from 'react';

import SarahWords from './component/SarahWords';
import Test from './component/Test';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState('Option 1');

  const updateValue = (value) => {
    setSelectValue(value);
    setIsOpen(false);
  };

  return (
    <main className='grid grid-cols-1 gap-2 md:grid-cols-4  Parent h-screen p-4 text-white'>
      <div className='col-span-auto'>
        <Test />
      </div>
      <div className='col-span-3'>
        <SarahWords />
        <SarahWords />
        <SarahWords />
      </div>
    </main>
  );
};

export default Home;

// FreeCodeCamp: TailwindCSS Tut: 4:08:04 - "Dark mode"
