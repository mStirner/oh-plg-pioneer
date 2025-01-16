# Introduction
This is a boilerplate plugin.

# Installation
1) Create a new plugin over the OpenHaus backend HTTP API
2) Mount the plugin source code folder into the backend
3) run `npm install`

# Development
Add plugin item via HTTP API:<br />
[PUT] `http://{{HOST}}:{{PORT}}/api/plugins/`
```json
{
   "name":"Pioneer/Onky AV Receiver Integration",
   "version": "1.0.0",
   "intents":[
      "devices",
      "endpoints"
   ],
   "uuid": "5a26a9bb-1b54-41a5-9173-b4e3579416e6"
}
```

Mount the source code into the backend plugins folder
```sh
sudo mount --bind ~/projects/OpenHaus/plugins/oh-plg-pioneer/ ~/projects/OpenHaus/backend/plugins/5a26a9bb-1b54-41a5-9173-b4e3579416e6/
```