let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

// const handleUserInput = function() {
  process.stdin.on('data', (key) => {
  if (key === 'w') {
    connection.write('Move: up')
  } else if (key === 'd') {
    connection.write('Move: right')
  } else if (key === 's') {
    connection.write('Move: down')
  } else if (key === 'a') {
    connection.write('Move: left')
  } else if (key === '\u0003') {
    process.exit();
  }
})
// }
module.exports = {setupInput};