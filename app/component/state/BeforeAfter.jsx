const BeforeAfter = () => {
  return (
    <>
      <h1 className='flex align-center text-slate-200 mx-auto'>
        Before and After:
      </h1>
      <div className='group block max-w-xs bg-slate-50 shadow-md shadow-rose-300 border-t border-t-teal-500 rounded-lg mx-auto p-6 my-3 w-80 h-auto ring-1 ring-slate-900/5 space-y-3'>
        <label className='block'>
          <span className='after:content-["*"] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700'>
            Email
          </span>
          <input
            type='email'
            name='email'
            placeholder='you@example.com'
            className='mt-1 px-3 py-2 bg-slate-200 border border-slate-400 shadow-md shadow-slate-500 placeholder-slate-400 rounded-full focus:outline-none focus:border-[#FDFD96] focus:ring-[#FDFD96] block w-full sm:text-sm focus:ring-1'
          />
        </label>
      </div>
      <div className='group block max-w-xs bg-slate-50 shadow-md shadow-rose-300 border-t border-t-teal-500 rounded-lg mx-auto p-6 my-3 w-80 h-auto ring-1 ring-slate-900/5 space-y-3'>
        <blockquote className='text-2xl font-semibold italic text-center text-slate-900'>
          When you look
          <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative mx-2 inline-block'>
            <span className='relative text-white'>annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>

        <blockquote className='text-2xl font-semibold italic text-center text-slate-900'>
          When you look
          <span className='relative'>
            <span
              className='block absolute -inset-1 -skew-y-3 bg-pink-500'
              aria-hidden='true'
            >
              <span className='relative text-white'>annoyed</span>
            </span>
          </span>
          all the time, people think that you're busy.
        </blockquote>

        <blockquote className='text-2xl font-semibold italic text-center text-slate-900'>
          When you look
          <span className='relative'>
            <span
              className='block absolute -inset-1 -skew-y-3 bg-pink-500'
              aria-hidden='true'
            ></span>
            <span className='relative text-white'>annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>
      </div>

      <div className='group block max-w-xs bg-slate-50 shadow-md shadow-rose-300 border-t border-t-teal-500 rounded-lg mx-auto p-6 my-3 w-80 h-auto ring-1 ring-slate-900/5 space-y-3'>
        <label className='relative block'>
          <span className='sr-only'>Search</span>
          <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
            <svg className='h-5 w-5 fill-slate-300' viewBox='0 0 20 20'></svg>
          </span>
          <input
            placeholder='Search for anything...'
            type='text'
            name='search'
            className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-md shadow-slate-600/80 focus:outline-none focus:border-sky-500 focus:ring-2 sm:text-sm'
          />
        </label>
      </div>
    </>
  );
};

export default BeforeAfter;
