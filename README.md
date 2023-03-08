# Introduction
Pioneer/Onkyo plugin that enables the controlling of the AV-Receiver via OpenHaus.<br />
The network socket can be reached on port 60128 and supports/implements the eISCP protocol.<br />
The `e` stands for "Ethernet" and is basicly the `ISCP` "Integra Serial Control Protocol".

>eISCP = Ethernet<br />
>ISCP = Serial

# Development
Add plugin item via HTTP API:<br />
[PUT] `http://{{HOST}}:{{PORT}}/api/plugins/`
```json
{
    "name": "Pioneer/Onkyo Driver",
    "enabled": true,
    "version": 1,
    "intents": [
        "devices", 
        "endpoints"
    ]
}
```
Response:
```json
{
    "_id": "63a0bef64c10213821c7618f",
    "name": "Pioneer&#x2F;Onkyo Driver",
    "enabled": true,
    "version": 1,
    "intents": [
        "devices",
        "endpoints"
    ],
    "timestamps": {
        "created": 1671479030641,
        "updated": null
    },
    "uuid": "3848fdb2-27a6-4442-95c0-7031f67df293",
    "autostart": true
}
```
Mount the source code into the backend plugins folder
```sh
sudo mount --bind ~/projects/OpenHaus/plugins/oh-plg-pioneer/ ~/projects/OpenHaus/backend/plugins/3848fdb2-27a6-4442-95c0-7031f67df293/
```