const net = require('net');
const {PORT, IP} = require('./constants')


const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    console.log("You're connected")
  })

  conn.on('connect', () => {
    conn.write('Name: BBG');
    // conn.write('Move: up');
  })  

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  })

  return conn;
}

module.exports = {connect};