const args = process.argv.slice(2);
const numbers = [];
args.forEach(function(arg) {
  const num = Number(arg);
  if (!isNaN(num) && num > 0) {
    numbers.push(num);
  }
});

numbers.forEach(function(num, index) {
  setTimeout(function() {
    process.stdout.write('\x07');
    if (index === numbers.length - 1) {
      console.log('System Sound (Beep / Ding)');
    }
  }, num * 1000);
});