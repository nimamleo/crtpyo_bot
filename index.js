const { Telegraf } = require("telegraf");
const { Data } = require("./values");
const { default: axios } = require("axios");

require("dotenv").config();

const bot = new Telegraf(process.env.API);

bot.command("crypto", (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "please select one of these cyptos", {
        reply_to_message_id: ctx.message.message_id,
        reply_markup: {
            inline_keyboard: Data.mainmenu,
        },
    });
});

bot.action("list", (ctx) => {
    ctx.answerCbQuery();
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, "please select one of these cyptos", {
        reply_markup: {
            inline_keyboard: Data.submenu,
        },
    });
});
bot.action("mainmenu", (ctx) => {
    ctx.answerCbQuery();
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, "please select one of these cyptos", {
        reply_markup: {
            inline_keyboard: Data.mainmenu,
        },
    });
});
bot.action(["BTC", "ETH", "USDT", "BUSD"], async (ctx) => {
    try {
        const url = `https://min-api.cryptocompare.com/data/price?fsym=${ctx.match[0]}&tsyms=IRR&api_key=${process.env.API2}`;
        const data = await axios.get(url).then((res) => res.data);
        ctx.reply(`${Object.keys(data)[0]} : ${Object.values(data)[0]}`);
    } catch (err) {
        ctx.reply(err.message);
    }
    ctx.answerCbQuery();
});

bot.launch();
