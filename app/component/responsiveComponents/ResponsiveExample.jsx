import Link from 'next/link';

const ResponsiveExample = () => {
  return (
    <div className='group block max-w-xs bg-slate-50 shadow-md shadow-rose-300 border-t border-t-teal-500 rounded-lg mx-auto p-6 my-3 w-80 h-auto ring-1 ring-slate-900/5 space-y-3'>
      <div>
        <div>
          <img src='http://placekitten.com/200/300' alt='Cats forever' />
        </div>
        <div>
          <div>Company Retreats</div>
          <Link href={'/'}>Incredible accomodation for your team</Link>
          <p>
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveExample;
