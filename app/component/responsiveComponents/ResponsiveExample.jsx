import Link from 'next/link';

const ResponsiveExample = () => {
  return (
    <div className='group block bg-slate-50 shadow-md shadow-rose-300 border-t border-t-teal-500 rounded-lg mx-2 p-6 my-3 w-auto h-auto ring-1 ring-slate-900/5 space-y-3'>
      <div className='md:flex'>
        <div className='md:shrink-0'>
          <img
            src='http://placekitten.com/200/300'
            alt='Cats forever'
            className='h-48 w-full object-cover md:h-full md:w-48'
          />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            Company Retreats
          </div>
          <Link
            href={'/'}
            className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
          >
            Incredible accomodation for your team
          </Link>
          <p className='mt-2 text-slate-500'>
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveExample;
