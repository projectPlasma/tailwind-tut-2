const TextState = () => {
  return (
    <main className='group block max-w-xs bg-slate-50 shadow-md shadow-rose-300 selection:bg-[#FDFD96]  border-t border-t-teal-500 rounded-lg mx-auto p-6 my-3 w-80 h-auto ring-1 ring-slate-900/5 space-y-3'>
      <h1 className='underline font-extralight'>Ingredients:</h1>
      <ul
        role='list'
        className='marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400'
      >
        <li>5 cups chopped Porcini mushrooms</li>
        <li>1/2 cup of olive oil</li>
        <li>3lb of celery</li>
      </ul>
      <div className=' selection:text-fuchsia-950'>
        <h1 className='underline font-extralight'>Highlighted text:</h1>
        <p>
          So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me. I don't know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that
          moment, I <em>was</em> a marine biologist.
        </p>
      </div>
      <div>
        <h1 className='underline font-extralight'>
          First-line & First-letter:
        </h1>
        <p className='first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-[#FDFD96] first-letter:mr-1 first-letter:float-left'>
          Well, let me tell you something, funny boy. Y'know that little stamp,
          the one that says "New York Public Library"? Well that may not mean
          anything to you, but that means a lot to me. One whole hell of a lot.
        </p>
      </div>
      <h1 className='underline font-extralight'>Open/Closed state:</h1>
      <div className='max-w-lg mx-auto p-8'>
        <details className='open:bg-slate-400 dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg'>
          <summary className='text-sm leading-6 text-slate-900 dark:text-white font-semibold underline select-none'>
            Learn More:
          </summary>
          <div className='mt-3 text-sm leading-6 text-slate-950 dark:text-slate-400'>
            <p className='first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-[#FDFD96] first-letter:mr-1 first-letter:float-left'>
              Well, let me tell you something, funny boy. Y'know that little
              stamp, the one that says "New York Public Library"? Well that may
              not mean anything to you, but that means a lot to me. One whole
              hell of a lot.
            </p>
          </div>
        </details>
      </div>
    </main>
  );
};

export default TextState;
