const { Events } = require('discord.js');

module.exports = {
  name: Events.GuildMemberAdd,
  execute(guildMember, client) {
    console.log(`Guild member has arrived. Parameters: client: ${guildMember} , member: ${guildMember.user}, guild= ${guildMember.guild_id} ${client.user.tag}`);

    const guildResponseHandle = (event, myself, _member, guild) => {
      const object = {
        channel_id: `${guild.system_channel_id}`,
        content: `Hello <@${_member.id}> (${_member.username}), welcome to ${guild.name} !
  Make yourself acquainted with the rules below, and use the \`/role\` command in the <#${commandChannel_id}> channel to assign yourself a role.`,
        embed: {
          title: 'Rules',
          description: 'Make sure to get acquainted with these first !',
          color: 14949522,
          timestamp: `${new Date().toISOString()}`,
          footer: {
            icon_url: myself.avatar_url,
            text: `Hosted by Autocode, developed by ${result.discord.dev.username}#${result.discord.dev.discriminator}`,
          },
          thumbnail: {
            url: `${guild.icon_url}`,
          },
          author: {
            name: myself.username,
            icon_url: myself.avatar_url,
          },
          fields: [
            {
              name: '1:',
              value:
                'Keep it civil. If you have gripes with someone, contact one of the mods.',
            },
            {
              name: '2:',
              value:
                'This server is +18 only. Any minors will be PERMANENTLY banned with no warning.',
            },
            {
              name: '3:',
              value:
                'Any content considered illegal or harmful will be deleted and may result in a ban.',
            },
            {
              name: '4:',
              value:
                "There are multiple NSFW tiers, containing various types of extreme content. If you're not sure what any of these contain, feel free to contact a moderator to inquire about it.",
            },
            {
              name: '5:',
              value: 'Have fun !',
            },
          ],
        },
      };
      return object;
    };
    return null;
  },
};

/*module.exports = async (event, context) => {
  const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

  const commandChannel_id = '574221264722329631';

  let result = {discord: {}};

  const _event = event;

  console.log(
    `Running [Discord → Returns the guild object for the given id]...`
  );
  result.discord.guild = await lib.discord.guilds['@0.1.0'].retrieve({
    guild_id: `${_event.guild_id}`,
    with_counts: false,
  });

  console.log(`Running [Discord → Get a channel by ID]...`);
  result.discord.channel = await lib.discord.channels['@0.1.1'].retrieve({
    channel_id: `${commandChannel_id}`,
  });

  console.log(
    `Running [Discord → Returns a user object for a given user ID]...`
  );
  result.discord.dev = await lib.discord.users['@0.1.1'].retrieve({
    user_id: `103558535157157888`,
  });

  console.log(
    `Running [Discord → Returns a user object for a given user ID]...`
  );
  result.discord.self = await lib.discord.users['@0.1.1'].retrieve({
    user_id: `395617887148179457`,
  });

  const _guild = result.discord.guild;

  const _commandChannel = result.discord.channel;

  const myself = result.discord.self;

  const dev = result.discord.dev;

  const _member = _event.user;

  const guildResponseHandle = (event, myself, _member, guild) => {
    const object = {
      channel_id: `${guild.system_channel_id}`,
      content: `Hello <@${_member.id}> (${_member.username}#${_member.discriminator}), welcome to ${guild.name} !
  Make yourself acquainted with the rules below, and use the \`/role\` command in the <#${commandChannel_id}> channel to assign yourself a role.`,
      embed: {
        title: 'Rules',
        description: 'Make sure to get acquainted with these first !',
        color: 14949522,
        timestamp: `${new Date().toISOString()}`,
        footer: {
          icon_url: myself.avatar_url,
          text: `Hosted by Autocode, developed by ${result.discord.dev.username}#${result.discord.dev.discriminator}`,
        },
        thumbnail: {
          url: `${guild.icon_url}`,
        },
        author: {
          name: myself.username,
          icon_url: myself.avatar_url,
        },
        fields: [
          {
            name: '1:',
            value:
              'Keep it civil. If you have gripes with someone, contact one of the mods.',
          },
          {
            name: '2:',
            value:
              'This server is +18 only. Any minors will be PERMANENTLY banned with no warning.',
          },
          {
            name: '3:',
            value:
              'Any content considered illegal or harmful will be deleted and may result in a ban.',
          },
          {
            name: '4:',
            value:
              'Politics, Youtube drama or any sort of topic such as these has its dedicated channel, <#304717800117764096> . Keep your behavior civil as well, this is a place for discussion and seeing it turned into a bloodsports channel will result in its deletion.',
          },
          {
            name: '5:',
            value:
              "There are multiple NSFW tiers, containing various types of extreme content. If you're not sure what any of these contain, feel free to contact a moderator to inquire about it.",
          },
          {
            name: '6:',
            value: 'Have fun !',
          },
        ],
      },
    };
    return object;
  };

  const guildResponse = guildResponseHandle(
    context,
    myself,
    event.user,
    _guild
  );

  return await lib.discord.channels.messages.create(guildResponse);

  //return await lib.discord.channels.messages.create(messageResponse);
};
*/