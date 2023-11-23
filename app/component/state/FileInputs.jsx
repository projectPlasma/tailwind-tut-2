const FileInputs = () => {
  return (
    <>
      <h1 className='flex align-center text-slate-200 mx-auto'>
        File Input Buttons:
      </h1>
      <form className='group block max-w-xs bg-slate-50 shadow-md shadow-rose-300 border-t border-t-teal-500 rounded-lg mx-auto p-6 my-3 w-96 h-auto ring-1 ring-slate-900/5 space-y-3'>
        <div className='shrink'>
          <img
            src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80'
            alt='Current profile photo'
            className='h-16 w-16 object-cover rounded-full'
          />
        </div>
        <label className='block'>
          <span className='sr-only'>Choose profile photo</span>
          <input
            type='file'
            className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-100 file:text-violet-700 hover:file:bg-violet-200'
          />
        </label>
      </form>
    </>
  );
};

export default FileInputs;
