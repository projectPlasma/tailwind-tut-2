const FirstLast = () => {
  return (
    <div className='bg-slate-700 rounded-lg mx-10 my-3'>
      <ul role='list' className='p-6 divide-y divide-orange-200'>
        {/* Remove top/bottom padding when first/last child */}
        <li className='flex py-4   first:pt-0 last:pb-0'>
          <div className='flex mt-3'>
            <img
              src='http://placekitten.com/200/300'
              alt='Profile Picture'
              className='h-12 w-12 rounded-full'
            />
            <div className='ml-3 overflow-hidden'>
              <p className='text-sm font-medium text-slate-500'>
                Kristen Ramos
              </p>
              <p className='text-sm text-slate-300 truncate'>
                kristen.ramos@example.com
              </p>
            </div>
          </div>
        </li>

        {/* Remove top/bottom padding when first/last child */}
        <li className='flex py-4   first:pt-0 last:pb-0'>
          <div className='flex mt-3'>
            <img
              src='http://placekitten.com/200/300'
              alt='Profile Picture'
              className='h-12 w-12 rounded-full'
            />
            <div className='ml-3 overflow-hidden'>
              <p className='text-sm font-medium text-slate-500'>
                Kristen Ramos
              </p>
              <p className='text-sm text-slate-300 truncate'>
                kristen.ramos@example.com
              </p>
            </div>
          </div>
        </li>

        {/* Remove top/bottom padding when first/last child */}
        <li className='flex py-4   first:pt-0 last:pb-0'>
          <div className='flex mt-3'>
            <img
              src='http://placekitten.com/200/300'
              alt='Profile Picture'
              className='h-12 w-12 rounded-full'
            />
            <div className='ml-3 overflow-hidden'>
              <p className='text-sm font-medium text-slate-500'>
                Kristen Ramos
              </p>
              <p className='text-sm text-slate-300 truncate'>
                kristen.ramos@example.com
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FirstLast;
