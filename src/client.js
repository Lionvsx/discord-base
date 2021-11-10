const { Client, Intents, Options } = require('discord.js');

class client extends Client {
    constructor(homeGuildId) {
        super({
            intents: [
                Intents.FLAGS.GUILDS, 
                Intents.FLAGS.GUILD_MESSAGES, 
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS, 
                Intents.FLAGS.DIRECT_MESSAGES, 
                Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, 
                Intents.FLAGS.GUILD_MEMBERS, 
                Intents.FLAGS.GUILD_BANS, 
                Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, 
                Intents.FLAGS.GUILD_PRESENCES
            ], 
            partials: [
                'MESSAGE', 
                'CHANNEL', 
                'REACTION', 
                'GUILD_MEMBER'
            ], 
            makeCache: Options.cacheWithLimits(Options.defaultMakeCacheSettings),
            autoReconnect: true
        })
        this.homeGuildId = homeGuildId
        this.commands = new Map();
        this.interactions = new Map();
        this.aliases = new Map();
        this.config = new Map();
    }
}

module.exports = new client();