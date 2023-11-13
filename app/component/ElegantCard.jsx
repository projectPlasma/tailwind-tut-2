const ElegantCard = () => {
  return (
    <div className='flex font-serif my-3 mx-2 bg-slate-100'>
      {/* Picture Section */}
      <div className='flex-none w-52 relative'>
        <img
          src='http://placekitten.com/200/300'
          alt='Elegant Cat'
          loading='lazy'
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>

      {/* Form Section */}
      <form className='flex-auto p-6'>
        <div className='flex flex-wrap items-baseline'>
          <h1 className='w-full flex-none mb-3 text-2xl leading-none text-slate-900'>
            DogTooth Style Jacket
          </h1>
          <div className='flex-auto text-lg font-medium text-slate-500'>
            $350.00
          </div>
          <div className='text-xs leading-6 font-medium uppercase text-slate-500'>
            In Stock
          </div>
        </div>

        {/* Options Section */}
        <div className='flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-300'>
          <div className='space-x-1 flex text-sm font-medium'>
            <label>
              <input
                name='size'
                type='radio'
                value='xs'
                checked
                className='sr-only peer'
              />
              <div className='w-7 h-7 rounded-sm shadow-md shadow-slate-800/60 border border-slate-600 flex items-center justify-center text-slate-500 peer-checked:bg-slate-950 peer-checked:text-slate-50'>
                XS
              </div>
            </label>
            <label>
              <input
                name='size'
                type='radio'
                value='s'
                className='sr-only peer'
              />
              <div className='w-7 h-7 rounded-sm shadow-md shadow-slate-800/60 border border-slate-600 flex items-center justify-center text-slate-500 peer-checked:bg-slate-950 peer-checked:text-slate-50'>
                S
              </div>
            </label>
            <label>
              <input
                name='size'
                type='radio'
                value='m'
                className='sr-only peer'
              />
              <div className='w-7 h-7 rounded-sm shadow-md shadow-slate-800/60 border border-slate-600 flex items-center justify-center text-slate-500 peer-checked:bg-slate-950 peer-checked:text-slate-50'>
                M
              </div>
            </label>
            <label>
              <input
                name='size'
                type='radio'
                value='l'
                className='sr-only peer'
              />
              <div className='w-7 h-7 rounded-sm shadow-md shadow-slate-800/60 border border-slate-600 flex items-center justify-center text-slate-500 peer-checked:bg-slate-950 peer-checked:text-slate-50'>
                L
              </div>
            </label>
            <label>
              <input
                name='size'
                type='radio'
                value='xl'
                className='sr-only peer'
              />
              <div className='w-7 h-7 rounded-sm shadow-md shadow-slate-800/60 border border-slate-600 flex items-center justify-center text-slate-500 peer-checked:bg-slate-950 peer-checked:text-slate-50'>
                XL
              </div>
            </label>
          </div>
        </div>

        {/* Button Section  */}
        <div className='flex space-x-4 mb-5 text-sm font-medium'>
          <div className='flex-auto flex space-x-4 pr-4'>
            <button
              type='submit'
              className='flex-none w-1/2 h-12 uppercase font-medium shadow-lg shadow-slate-800/70  tracking-wider bg-slate-900  text-white hover:bg-transparent hover:border border-slate-400 hover:text-slate-900'
            >
              Buy Now
            </button>
            <button className='flex-none w-1/2 h-12 uppercase font-medium tracking-wider shadow-lg shadow-slate-800/70 border border-slate-400 text-slate-900 hover:bg-slate-900 hover:border-none hover:text-white'>
              Add to Bag
            </button>
          </div>
          <button
            type='button'
            aria-label='Like'
            className='flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-400/50'
          >
            <svg width='20' height='20' fill='currentColor' aria-hidden='true'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
              />
            </svg>
          </button>
        </div>

        {/* Information Section */}
        <p className='text-sm text-slate-500'>
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default ElegantCard;
