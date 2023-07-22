const characters = ['|', '/', '-', '\\'];
let delay = 100;

function animateSpinner() {
  for (const char of characters) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200;
  }
}

animateSpinner();