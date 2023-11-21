import Link from 'next/link';

const Form = () => {
  return (
    <div className='group block max-w-xs bg-slate-50 shadow-md shadow-rose-300 border-t border-t-teal-500 rounded-lg mx-auto p-6 my-3 w-80 h-auto ring-1 ring-slate-900/5 space-y-3 hover:bg-sky-500 hover:ring-sky-500'>
      <fieldset>
        <legend className='text-black'>Published status</legend>

        <input />
        <label></label>

        <input />
        <label></label>

        <div>Drafts are only visible to administrators.</div>
        <div>Your post will be publicly visible on your site.</div>
      </fieldset>
    </div>
  );
};

export default Form;

// Current section => Handling Hover, Focus and Other States: "Differentiating nested groups"
