const Gap = () => {
  return (
    <>
      <h1>Gap:</h1>
      <h3 className='underline'>Basic usage</h3>
      <div className='grid gap-4 grid-cols-3'>
        <div className='bg-red-700 p-5 m-1 rounded-md shadow-lg shadow-red-500'>
          01
        </div>
        <div className='bg-red-700 p-5 m-1 rounded-md shadow-lg shadow-red-500'>
          02
        </div>
        <div className='bg-red-700 p-5 m-1 rounded-md shadow-lg shadow-red-500'>
          03
        </div>
        <div className='bg-red-700 p-5 m-1 rounded-md shadow-lg shadow-red-500'>
          04
        </div>
        <div className='bg-red-700 p-5 m-1 rounded-md shadow-lg shadow-red-500'>
          05
        </div>
        <div className='bg-red-700 p-5 m-1 rounded-md shadow-lg shadow-red-500'>
          06
        </div>
      </div>

      <hr className='m-5 ' />

      <h3 className='underline mt-10'>Changing Row & Col</h3>
      <div className='grid gap-x-8 gap-y-40 grid-cols-3'>
        <div className='bg-teal-700 p-5 m-1 rounded-md shadow-lg shadow-teal-500'>
          01
        </div>
        <div className='bg-teal-700 p-5 m-1 rounded-md shadow-lg shadow-red-500'>
          02
        </div>
        <div className='bg-yellow-700 p-5 m-1 rounded-md shadow-lg shadow-red-500'>
          03
        </div>
        <div className='bg-teal-700 p-5 m-1 rounded-md shadow-lg shadow-[#FDFD96]'>
          04
        </div>
        <div className='bg-teal-700 p-5 m-1 rounded-md shadow-lg shadow-[#FDFD96]'>
          05
        </div>
        <div className='bg-teal-700 p-5 m-1 rounded-md shadow-lg shadow-teal-500'>
          06
        </div>
      </div>
    </>
  );
};

export default Gap;
