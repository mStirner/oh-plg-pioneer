const request = require("../../helper/request");
const url = require("url");

// global agent
// prevent event emitter leak
let agent = null;

module.exports = (scope, endpoints) => {

    endpoints.items.filter((obj) => {
        return obj.device === "625c311123ed9311d25efbeb";
    }).forEach((endpoint, i) => {

        //console.log(`Endpoint #${i}`, endpoint)

        const iface = endpoint.interfaces.find(({ seeting: { port } }) => {
            return port === 443
        });

        agent = iface.httpAgent();


        console.log(iface);


        return;

        endpoint.commands.handle(true, (cmd, iface, params) => {
            return new Promise((resolve, reject) => {
                try {

                    /*
                    // THIS DOES NOT CRASH & WORKS AS EXPECTED!
                    // ONLY DIFFRENCE: WE WRITE DIRECTLY ON THE STREAM
                    // AND NO AGENT/HTTP STACK BETWEEN
                    let { host, port } = iface.settings;
                    let secret = "DC5F27B237";

                    console.log();

                    iface.stream.on("data", (data) => {
                        console.log(">", data);
                    });

                    let body = JSON.stringify({
                        on: true
                    });

                    console.log(body.length)

                    iface.stream.write(`PUT /api/${secret}/lights/${endpoint.identifier}/state HTTP/1.1\r\n`);
                    iface.stream.write(`HOST: ${host}:${port}\r\n`)
                    iface.stream.write("content-type: application/json\r\n");
                    iface.stream.write(`Content-Length: ${body.length}\r\n`);
                    iface.stream.write("\r\n");

                    // body request
                    iface.stream.write(body);
                    */




                    // create for each interfac a http agent
                    // Absturtz durch http agent?!
                    if (!agent) {
                        agent = iface.httpAgent();
                    }


                    console.log("Perform command execution on iface", cmd);

                    // doe here something with command call

                    // httpAgent = ifaceStream

                    let { host, port } = iface.settings;
                    let secret = "DC5F27B237";

                    // http://licht.lan/api/DC5F27B237/lights/4/state
                    // `http://${host}:${port}/api/${secret}/lights/${endpoint.identifier}/state`

                    let uri = `http://${host}:${port}/api/${secret}/lights/${endpoint.identifier}/state`;

                    console.log("Request to", uri);

                    let payload = { on: false };

                    switch (cmd.alias) {
                        case "ON":
                            payload = { on: true };
                            break;
                        case "OFF":
                            payload = { on: false };
                            break;
                    }

                    let req = request(uri, {
                        body: JSON.stringify(payload),
                        method: "PUT",
                        agent
                    }, (err, response) => {
                        if (err) {

                            reject(err);

                        } else {

                            let { body } = response;


                            if (!body) {
                                resolve(false)
                            } else {

                                resolve(Object.keys(body[0])[0] === "success");

                                /*
                                let success = Object.values(body[0].success)[0];
                                resolve(success);
                                */

                            }

                        }
                    });

                    req.end();

                } catch (err) {

                    console.log(err)

                }
            });
        });


    });





};