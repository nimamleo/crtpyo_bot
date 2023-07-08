exports.Data = {
    mainmenu: [
        [{ text: "list", callback_data: "list" }],
        [{ text: "website", url: "https://www.cryptocompare.com" }],
    ],
    submenu: [
        [
            { text: "BTC", callback_data: "BTC" },
            { text: "ETH", callback_data: "ETH" },
        ],
        [
            { text: "USDT", callback_data: "USDT" },
            { text: "BUSD", callback_data: "BUSD" },
        ],
        [{ text: "main menu", callback_data: "mainmenu" }],
    ],
    
};
