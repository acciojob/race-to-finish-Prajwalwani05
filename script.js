window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

for (let i = 0; i < 5; i++) {
  let randomTime = Math.floor(Math.random() * 5) + 1;
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  });
  promises.push(p);
}

Promise.any(promises)
  .then((result) => {
    document.getElementById("output").innerText = result;
  })
  .catch((error) => {
    console.log(error);
  });