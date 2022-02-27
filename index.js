"use strict";

const Client = require("./lib/Client");

function Martian(token, options) {
    return new Client(token, options);
}

Martian.AutocompleteInteraction = require("./lib/structures/AutocompleteInteraction");
Martian.Base = require("./lib/structures/Base");
Martian.Bucket = require("./lib/util/Bucket");
Martian.Call = require("./lib/structures/Call");
Martian.CategoryChannel = require("./lib/structures/CategoryChannel");
Martian.Channel = require("./lib/structures/Channel");
Martian.CommandInteraction = require("./lib/structures/CommandInteraction");
Martian.ComponentInteraction = require("./lib/structures/ComponentInteraction");
Martian.Client = Client;
Martian.Collection = require("./lib/util/Collection");
Martian.Command = require("./lib/command/Command");
Martian.CommandClient = require("./lib/command/CommandClient");
Martian.Constants = require("./lib/Constants");
Martian.DiscordHTTPError = require("./lib/errors/DiscordHTTPError");
Martian.DiscordRESTError = require("./lib/errors/DiscordRESTError");
Martian.ExtendedUser = require("./lib/structures/ExtendedUser");
Martian.GroupChannel = require("./lib/structures/GroupChannel");
Martian.Guild = require("./lib/structures/Guild");
Martian.GuildChannel = require("./lib/structures/GuildChannel");
Martian.GuildIntegration = require("./lib/structures/GuildIntegration");
Martian.GuildPreview = require("./lib/structures/GuildPreview");
Martian.GuildTemplate = require("./lib/structures/GuildTemplate");
Martian.Interaction = require("./lib/structures/Interaction");
Martian.Invite = require("./lib/structures/Invite");
Martian.Member = require("./lib/structures/Member");
Martian.Message = require("./lib/structures/Message");
Martian.NewsChannel = require("./lib/structures/NewsChannel");
Martian.NewsThreadChannel = require("./lib/structures/NewsThreadChannel");
Martian.Permission = require("./lib/structures/Permission");
Martian.PermissionOverwrite = require("./lib/structures/PermissionOverwrite");
Martian.PingInteraction = require("./lib/structures/PingInteraction");
Martian.PrivateChannel = require("./lib/structures/PrivateChannel");
Martian.PrivateThreadChannel = require("./lib/structures/PrivateThreadChannel");
Martian.PublicThreadChannel = require("./lib/structures/PublicThreadChannel");
Martian.Relationship = require("./lib/structures/Relationship");
Martian.RequestHandler = require("./lib/rest/RequestHandler");
Martian.Role = require("./lib/structures/Role");
Martian.SequentialBucket = require("./lib/util/SequentialBucket");
Martian.Shard = require("./lib/gateway/Shard");
Martian.SharedStream = require("./lib/voice/SharedStream");
Martian.StageChannel = require("./lib/structures/StageChannel");
Martian.StageInstance = require("./lib/structures/StageInstance");
Martian.StoreChannel = require("./lib/structures/StoreChannel");
Martian.TextChannel = require("./lib/structures/TextChannel");
Martian.ThreadChannel = require("./lib/structures/ThreadChannel");
Martian.ThreadMember = require("./lib/structures/ThreadMember");
Martian.UnavailableGuild = require("./lib/structures/UnavailableGuild");
Martian.UnknownInteraction = require("./lib/structures/UnknownInteraction");
Martian.User = require("./lib/structures/User");
Martian.VERSION = require("./package.json").version;
Martian.VoiceChannel = require("./lib/structures/VoiceChannel");
Martian.VoiceConnection = require("./lib/voice/VoiceConnection");
Martian.VoiceConnectionManager = require("./lib/voice/VoiceConnectionManager");
Martian.VoiceState = require("./lib/structures/VoiceState");

module.exports = Martian;
