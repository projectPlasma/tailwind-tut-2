const Order = () => {
  return (
    <>
      <h1>Order:</h1>
      <h3 className='underline'>Order Last</h3>
      <div className='flex justify-between'>
        <div className='bg-red-700  w-24 h-24 m-3 p-9 rounded-full shadow-lg shadow-red-300'>
          01
        </div>
        <div className='bg-red-700 w-24 h-24 m-3 p-9 rounded-full shadow-lg shadow-red-300'>
          02
        </div>
        <div className='bg-red-700 w-24 h-24 m-3 p-9 rounded-full shadow-lg shadow-red-300'>
          03
        </div>
        <div className='bg-red-700 order-last w-24 h-24 m-3 p-9 rounded-full shadow-lg shadow-red-300'>
          04
        </div>
        <div className='bg-red-700 w-24 h-24 m-3 p-9 rounded-full shadow-lg shadow-red-300'>
          05
        </div>
        <div className='bg-red-700 order-first w-24 h-24 m-3 p-9 rounded-full shadow-lg shadow-red-300'>
          06
        </div>
      </div>
    </>
  );
};

export default Order;
