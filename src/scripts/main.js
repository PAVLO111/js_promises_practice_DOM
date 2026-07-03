'use strict';

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

firstPromise
 .then((message) => {
   const div = document.createElement('div');

   div.dataset.qa = 'notification';
   div.className = 'success';
   div.textContent = message;
   document.body.append(div);
 })
 .catch((errorMessage) => {
   const div = document.createElement('div');

   div.dataset.qa = 'notification';
   div.className = 'error';
   div.textContent = errorMessage.message;
   document.body.append(div);
 });

// ------------------------------------------------

// Second Promise
const secondPromise = new Promise((resolve) => {
  const onLeftClick = (event) => {
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

secondPromise.then((message) => {
  const div = document.createElement('div');

  div.dataset.qa = 'notification';
  div.className = 'success';
  // div.textContent = 'Second promise was resolved';
  div.textContent = message;
  document.body.append(div);
});

// ------------------------------------------------

// Third Promise
const thirdPromise = new Promise((resolve) => {
  let leftClicked = false;
  let rightClicked = false;

  const onLeftClick = (event) => {
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

thirdPromise.then((message) => {
  const div = document.createElement('div');

  div.dataset.qa = 'notification';
  div.className = 'success';
  div.textContent = message;
  document.body.append(div);
});
