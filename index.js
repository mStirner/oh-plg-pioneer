const { Duplex } = require("stream");

const COMMANDS = require("./commands.js");
const adapter = require("./adapter.js");

const infinity = require("../../helper/infinity.js");
const debounce = require("../../helper/debounce.js");

module.exports = (data, logger, init) => {
    return init([
        "devices",
        "endpoints",
    ], async (scope, [
        C_DEVICES,
        C_ENDPOINTS
    ]) => {


        C_DEVICES.found({
            labels: [
                "manufacturer=pioneer",
                "type=av-receiver",
                "googlecast=true"
            ]
        }, async (device) => {

            let counter = 0;

            let worker = debounce((redo) => {

                logger.verbose("Inside infinity, counter=",counter++);

                let interface = device.interfaces[0];
                let { host, port } = interface.settings;

                let bridge = interface.bridge();
                let { encode, decode } = adapter();

                encode.pipe(bridge);
                bridge.pipe(decode);

                let stream = Duplex.from({
                    readable: decode,
                    writable: encode
                });

                bridge.on("error", (err) => {
                    logger.error(err, `Could not connect to to tcp://${host}:${port}`);
                    redo();
                });

                bridge.once("open", () => {
                    logger.info(`Connected to tcp://${host}:${port}`);
                });

                bridge.once("close", () => {
                    logger.info(`Disconnected from tcp://${host}:${port}`);
                    redo();
                });


                C_ENDPOINTS.found({
                    device: device._id
                }, (endpoint) => {

                    endpoint.commands.forEach((command) => {
                        command.setHandler(async (cmd, iface, params, done) => {

                            stream.write(cmd.payload, (err) => {
                                if (err) {

                                    logger.error(err, "Could not write command payload", cmd.payload);

                                } else {

                                    logger.verbose("Data writen to socket");

                                    stream.once("data", (data) => {
                                        logger.verbose("Received from receiver", data, Buffer.from(cmd.payload))
                                        // TODO: Check response properly
                                        done(null, true, /*data === Buffer.from(cmd.payload)*/);
                                    });

                                }
                            });

                        });
                    });

                }, async (query) => {

                    // feedback
                    logger.debug("No av receiver endpoint found, add one");

                    let commands = COMMANDS.map((cmd) => {
                        cmd.alias = cmd.payload;
                        cmd.interface = interface._id;
                        return cmd;
                    });

                    let endpoint = await C_ENDPOINTS.add({
                        name: device.name,
                        device: device._id,
                        commands,
                        ...query
                    });


                    // feedback
                    logger.info(`Pioneer AV Receiver endpoint added`, endpoint);


                })

            }, 5000);

            infinity(worker);

        }, async (query) => {

            // feedback
            logger.debug("No pioneer av receiver device found, add one");

            // add device
            let device = await C_DEVICES.add({
                name: "AV - Receiver",
                ...query,
                interfaces: [{
                    type: "ETHERNET",
                    description: "eISCP Interface",
                    settings: {
                        host: "192.168.2.10",
                        port: 60128,
                        socket: "tcp"
                    }
                }]
            });

            // feedback
            logger.info(`Pioneer AV Receiver device added`, device);

        });

    });


};