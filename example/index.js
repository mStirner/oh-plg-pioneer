const net = require("net");
const { encode, decode } = require("./adapter.js");

const socket = new net.Socket();


encode.pipe(socket).pipe(decode).pipe(process.stdout);


socket.on("connect", () => {

    console.log("Connected");
    //encode.write("AMTTG"); // MUTE
    encode.write("NRIQSTN"); // docs/NRIQSTN.xml

});



socket.connect(60128, "192.168.2.10");