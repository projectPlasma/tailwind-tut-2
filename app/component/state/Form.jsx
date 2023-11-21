const Form = () => {
  return (
    <main className='group block max-w-xs bg-slate-50 shadow-md shadow-rose-300 border-t border-t-teal-500 rounded-lg mx-auto p-6 my-3 w-80 h-auto ring-1 ring-slate-900/5 space-y-3'>
      <fieldset>
        <legend className='text-black'>Published Status:</legend>

        <input
          id='draft'
          type='radio'
          name='status'
          checked
          className='peer/draft mr-1'
        />
        <label for='draft' className='peer-checked/draft:text-sky-500'>
          Draft
        </label>

        <input
          id='published'
          type='radio'
          name='status'
          className='peer/published ml-3 mr-1'
        />
        <label for='published' className='peer-checked/published:text-sky-500'>
          Published
        </label>

        <div className='hidden peer-checked/draft:block text-sm mt-3'>
          Drafts are only visible to administrators.
        </div>
        <div className='hidden peer-checked/published:block text-sm'>
          Your post will be publicly visible on your site.
        </div>
      </fieldset>
    </main>
  );
};

export default Form;

// Current section => Handling Hover, Focus and Other States: "Differentiating nested groups"
