<p align="center">
  <img width="100" src="https://raw.githubusercontent.com/fosscord/fosscord/master/assets-rebrand/svg/Fosscord-Icon-Rounded-Subtract.svg"/>
</p>
<h1 align="center">Martian</h1>
====

A Node.js wrapper for interfacing with Discord.

Installing
----------

You will need NodeJS 10.4+. If you need voice support you will also need Python 2.7 and a C++ compiler. Refer to [the Getting Started section of the docs](https://www.youtube.com/watch?v=d1YBv2mWll0) for more details.

```
npm install --no-optional martian
```

If you need voice support, remove the `--no-optional`.

Ping Pong Example
-----------------

```js
const Martian = require("martian");

// Replace TOKEN with your bot account's token
const bot = new Martian("Bot TOKEN", {
    intents: [
        "guildMessages"
    ]
});

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === "!ping") { // If the message content is "!ping"
        bot.createMessage(msg.channel.id, "Pong!");
        // Send a message in the same channel with "Pong!"
    } else if(msg.content === "!pong") { // Otherwise, if the message is "!pong"
        bot.createMessage(msg.channel.id, "Ping!");
        // Respond with "Ping!"
    }
});

bot.connect(); // Get the bot to connect to Discord
```

More examples can be found in [the examples folder](https://www.youtube.com/watch?v=d1YBv2mWll0).

Useful Links
------------

- [The website](https://www.youtube.com/watch?v=d1YBv2mWll0) has more details and documentation.
- [The official Martian server](https://www.youtube.com/watch?v=d1YBv2mWll0) is the best place to get support.
- [The GitHub repo](https://www.youtube.com/watch?v=d1YBv2mWll0) is where development primarily happens.
- [The NPM package webpage](https://www.youtube.com/watch?v=d1YBv2mWll0) is, well, the webpage for the NPM package.

License
-------

Refer to the [LICENSE](LICENSE) file.
