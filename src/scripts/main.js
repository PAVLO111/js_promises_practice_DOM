'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

// const firstPromise = new Promise((resolve, reject) => {
//   const timer = setTimeout(() => {
//     reject(new Error('First promise was rejected'));
//   }, 3000);

//   const onClick = (event) => {
//     if (event.button === 0) {
//       clearTimeout(timer);
//       document.removeEventListener('click', onClick);
//       resolve();
//     }
//   };

//   document.addEventListener('click', onClick);

//   // document.addEventListener('click', (event) => {
//   //   if (event.button === 0) {
//   //     clearTimeout(timer);
//   //     resolve();
//   //   }
//   // });
// });

const firstPromise = new Promise((resolve, reject) => {
  const timer = setTimeout(() => {
    document.removeEventListener('click', handleClick);
    reject(new Error('First promise was rejected!'));
  }, 3000);

  function handleClick(eve) {
    if (eve.button !== 0) {
      return;
    }

    clearTimeout(timer);

    document.removeEventListener('click', handleClick);

    resolve();
  }

  document.addEventListener('click', handleClick);
});

firstPromise.then(() => {
  const div = document.createElement('div');

  div.dataset.qa = 'notification';
  div.className = 'success';
  div.textContent = 'First promise was resolved';
  document.body.append(div);
});

firstPromise.catch((error) => {
  console.log(error.message);

  const div = document.createElement('div');

  div.dataset.qa = 'notification';
  div.className = 'error';
  div.textContent = 'First promise was rejected';
  document.body.append(div);
});
