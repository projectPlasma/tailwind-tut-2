const PlayfulCard = () => {
  return (
    <div className='flex rounded-lg my-3 mx-2 bg-transparent font-sans'>
      {/* Picture section */}
      <div className='flex-none w-56 relative'>
        <img
          src='http://placekitten.com/200/300'
          alt='Playful Kitten'
          className='absolute inset-0 w-full h-full object-cover rounded-lg'
          loading='lazy'
        />
      </div>

      {/* Form Description Section */}
      <form className='flex-auto p-6 bg-slate-50 my-2 rounded-r-lg'>
        {/* Description Section */}
        <div className='flex flex-wrap'>
          <h1 className='flex-auto font-medium text-slate-900'>Playful Card</h1>
          <div className='w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600'>
            $39.00
          </div>
          <div className='text-sm font-medium text-slate-400'>In Stock</div>
        </div>

        {/* Form Section */}
        <div className='flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-300'>
          <div className='space-x-2 flex text-sm font-bold'>
            <label>
              <input
                name='size'
                type='radio'
                value='xs'
                checked
                className='sr-only peer'
              />
              <div className='w-9 h-9 shadow-md shadow-violet-800/40 rounded-full border border-violet-600 flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:border-none'>
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
              <div className='w-9 h-9 shadow-md shadow-violet-800/40 rounded-full border border-violet-600 flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:border-none'>
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
              <div className='w-9 h-9 shadow-md shadow-violet-800/40 rounded-full border border-violet-600 flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:border-none'>
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
              <div className='w-9 h-9 shadow-md shadow-violet-800/40 rounded-full border border-violet-600 flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:border-none'>
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
              <div className='w-9 h-9 shadow-md shadow-violet-800/40 rounded-full border border-violet-600 flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:border-none'>
                XL
              </div>
            </label>
          </div>
        </div>

        {/* Buttons Section */}
        <div className='flex space-x-4 mb-5 text-sm font-medium'>
          <div className='flex-auto flex space-x-4'>
            <button
              type='submit'
              className='h-10 px-6 shadow-lg shadow-violet-800/70 font-semibold rounded-full bg-violet-600 text-white'
            >
              Buy Now
            </button>
            <button
              type='button'
              className='h-10 px-6 shadow-lg shadow-slate-800/70 font-semibold rounded-full border border-slate-500 text-slate-950'
            >
              Add to bag
            </button>
          </div>
          {/* Heart shaped SVG */}
          <button
            type='button'
            aria-label='Like'
            className='flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-100'
          >
            <svg width='20' height='20' fill='currentColor' aria-hidden='true'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
              />
            </svg>
          </button>
        </div>
        <p className='text-sm text-slate-500'>
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default PlayfulCard;
