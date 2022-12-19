const COMMANDS = require("./commands.js");

module.exports = (data, logger, init) => {
    return init([
        "devices",
        "endpoints",
    ], async (scope, [
        C_DEVICES,
        C_ENDPOINTS
    ]) => {
        try {

            // FIXME: Add mdns device discovering
            C_DEVICES.found({
                meta: {
                    manufacturer: "pioneer",
                    model: "SC-LX501"
                }
            }, (device) => {

                logger.verbose("Device found", device);

            }, async (query) => {
                try {

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
                            },
                            adapter: [
                                "eiscp"
                            ]
                        }]
                    });

                    let commands = COMMANDS.map((cmd) => {
                        cmd.alias = cmd.payload;
                        cmd.interface = device.interfaces[0]._id;
                        return cmd;
                    });

                    await C_ENDPOINTS.add({
                        name: device.name,
                        device: device._id,
                        commands
                    });

                } catch (err) {

                    logger.error("Could not add device/endpoint pairing", err);

                }
            });

        } catch (err) {

            logger.error("Im fucked up!", err);

        }
    });
};