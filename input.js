let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

process.stdin.on('data', (key) => {
  switch (key) {
    case '\u0003': process.exit(); break;
    case 'w': connection.write('Move: up'); break;
    case 's': connection.write('Move: down'); break;
    case 'd': connection.write('Move: right'); break;
    case 'a': connection.write('Move: left'); break;
    case 'q': connection.write('Say: resistance is futile'); break;
    case 'e': connection.write('Say: clap CLAP'); break;
    }
  });

module.exports = {setupInput};