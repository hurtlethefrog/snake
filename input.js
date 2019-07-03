const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = function() {
  process.stdin.on('data', (key) => {
  if (key === 'w') {
    connect.write('Move: up')
  } else if (key === 'd') {
    connect.write('Move: right')
  } else if (key === 's') {
    connect.write('Move: down')
  } else if (key === 'a') {
    connect.write('Move: left')
  } else if (key === '\u0003') {
    process.exit();
  }
})
}
module.exports = {setupInput};