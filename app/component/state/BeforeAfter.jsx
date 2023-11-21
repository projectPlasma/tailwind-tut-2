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
        <blockquote>
          When you look
          <span>
            <span>annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>
      </div>
    </>
  );
};

export default BeforeAfter;
