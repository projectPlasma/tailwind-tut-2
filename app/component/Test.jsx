'use client';

import { useState } from 'react';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState('Option 1');

  const updateValue = (value) => {
    setSelectValue(value);
    setIsOpen(false);
  };

  return (
    <div className='flex p-1 text-white'>
      <div className='inline-block p-4 text-black bg-cyan-500 border border-cyan-800 rounded-lg shadow-2xl shadow-cyan-500'>
        <h1>Hello</h1>
        <p>This is my div</p>
        <button className='px-3 py-2 mb-3 rounded-lg cursor-pointer animate-pulse transition ease-in-out delay-150 bg-cyan-800/20 shadow-md shadow-emerald-300 text-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300'>
          Say Hello
        </button>

        {/* Design System Stuff */}
        <div>
          <h1>This is a title.</h1>
          <h2>This is a subtitle.</h2>
          <p className='text-base'>This is a paragraph.</p>
          <a href=''>This is an anchor tag.</a>
        </div>

        {/* Button */}
        <div>
          <button className='btn btn-primary my-4'>Primary Button</button>
        </div>

        <div>
          <button className='btn btn-secondary my-4'>Secondary Button</button>
        </div>

        <div>
          <button disabled className='btn btn-primary my-4'>
            Disabled Button
          </button>
        </div>

        {/* Input */}
        <div>
          <input type='text' placeholder='Name' />
        </div>

        <div>
          <input disabled type='text' placeholder='Email' />
        </div>

        <div>
          <input type='date' />
        </div>

        <div className='flex items-start my-2'>
          <input type='checkbox' id='checkbox' />
          <label className='' htmlFor='checkbox'>
            Lorem
          </label>
        </div>

        <div>
          <select name='' id=''>
            <option value=''>Option 1</option>
            <option value=''>Option 2</option>
          </select>
        </div>

        <div className='Select'>
          <div className='child' onClick={() => setIsOpen(!isOpen)}>
            {selectValue}
          </div>
          {isOpen && (
            <div>
              <ul className='flex flex-col divide-y border-t'>
                <li className='child' onClick={() => updateValue('Option 1')}>
                  Option 1
                </li>
                <li className='child' onClick={() => updateValue('Option 2')}>
                  Option 2
                </li>
                <li className='child' onClick={() => updateValue('Option 3')}>
                  Option 3
                </li>
                <li className='child' onClick={() => updateValue('Option 4')}>
                  Option 4
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;
