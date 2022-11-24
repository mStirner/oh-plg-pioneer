const WebSocket = require("ws");
const { Agent } = require("http");

module.exports = (scope, devices) => {

    const iface = devices.items.find(({ _id }) => {
        return _id === "625c311123ed9311d25efbeb";
    }).interfaces.find(({ settings: { port } }) => {
        return port === 443
    });



    iface.on("attached", (upstream) => {

        console.log("---- Attached");

        setTimeout(() => {

            console.log("Do weboskcet implemtn");

            const agent = iface.httpAgent();


            const ws = new WebSocket(`ws://${iface.settings.host}:${iface.settings.port}`, {
                agent
            });

            ws.on("error", (err) => {
                console.log("Error message", err);
            });

            ws.on("ping", () => {
                console.log("ping");
            });

            ws.on("pong", () => {
                console.log("pong")
            });

            console.log("Websocket url", ws.url)

            ws.on("open", () => {

                console.log("WS Opend");

                ws.on("message", (msg) => {
                    console.log("Message", msg);
                });

            });

        }, 1000);

    });

};