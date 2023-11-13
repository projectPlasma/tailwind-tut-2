import React from 'react';

const GridLayouts = () => {
  return (
    <main>
      <hr className='my-10' />

      {/* Red Layout */}
      <h1 className='mb-10'>"Grid Template Columns"</h1>
      <div className='grid grid-cols-4 gap-3 my-3'>
        <div className='bg-red-400 shadow-lg shadow-red-300 rounded-md p-3 m-1'>
          01
        </div>
        <div className='bg-red-400 shadow-lg shadow-red-300 rounded-md p-3 m-1'>
          02
        </div>
        <div className='bg-red-400 shadow-lg shadow-red-300 rounded-md p-3 m-1'>
          03
        </div>
        <div className='bg-red-400 shadow-lg shadow-red-300 rounded-md p-3 m-1'>
          04
        </div>
        <div className='bg-red-400 shadow-lg shadow-red-300 rounded-md p-3 m-1'>
          05
        </div>
        <div className='bg-red-400 shadow-lg shadow-red-300 rounded-md p-3 m-1'>
          06
        </div>
        <div className='bg-red-400 shadow-lg shadow-red-300 rounded-md p-3 m-1'>
          07
        </div>
        <div className='bg-red-400 shadow-lg shadow-red-300 rounded-md p-3 m-1'>
          08
        </div>
        <div className='bg-red-400 shadow-lg shadow-red-300 rounded-md p-3 m-1'>
          09
        </div>
      </div>

      <hr className='my-10' />

      {/* Blue Layout */}
      <h1 className='mb-10'>"Grid Column Start / End - Spanning Columns"</h1>
      <div className='grid grid-cols-3 gap-3 my-3'>
        <div className='bg-blue-400 shadow-lg shadow-blue-300 rounded-md p-3 m-1'>
          01
        </div>
        <div className='bg-blue-400 shadow-lg shadow-blue-300 rounded-md p-3 m-1'>
          02
        </div>
        <div className='bg-blue-400 shadow-lg shadow-blue-300 rounded-md p-3 m-1'>
          03
        </div>
        <div className='bg-blue-400 shadow-lg shadow-blue-300 rounded-md p-3 m-1 col-span-2'>
          04
        </div>
        <div className='bg-blue-400 shadow-lg shadow-blue-300 rounded-md p-3 m-1'>
          05
        </div>
        <div className='bg-blue-400 shadow-lg shadow-blue-300 rounded-md p-3 m-1'>
          06
        </div>
        <div className='bg-blue-400 shadow-lg shadow-blue-300 rounded-md p-3 m-1 col-span-2'>
          07
        </div>
      </div>

      <hr className='my-10' />

      {/* Orange Layout */}
      <h1 className='mb-10'>
        "Grid Column Start / End - Starting and Ending Lines"
      </h1>
      <div className='grid grid-cols-6 gap-4 my-3'>
        <div className='bg-orange-400 shadow-lg shadow-orange-300 rounded-md p-3 m-1 col-start-2 col-span-4'>
          01
        </div>
        <div className='bg-orange-400 shadow-lg shadow-orange-300 rounded-md p-3 m-1 col-start-1 col-end-3'>
          02
        </div>
        <div className='bg-orange-400 shadow-lg shadow-orange-300 rounded-md p-3 m-1 col-end-7 col-span-2'>
          03
        </div>
        <div className='bg-orange-400 shadow-lg shadow-orange-300 rounded-md p-3 m-1 col-span-2 col-start-1 col-end-7'>
          04
        </div>
      </div>

      <hr className='my-10' />

      {/* Pink Layout */}
      <h1 className='mb-10'>"Grid Template Row"</h1>
      <div className='grid grid-rows-3 grid-flow-col gap-4'>
        <div className='bg-pink-400 shadow-lg shadow-pink-300 row-span-3 rounded-md p-3 m-1'>
          <div class='flex flex-col md:flex-row'>
            <div class='bg-blue-300  rounded-md shadow-md shadow-blue-100 m-1 p-1 basis-1/4'>
              flex: 01
            </div>
            <div class='bg-blue-300 col-span-2 rounded-md shadow-md shadow-blue-100 m-1 p-1 basis-1/4 '>
              flex: 02
            </div>
            <div class='bg-blue-300 rounded-md shadow-md shadow-blue-100 m-1 p-1 basis-1/2'>
              flex: 03
            </div>
          </div>
        </div>
        <div className='bg-pink-400 shadow-lg shadow-pink-300 col-span-2 rounded-md p-3 m-1'>
          02
        </div>
        <div className='bg-pink-400 shadow-lg shadow-pink-300 row-span-2 col-span-2 rounded-md p-3 m-1'>
          03
        </div>
      </div>

      <hr className='my-10' />

      {/* Purple Layout */}
      <h1 className='mb-10'>"Grid Row Start / End"</h1>
      <div className='grid grid-rows-3 grid-flow-col gap-4 my-3'>
        <div className='bg-purple-400 shadow-lg shadow-purple-300 row-start-2 row-span-2  rounded-md p-3 m-1'>
          03
        </div>
        <div className='bg-purple-400 shadow-lg shadow-purple-300 row-end-3 row-span-2  rounded-md p-3 m-1'>
          03
        </div>
        <div className='bg-purple-400 shadow-lg shadow-purple-300 row-start-1 row-end-4 rounded-md p-3 m-1'>
          03
        </div>
      </div>

      <hr className='my-10' />

      {/* Green Layout */}
      <h1 className='mb-10'>"Grid Auto Flow"</h1>
      <div className='grid grid-flow-row-dense grid-cols-3 gap-3 my-3'>
        <div className='bg-green-400 shadow-lg shadow-green-300 col-span-2  rounded-md p-3 m-1'>
          01
        </div>
        <div className='bg-green-400 shadow-lg shadow-green-300 col-span-2  rounded-md p-3 m-1'>
          02
        </div>
        <div className='bg-green-400 shadow-lg shadow-green-300 rounded-md p-3 m-1'>
          03
        </div>
        <div className='bg-green-400 shadow-lg shadow-green-300 rounded-md p-3 m-1'>
          04
        </div>
        <div className='bg-green-400 shadow-lg shadow-green-300 rounded-md p-3 m-1'>
          05
        </div>
      </div>

      <hr className='my-10' />

      {/* Yellow Layout */}
      <h1 className='mb-10'>"Grid Auto Columns"</h1>
      <div className='grid grid-flow-col auto-cols-max gap-3 my-3'>
        <div className='bg-yellow-400 shadow-lg shadow-yellow-300 rounded-md p-3 m-1'>
          01
        </div>
        <div className='bg-yellow-400 shadow-lg shadow-yellow-300 rounded-md p-3 m-1'>
          02
        </div>
        <div className='bg-yellow-400 shadow-lg shadow-yellow-300 rounded-md p-3 m-1'>
          03
        </div>
      </div>

      <hr className='my-10' />

      {/* Teal Layout */}
      <h1 className='mb-10'>"Grid Auto Rows"</h1>
      <div className='grid grid-flow-col auto-rows-max gap-3 my-3'>
        <div className='bg-teal-400 shadow-lg shadow-teal-300  rounded-md p-3 m-1'>
          01
        </div>
        <div className='bg-teal-400 shadow-lg shadow-teal-300  rounded-md p-3 m-1'>
          02
        </div>
        <div className='bg-teal-400 shadow-lg shadow-teal-300 rounded-md p-3 m-1'>
          03
        </div>
      </div>

      <hr className='my-10' />
    </main>
  );
};

export default GridLayouts;
