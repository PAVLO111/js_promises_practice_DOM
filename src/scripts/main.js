'use strict';

// =============================== My =================================

// //   First Promise

// const firstPromise = new Promise((resolve, reject) => {
//   const timer = setTimeout(() => {
//     reject(new Error('First promise was rejected'));
//   }, 3000);

//   // -1-

//   // const onClick = (event) => {
//   //   if (event.button === 0) {
//   //     clearTimeout(timer);
//   //     document.removeEventListener('click', onClick);
//   //     resolve();
//   //   }
//   // };

//   // document.addEventListener('click', onClick);

//   // -2-

//   document.addEventListener('click', (event) => {
//     if (event.button === 0) {
//       clearTimeout(timer);
//       resolve();
//     }
//   });
// });

// //  --- First_Promise-NEW_Version ---

// // const firstPromise = new Promise((resolve, reject) => {
// //   const timer = setTimeout(() => {
// //     document.removeEventListener('click', handleClick);
// //     reject(new Error('First promise was rejected!'));
// //   }, 3000);

// //   function handleClick(eve) {
// //     if (eve.button !== 0) {
// //       return;
// //     }

// //     clearTimeout(timer);

// //     document.removeEventListener('click', handleClick);

// //     resolve();
// //   }

// //   document.addEventListener('click', handleClick);
// // });

// firstPromise.then(() => {
//   const div = document.createElement('div');

//   div.dataset.qa = 'notification';
//   div.className = 'success';
//   div.textContent = 'First promise was resolved';
//   document.body.append(div);
// });

// firstPromise.catch((error) => {
//   console.log(error.message);

//   const div = document.createElement('div');

//   div.dataset.qa = 'notification';
//   div.className = 'error';
//   div.textContent = 'First promise was rejected';
//   document.body.append(div);
// });

// //  Second Promise

// const secondPromise = new Promise((resolve) => {
//   document.addEventListener('click', () => {
//     if (event.button === 0 || event.button === 2) {
//       resolve();
//     }
//   });
// });

// secondPromise.then(() => {
//   const secondDiv = document.createElement('div');

//   secondDiv.dataset.qa = 'notification';
//   secondDiv.className = 'success';
//   secondDiv.textContent = 'Second promise was resolved';
//   document.body.append(secondDiv);
// });

// //   Third Promise

// const thirdPromise = new Promise((resolve) => {
//   const leftClick = false;
//   const rightClick = false;

//   // const onClick = (event) => {
//   //   if (event.button === 0) {
//   //     leftClick = true;
//   //   }

//   //   if (event.button === 2) {
//   //     rightClick = true;
//   //   }

//   //   if (leftClick && rightClick) {
//   //     document.removeEventListener('click', onClick);
//   //     resolve();
//   //   }
//   // };

//   const onLeftClick = (event) => {
//     if (event.button === 0) {
//       leftClick = true;
//     }
//   };

//   const onRightClick = (event) => {
//     event.proventDefault();

//     if (event === 2) {
//       rightClick = true;
//     }
//   };

//   if (leftClick && rightClick) {
//     document.removeEventListener('click', onLeftClick);
//     document.removeEventListener('contextmenu', onRightClick);
//     resolve();
//   }

//   document.eddEventListener('click', onLeftClick);
//   document.addEventListener('contextmenu', onRightClick);



//   // document.addEventListener('click', (event) => {
//   //   if (event.button === 0 && event.button === 2) {
//   //     resolve();
//   //   }
//   // });
// }).then(() => {
//   const thirdDiv = document.createElement('div');

//   thirdDiv.dataset.qa = 'notification';
//   thirdDiv.className = 'success';
//   thirdDiv.textContent = 'Third promise was resolved';
//   document.body.append(thirdDiv);
// });








// ============================= AI ==================================


// First Promise
const firstPromise = new Promise((resolve, reject) => {
  const timer = setTimeout(() => {
    reject(new Error('First promise was rejected'));
  }, 3000);

  const onClick = (event) => {
    if (event.button === 0) {
      clearTimeout(timer);
      document.removeEventListener('click', onClick);
      resolve('First promise was resolved');
    }
  };

  document.addEventListener('click', onClick);
});

firstPromise.then(() => {
  const div = document.createElement('div');

  div.dataset.qa = 'notification';
  div.className = 'success';
  div.textContent = 'First promise was resolved';
  document.body.append(div);
});

firstPromise.catch(() => {
  const div = document.createElement('div');

  div.dataset.qa = 'notification';
  div.className = 'error';
  div.textContent = 'First promise was rejected';
  document.body.append(div);
});


// // Second Promise
// const secondPromise = new Promise((resolve) => {
//   const onClick = (event) => {
//     if (event.button === 0 || event.button === 2) {
//       document.removeEventListener('click', onClick);
//       resolve('Second promise was resolved');
//     }
//   };

//   document.addEventListener('click', onClick);
// });

// secondPromise.then(() => {
//   const div = document.createElement('div');

//   div.dataset.qa = 'notification';
//   div.className = 'success';
//   div.textContent = 'Second promise was resolved';
//   document.body.append(div);
// });


// // Third Promise
// const thirdPromise = new Promise((resolve) => {
//   let leftClicked = false;
//   let rightClicked = false;

//   const onClick = (event) => {
//     if (event.button === 0) {
//       leftClicked = true;
//     }

//     if (event.button === 2) {
//       rightClicked = true;
//     }

//     if (leftClicked && rightClicked) {
//       document.removeEventListener('click', onClick);
//       resolve('Third promise was resolved');
//     }
//   };

//   document.addEventListener('click', onClick);
// });

// thirdPromise.then(() => {
//   const div = document.createElement('div');

//   div.dataset.qa = 'notification';
//   div.className = 'success';
//   div.textContent = 'Third promise was resolved';
//   document.body.append(div);
// });

// ------------================---------------==================


// Second Promise
const secondPromise = new Promise((resolve) => {
  const onLeftClick = () => {
    document.removeEventListener('click', onLeftClick);
    document.removeEventListener('contextmenu', onRightClick);
    resolve('Second promise was resolved');
  };

  const onRightClick = (event) => {
    event.preventDefault();
    document.removeEventListener('click', onLeftClick);
    document.removeEventListener('contextmenu', onRightClick);
    resolve('Second promise was resolved');
  };

  document.addEventListener('click', onLeftClick);
  document.addEventListener('contextmenu', onRightClick);
});

// Third Promise
const thirdPromise = new Promise((resolve) => {
  let leftClicked = false;
  let rightClicked = false;

  const onLeftClick = () => {
    leftClicked = true;

    if (leftClicked && rightClicked) {
      document.removeEventListener('click', onLeftClick);
      document.removeEventListener('contextmenu', onRightClick);
      resolve('Third promise was resolved');
    }
  };

  const onRightClick = (event) => {
    event.preventDefault();
    rightClicked = true;

    if (leftClicked && rightClicked) {
      document.removeEventListener('click', onLeftClick);
      document.removeEventListener('contextmenu', onRightClick);
      resolve('Third promise was resolved');
    }
  };

  document.addEventListener('click', onLeftClick);
  document.addEventListener('contextmenu', onRightClick);
});


