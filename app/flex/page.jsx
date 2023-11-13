const FlexLayouts = () => {
  return (
    <main>
      <hr className='my-10' />
      <h1>Setting the Flex basis</h1>
      <section className='flex flex-row gap-3'>
        <div className='bg-purple-600 shadow-lg shadow-purple-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          01 (basis-1/4)
        </div>
        <div className='bg-purple-600 shadow-lg shadow-purple-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          02 (basis-1/4)
        </div>
        <div className='bg-purple-600 shadow-lg shadow-purple-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/2'>
          03 (basis-1/2)
        </div>
      </section>

      <hr className='my-10' />
      <h1>Flex Direction:</h1>
      <h2 className='underline mt-5'>Flex Row:</h2>
      <section className='flex flex-row gap-3'>
        <div className='bg-green-600 shadow-lg shadow-green-300 rounded-md m-1 p-12'>
          01
        </div>
        <div className='bg-green-600 shadow-lg shadow-green-300 rounded-md m-1 p-12'>
          02
        </div>
        <div className='bg-green-600 shadow-lg shadow-green-300 rounded-md m-1 p-12'>
          03
        </div>
      </section>

      <h2 className='underline mt-5'>Flex Reversed Row:</h2>
      <section className='flex flex-row-reverse gap-3'>
        <div className='bg-teal-600 shadow-lg shadow-teal-300 rounded-md m-1 p-12'>
          01
        </div>
        <div className='bg-teal-600 shadow-lg shadow-teal-300 rounded-md m-1 p-12'>
          02
        </div>
        <div className='bg-teal-600 shadow-lg shadow-teal-300 rounded-md m-1 p-12'>
          03
        </div>
      </section>

      <h2 className='underline mt-5'>Flex Column:</h2>
      <section className='flex flex-col gap-3'>
        <div className='bg-orange-600 shadow-lg shadow-orange-300 rounded-md m-1 p-12'>
          01
        </div>
        <div className='bg-orange-600 shadow-lg shadow-orange-300 rounded-md m-1 p-12'>
          02
        </div>
        <div className='bg-orange-600 shadow-lg shadow-orange-300 rounded-md m-1 p-12'>
          03
        </div>
      </section>

      <h2 className='underline mt-5'>Flex Column-Reversed:</h2>
      <section className='flex flex-col gap-3'>
        <div className='bg-blue-600 shadow-lg shadow-blue-300 rounded-md m-1 p-12'>
          01
        </div>
        <div className='bg-blue-600 shadow-lg shadow-blue-300 rounded-md m-1 p-12'>
          02
        </div>
        <div className='bg-blue-600 shadow-lg shadow-blue-300 rounded-md m-1 p-12'>
          03
        </div>
      </section>

      <hr className='my-10' />
      <h1>Flex Wrap:</h1>
      <h2 className='underline mt-5'>Flex No Wrap:</h2>
      <section className='flex flex-nowrap gap-3'>
        <div className='bg-yellow-600 shadow-lg shadow-yellow-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          01
        </div>
        <div className='bg-yellow-600 shadow-lg shadow-yellow-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          02
        </div>
        <div className='bg-yellow-600 shadow-lg shadow-yellow-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/2'>
          03
        </div>
      </section>

      <h2 className='underline mt-5'>Flex Wrap:</h2>
      <section className='flex flex-wrap gap-3'>
        <div className='bg-red-600 shadow-lg shadow-red-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          01
        </div>
        <div className='bg-red-600 shadow-lg shadow-red-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          02
        </div>
        <div className='bg-red-600 shadow-lg shadow-red-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/2'>
          03
        </div>
      </section>

      <h2 className='underline mt-5'>Flex Wrap Reverse:</h2>
      <section className='flex flex-wrap-reverse gap-3'>
        <div className='bg-amber-600 shadow-lg shadow-amber-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          01
        </div>
        <div className='bg-amber-600 shadow-lg shadow-amber-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          02
        </div>
        <div className='bg-amber-600 shadow-lg shadow-amber-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/2'>
          03
        </div>
      </section>

      <hr className='my-10' />
      <h1>Flex:</h1>
      <h2 className='underline mt-5'>Flex Initial:</h2>
      <section className='flex gap-3'>
        <div className='flex-none w-14 h-14 bg-fuchsia-600 shadow-lg shadow-fuchsia-300 rounded-md m-1'>
          01
        </div>
        <div className='flex-initial w-64 bg-fuchsia-600 shadow-lg shadow-fuchsia-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          02
        </div>
        <div className='flex-initial w-32 bg-fuchsia-600 shadow-lg shadow-fuchsia-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/2'>
          03
        </div>
      </section>

      <h2 className='underline mt-5'>Flex 1:</h2>
      <section className='flex gap-3'>
        <div className='flex-none bg-rose-600 shadow-lg shadow-rose-300 rounded-md m-1'>
          01
        </div>
        <div className='flex-1 w-64 bg-rose-600 shadow-lg shadow-rose-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          02
        </div>
        <div className='flex-1 w-32 bg-rose-600 shadow-lg shadow-rose-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/2'>
          03
        </div>
      </section>

      <h2 className='underline mt-5'>Flex Auto1:</h2>
      <section className='flex gap-3'>
        <div className='flex-none bg-pink-600 shadow-lg shadow-pink-300 rounded-md m-1'>
          01
        </div>
        <div className='flex-auto w-64 bg-pink-600 shadow-lg shadow-pink-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          02
        </div>
        <div className='flex-auto w-32 bg-pink-600 shadow-lg shadow-pink-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/2'>
          03
        </div>
      </section>

      <h2 className='underline mt-5'>Flex None:</h2>
      <section className='flex gap-3'>
        <div className='flex-none w-14 h-14 bg-indigo-600 shadow-lg shadow-indigo-300 rounded-md m-1'>
          01
        </div>
        <div className='flex-none bg-indigo-600 shadow-lg shadow-indigo-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/4'>
          02
        </div>
        <div className='flex-1 bg-indigo-600 shadow-lg shadow-indigo-300 rounded-md m-1 p-12 basis-1/3 md:basis-1/2'>
          03
        </div>
      </section>

      <hr className='my-10' />
      <h1>Flex Grow:</h1>
      <h2 className='underline mt-5'>Grow:</h2>
      <section className='flex gap-3'>
        <div className='flex-none w-14 h-14 bg-emerald-600 shadow-lg shadow-emerald-300 rounded-md m-1 p-12'>
          01
        </div>
        <div className='grow h-14 bg-emerald-600 shadow-lg shadow-emerald-300 rounded-md m-1 p-12 '>
          02
        </div>
        <div className='flex-none w-14 h-14 bg-emerald-600 shadow-lg shadow-emerald-300 rounded-md m-1 p-12 '>
          03
        </div>
      </section>

      <h2 className='underline mt-5'>Grow-0:</h2>
      <section className='flex gap-3'>
        <div className='grow h-14 bg-cyan-600 shadow-lg shadow-cyan-300 rounded-md m-1 p-12'>
          01
        </div>
        <div className='grow-0 h-14 bg-cyan-600 shadow-lg shadow-cyan-300 rounded-md m-1 p-12 '>
          02
        </div>
        <div className='grow h-14 bg-cyan-600 shadow-lg shadow-cyan-300 rounded-md m-1 p-12 '>
          03
        </div>
      </section>

      <hr className='my-10' />
      <h1>Flex Shrink:</h1>
      <h2 className='underline mt-5'>Shrink:</h2>
      <section className='flex gap-3'>
        <div className='flex-none w-14 h-14 bg-sky-600 shadow-lg shadow-sky-300 rounded-md m-1 p-12'>
          01
        </div>
        <div className='shrink w-64 h-14 bg-sky-600 shadow-lg shadow-sky-300 rounded-md m-1 p-12 '>
          02
        </div>
        <div className='flex-none w-14 h-14 bg-sky-600 shadow-lg shadow-sky-300 rounded-md m-1 p-12 '>
          03
        </div>
      </section>

      <h2 className='underline mt-5'>Shrink-0:</h2>
      <section className='flex gap-3'>
        <div className='flex-1 h-16 bg-lime-600 shadow-lg shadow-lime-300 rounded-md m-1 p-12'>
          01
        </div>
        <div className='shrink w-64 h-14 bg-lime-600 shadow-lg shadow-lime-300 rounded-md m-1 p-12 '>
          02
        </div>
        <div className='flex-1 h-16 bg-lime-600 shadow-lg shadow-lime-300 rounded-md m-1 p-12 '>
          03
        </div>
      </section>
    </main>
  );
};

export default FlexLayouts;
