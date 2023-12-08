// 'use client';

// const LocalStore = () => {
//   const localStoreVar =
//     localStorage.getItem('darkMode') === 'true' ? 'dark' : 'light';
//   return <div>localStore</div>;
// };

// export default LocalStore;

'use client';

export const localStoreVar =
  localStorage.getItem('darkMode') === 'true' ? 'dark' : 'light';
