module.exports = {
    name: "moveall",
    description: "Move everyone from a channel to another",
    usage: "<categoryA> <channelNumberA> <categoryB> <channelNumberB>",
    execute(message, args, {}, {}, client) {
        let inCatA = args[0], inCatB = args[2];
        let inNumA = args[1] - 1, inNumB = args[3] - 1;

        const categoryDa = message.guild.channels.cache.filter(x => x.type === "voice" && x.parent.name.toLowerCase().includes(inCatA));
        let channelsDa = categoryDa.map(e => client.channels.resolve(e));

        const categoryA = message.guild.channels.cache.filter(x => x.type === "voice" && x.parent.name.toLowerCase().includes(inCatB));
        let channelsA = categoryA.map(e => client.channels.resolve(e));

        channelsDa[inNumA].members.forEach(member => {
            member.voice.setChannel(channelsA[inNumB]);
        });

        message.channel.send({embed: {
            color: "#c41d1d",
            description: "Moved everyone",
            fields: [{
                name: "From",
                value: channelsDa[inNumA].parent.name + " " + channelsDa[inNumA].name
              },
              {
                name: "To",
                value: channelsA[inNumB].parent.name + " " + channelsA[inNumB].name
              },
            ],
            footer: {
                text: "by Pyguz.#0456",
                icon_url: "https://cdn.discordapp.com/avatars/484387014725206016/4113368f74bd7056a02b20b03b2995a3.png"
            }
          }
        });
    }
}