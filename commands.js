module.exports = [
    // power 
    {
        name: "Power On",
        payload: "PWR01",
        description: "Sets System Standby"
    }, {
        name: "Power Off",
        payload: "PWR00",
        description: "Sets System On"
    }, {
        name: "Query power state",
        payload: "QSTN",
        description: "gets the System Power Status"
    },
    // audio
    {
        name: "Mute Audio Off",
        payload: "AMT00",
        description: "sets Audio Muting Off"
    }, {
        name: "Mute Audio On",
        payload: "AMT01",
        description: "sets Audio Muting On"
    }, {
        name: "Toggle Muting",
        payload: "AMTTG",
        description: "sets Audio Muting Wrap-Around"
    }, {
        name: "Get Muting state",
        payload: "AMTQSTN",
        description: "gets the Audio Muting State"
    },
    // Master volume
    {
        name: "Volume +",
        payload: "MVLUP",
        description: "sets Volume Level Up"
    }, {
        name: "Volume -",
        payload: "MVLDOWN",
        description: "sets Volume Level Down"
    }, {
        name: "Volume +1dB",
        payload: "MVLUP1",
        description: "sets Volume Level Up 1dB Step"
    }, {
        name: "Volume -1dB",
        payload: "MVLDOWN1",
        description: "sets Volume Level Down 1dB Step"
    }, {
        name: "Query Master Volume",
        payload: "MVLQSTN",
        description: "gets the Volume Level"
    },
    // input
    {
        name: "CBL/SAT",
        payload: "SLI01",
        description: "sets CBL/SAT"
    }, {
        name: "GAME",
        payload: "SLI02",
        description: "sets GAME"
    }, {
        name: "AUX",
        payload: "SLI03",
        description: "sets AUX"
    }, {
        name: "BD/DVD",
        payload: "SLI10",
        description: "sets BD/DVD"
    }, {
        name: "STRM BOX",
        payload: "SLI11",
        description: "sets STRM BOX"
    }, {
        name: "TV",
        payload: "SLI12",
        description: "sets TV"
    }, {
        name: "PHONO",
        payload: "SLI22",
        description: "sets PHONO"
    }, {
        name: "CD",
        payload: "SLI23",
        description: "sets CD"
    }, {
        name: "FM",
        payload: "SLI24",
        description: "sets FM"
    }, {
        name: "AM",
        payload: "SLI25",
        description: "sets AM"
    }, {
        name: "TUNER",
        payload: "SLI26",
        description: "sets TUNER"
    }, {
        name: "USB (Front)",
        payload: "SLI29",
        description: "sets USB(Front)"
    }, {
        name: "NET",
        payload: "SLI2B",
        description: "sets NET"
    }, {
        name: "USB (Toggle)",
        payload: "SLI2C",
        description: "sets USB(toggle)"
    }, {
        name: "Bluetooth",
        payload: "SLI2E",
        description: "sets BT AUDIO"
    }, {
        name: "HDMI 5",
        payload: "SLI55",
        description: "sets HDMI 5"
    }, {
        name: "HDMI 6",
        payload: "SLI56",
        description: "sets HDMI 6"
    }, {
        name: "HDMI 7",
        payload: "SLI57",
        description: "sets HDMI 7"
    }, {
        name: "Input +",
        payload: "SLIUP",
        description: "sets Selector Position Wrap-Around Up"
    }, {
        name: "Input -",
        payload: "SLIDOWN",
        description: "sets Selector Position Wrap-Around Down"
    }, {
        name: "Query Input",
        payload: "SLISQSTN",
        description: "gets The Selector Position"
    },
    // Network/USB/Navigation
    {
        name: "Key: Play",
        payload: "PLAY",
        description: "PLAY KEY"
    }, {
        name: "Key: Stop",
        payload: "STOP",
        description: "STOP KEY"
    }, {
        name: "Key: Pause",
        payload: "PAUSE",
        description: "PAUSE KEY"
    }, {
        name: "Key: Play/Pause",
        payload: "P/P",
        description: "PLAY/PAUSE KEY"
    }, {
        name: "Key: Track Up",
        payload: "TRUP",
        description: "TRACK UP KEY"
    }, {
        name: "Key: Track Down",
        payload: "TRDOWN",
        description: "TRACK DOWN KEY"
    }, {
        name: "Key: FF",
        payload: "FF",
        description: "FF KEY (CONTINUOUS*)"
    }, {
        name: "Key: REW",
        payload: "REW",
        description: "REW KEY (CONTINUOUS*)"
    }, {
        name: "Key: RIGHT",
        payload: "RIGHT",
        description: "Right Key"
    }, {
        name: "Key: LEFT",
        payload: "LEFT",
        description: "LEFT Key"
    }, {
        name: "Key: UP",
        payload: "UP",
        description: "UP Key"
    }, {
        name: "Key: DOWN",
        payload: "DOWN",
        description: "DOWN Key"
    }, {
        name: "Key: SELECT",
        payload: "SELECT",
        description: "SELECT Key"
    }, {
        name: "Key: 0",
        payload: "0",
        description: "0 Key"
    }, {
        name: "Key: 1",
        payload: "1",
        description: "1 Key"
    }, {
        name: "Key: 2",
        payload: "2",
        description: "2 Key"
    }, {
        name: "Key: 3",
        payload: "3",
        description: "3 Key"
    }, {
        name: "Key: 4",
        payload: "4",
        description: "4 Key"
    }, {
        name: "Key: 5",
        payload: "5",
        description: "5 Key"
    }, {
        name: "Key: 6",
        payload: "6",
        description: "6 Key"
    }, {
        name: "Key: 7",
        payload: "7",
        description: "7 Key"
    }, {
        name: "Key: 8",
        payload: "8",
        description: "8 Key"
    }, {
        name: "Key: 9",
        payload: "9",
        description: "9 Key"
    }, {
        name: "Key: RETURN",
        payload: "RETURN",
        description: "RETURN KEY"
    }, {
        name: "Key: MENU",
        payload: "MENU",
        description: "MENU KEY"
    }, {
        name: "Key: Channel Up (iRadio)",
        payload: "CHUP",
        description: "CH UP(for iRadio)"
    }, {
        name: "Key: Channle Down (iRadio)",
        payload: "CHDN",
        description: "CH DOWN(for iRadio)"
    }, {
        name: "Key: ENTER",
        payload: "ENTER",
        description: "Enter Key"
    }, {
        name: "Key: EXIT",
        payload: "EXIT",
        description: "Exit Key"
    }, {
        name: "Key: HOME",
        payload: "HOME",
        description: "Home Key"
    }, {
        name: "Key: QUICK",
        payload: "QUICK",
        description: "Quick Setup Key/Quick Menu Key/AV Adjust Key"
    }
];