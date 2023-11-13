const SimpleCard = () => {
  return (
    <div className='flex font-sans bg-slate-100 rounded-md mx-3 my-2'>
      {/* Pic section */}
      <div className='flex-none w-48 relative'>
        <img
          src='http://placekitten.com/200/300'
          alt='Kitten Pix'
          loading='lazy'
          className='absolute inset-0 w-full h-full object-cover rounded-l-md'
        />
      </div>
      <form className='flex-auto p-6'>
        {/* Product and price information */}
        <div className='flex flex-wrap'>
          <h1 className='flex-auto text-lg font-semibold text-slate-900'>
            Simple Card
          </h1>
          <div className='text-lg font-semibold text-slate-500'>$110.00</div>
          <div className='w-full flex-none text-sm font-medium text-slate-700 mt-2'>
            In Stock
          </div>
        </div>

        {/* Sizes inputs */}
        <div className='flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-400'>
          <div className='space-x-2 flex text-sm'>
            {/* Size Extra Small */}
            <label>
              <input
                type='radio'
                name='size'
                value='xs'
                checked
                className='sr-only peer'
              />
              <div className='w-9 h-9 shadow-md rounded-lg flex items-center justify-center text-slate-700 border border-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-slate-50 peer-checked:border-none'>
                XS
              </div>
            </label>

            {/* Size Small */}
            <label>
              <input
                type='radio'
                name='size'
                value='s'
                className='sr-only peer'
              />
              <div className='w-9 h-9 shadow-md rounded-lg flex items-center justify-center text-slate-700 border border-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-slate-50 peer-checked:border-none'>
                S
              </div>
            </label>

            {/* Size Medium */}
            <label>
              <input
                type='radio'
                name='size'
                value='m'
                className='sr-only peer'
              />
              <div className='w-9 h-9 shadow-md rounded-lg flex items-center justify-center text-slate-700 border border-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-slate-50 peer-checked:border-none'>
                M
              </div>
            </label>

            {/* Size Large */}
            <label>
              <input
                type='radio'
                name='size'
                value='l'
                className='sr-only peer'
              />
              <div className='w-9 h-9 shadow-md rounded-md flex items-center justify-center text-slate-700 border border-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-slate-50 peer-checked:border-none'>
                L
              </div>
            </label>

            {/* Size Extra Large */}
            <label>
              <input
                type='radio'
                name='size'
                value='xl'
                className='sr-only peer'
              />
              <div className='w-9 h-9 shadow-md rounded-md flex items-center justify-center text-slate-700 border border-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-slate-50 peer-checked:border-none'>
                XL
              </div>
            </label>
          </div>
        </div>

        {/* Button section */}
        <div className='flex space-x-4 mb-6 text-sm font-medium'>
          <div className='flex-auto flex space-x-4'>
            {/* Buy + Add Buttons */}
            <button
              type='submit'
              className='h-10 px-6 font-semibold rounded-md bg-slate-950 text-slate-50'
            >
              Buy Now
            </button>
            <button
              type='button'
              className='h-10 px-6 font-semibold rounded-md border border-slate-700 text-slate-900'
            >
              Add to Bag
            </button>
          </div>
          {/* Heart Shape */}
          <button
            type='button'
            aria-label='Like'
            className='flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-300'
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
        <p className='text-sm text-slate-700'>
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default SimpleCard;
