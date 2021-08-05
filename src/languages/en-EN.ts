import { cache } from '../cache'

cache.languages.set('en-EN',
  {
    i18n: {
      disclaimer: 'Please note: translations are provided by the community, and we cannot guarantee their correctness, completeness, or quality',
      cta: 'Do you speak fluent English and want to help us translate? Check out {url}'
    },
    prereqs: {
      errors: {
        masterUser: 'This command is only for the bot owner',
        serverOwner: 'You must be the server owner to run this command',
        musicNoDJ: "You're currently not added as a DJ, ask the one that started streaming to add you with `{command}`"
      }
    },
    commands: {
      common: {
        failedToRun: 'This command failed to run, if you see my owner please give them this error code: `{errorcode}`',
        softFail: 'Something went wrong, try again later',
        attachmentNeeded: 'Please upload an image while using this command',
        notStreaming: "I'm not streaming in this server",
        nsfwDisabled: 'This channel needs to be marked as NSFW before this command can be used',
        cooldown: 'This command is on cooldown, try again later',
        dmDisabled: 'This command cannot be used in DMs',
        permsMissingOwn: "I'm missing the following permissions: `{perms}`",
        permsMissingUser: "You're missing the following permissions: `{perms}`",
        working: 'Working on it...'
      },
      ffrw: {
        notPlaying: 'Not currently playing anything',
        noTime: 'Please enter a time',
        invalidTime: 'The time you entered was invalid',
        cantSeekTrack: "The track that's currently playing cannot be seeked"
      },
      skip: {
        queueEmpty: "There's nothing to play after this, add something to play after this if you want to skip"
      },
      shuffle: {
        done: 'The playlist has been shuffled'
      },
      volume: {
        outOfRange: 'Volume must be a number between 0 and 100',
        done: 'Volume adjusted'
      },
      dice: {
        resultMany: 'You rolled **{result}**\n```{explaination}```',
        resultSingle: 'You rolled **{result}**',
        resultTooLarge: '[result too large to show explaination]',
        badSyntax: 'Please specify how many dice you want to roll like this: `4d6`, `2d12`'
      },
      remove: {
        notANumber: 'Your argument must be a number',
        outOfRange: 'The playlist only has {songs} songs',
        done: 'Removed this song from the playlist'
      },
      play: {
        playlistAdded: 'Playlist {name} has been added',
        noResults: 'No search results found',
        ivPlaylist: 'Your playlist has finished loading',
        trackAdded: 'Your track has been added',
        cantPlay: "I'm unable to play that track: `{message}`",
        cantPlayUnknown: "I'm unable to play that track for unknown reasons",
        addFailed: 'Something went wrong while adding this track, try again later'
      },
      booru: {
        noResults: 'No results found for `{query}`',
        badFormatting: 'Your formatting appears to be wrong',
        siteNotSupported: "I don't have support for {site}, currently I support {supported}"
      },
      joinvoice: {
        errors: {
          notConnected: 'Please join a voice channel and try this command again',
          alreadyStreaming: "I'm already streaming in this server",
          cantConnect: "I can't connect to the channel you're currently in",
          failed: 'Failed to join voice channel, try again?'
        }
      },
      info: {
        guilds: 'Guilds on this shard',
        uptime: 'Uptime',
        shard: 'Current shard'
      },
      invite: {
        done: 'Use the following link to invite me: {invite}',
        private: 'This bot is marked as private, please ask {owner} to invite me to your server'
      },
      newdj: {
        errors: {
          noMentions: 'Please mention who you want to add as a DJ'
        },
        done: 'Added {new, plural, =0 {no new DJs} =1 {one new DJ} other {# new DJs}}, there {total, plural, =0 {are now no DJs} =1 {is now one DJ} other {are now # DJs}}'
      },
      leetspeak: {
        errors: {
          suffixMissing: 'You need to type something to encode your message into l337sp3@K'
        }
      },
      tag: {
        errors: {
          notFound: 'No such tag',
          conflict: 'A tag with that name already exists',
          illegal: "You can't name your tag that",
          notYours: "You don't own that tag, so you can't edit it"
        },
        owner: 'The owner of that tag is {user}',
        created: 'Your tag was created',
        deleted: 'Your tag was deleted',
        edited: 'Your tag was edited'
      },
      twitch: {
        errors: {
          noChannel: 'No channel specified',
          invalidChannel: "{channel} isn't a valid channel"
        },
        offline: "{channel} isn't streaming currently",
        online: '{channel} is currently live at <https://twitch.tv/{channel}>',
        game: 'Game',
        viewers: 'Viewers',
        views: 'Total Views'
      },
      queue: {
        title: 'Current playlist',
        count: 'There {songs, plural, =0 {are no songs} =1 {is one song} other {are # songs}} queued',
        empty: 'There are currently no songs queued, queue something with `{command}`'
      },
      kick: {
        noMentions: "Please provide IDs or mention users you'd like to kick",
        noResults: "Couldn't find those users in the server",
        done: 'Kicked {num} members',
        failed: 'Failed to kick {num} members'
      },
      ban: {
        noMentions: "Please provide IDs or mention users you'd like to ban",
        noResults: "Couldn't find those users in the server",
        done: 'Banned {num} members',
        failed: 'Failed to ban {num} members'
      },
      softban: {
        noMentions: "Please provide IDs or mention users you'd like to softban",
        noResults: "Couldn't find those users in the server",
        done: 'Softbanned {num} members',
        failed: 'Failed to softban {num} members'
      },
      purge: {
        notANumber: 'Your last argument must be a number',
        tooManyOrFew: "You're trying to remove too {num, select, few {few} many {many}} messages",
        noResults: 'I was not able to find any messages for purging that are under two weeks old'
      },
      urbandictionary: {
        errors: {
          noTerm: 'Please enter a search term',
          notFound: "This word is so screwed up, even Urban Dictionary doesn't know it"
        },
        example: 'Example',
        noExample: '[no example provided]'
      },
      xkcd: {
        errors: {
          limit: 'There are only {num} xkcd comics'
        }
      },
      help: {
        header: 'See <https://wildbeast.guide/commands> for a full list of commands',
        title: 'Help for command {cmd}',
        footer: '{botname} - Powered by WildBeast',
        errors: {
          notFound: 'No such command'
        }
      },
      '8ball': {
        prefix: 'The magic 8 ball says: `{response}`',
        choices: [
          'Signs point to yes',
          'Yes',
          'Reply hazy, try again',
          'Without a doubt',
          'My sources say no',
          'As I see it, yes',
          'You may rely on it',
          'Concentrate and ask again',
          'Outlook not so good',
          'It is decidedly so',
          'Better not tell you now',
          'Very doubtful',
          'Yes - definitely',
          'It is certain',
          'Cannot predict now',
          'Most likely',
          'Ask again later',
          'My reply is no',
          'Outlook good',
          "Don't count on it",
          'Who cares?',
          'Never, ever, ever',
          'Possibly',
          'There is a small chance'
        ]
      }
    },
    voice: {
      events: {
        queueEmpty: 'The queue is empty, disconnecting',
        trackBroke: "The track I'm trying to play broke: `{error}`",
        trackStuck: 'Seems the track got stuck, automatically skipping it...',
        nowPlaying: 'Now playing:',
        disconnected: 'I got disconnected from the voice channel, ending playback'
      }
    }
  }
)
