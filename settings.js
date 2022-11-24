module.exports = (logger, C_STORE, data) => {

    let settings = C_STORE.namespace(data.uuid);

    return new Promise((resolve, reject) => {
        Promise.all([

            // API polling interval
            new Promise((resolve, reject) => {
                if (settings.interval) {
                    logger.trace("interval value exists");
                    resolve();
                } else {
                    store.add({
                        key: "interval",
                        description: "API Polling interval",
                        namespace: data.uuid,
                        value: 3000
                    }, (err, data) => {
                        if (err) {

                            logger.error(err, `Could add store setting "interval"`);
                            reject(err);

                        } else {

                            logger.debug(`Store setting "interval" set to "${data.value}"`);
                            resolve();

                        }
                    });

                }
            })

        ]).then(resolve).catch(reject);
    });

};