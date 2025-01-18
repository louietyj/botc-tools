import { nightorder } from "./nightorder";
import { Override } from "./overrides";

/*
==================================================================

   _____             _ _                      _           _
  / ____|           (_) |               /\   | |         | |
 | (___  _ __   ___  _| | ___ _ __     /  \  | | ___ _ __| |_
  \___ \| '_ \ / _ \| | |/ _ \ '__|   / /\ \ | |/ _ \ '__| __|
  ____) | |_) | (_) | | |  __/ |     / ____ \| |  __/ |  | |_
 |_____/| .__/ \___/|_|_|\___|_|    /_/    \_\_|\___|_|   \__|
        | |
        |_|


This is the list of roles for an Alice in Wonderland-themed "Oops all amnesiacs"
script, by Besbjo. In such a script, every player must figure out their ability.
If you plan on ever playing this script, do not read this file, since it will
spoil the characters and abilities in the script. If you do play the script or
read these roles please don't discuss them with anyone without a clear spoiler
warning.

In the deployed app you can only access this script by knowing the password.

The file exports a list of overrides that are used in overrides.ts.










==================================================================
*/

export const aliceInWonderland: { [key: string]: Override } = {
  cheshirecat: {
    ability:
      `Each night, choose a player.` +
      ` You control what the Storyteller tells them until tomorrow night, then they die.`,
    firstNight: `The Cheshire Cat points to a player. Ask them for a statement or instructions.`,
    otherNights: `The Cheshire Cat points to a player. Ask them for a statement or instructions. The previously chosen player dies.`,
    homebrew: {
      name: "Cheshire Cat",
      roleType: "demon",
      firstNightIndex: nightorder.firstNight("pukka"),
      otherNightsIndex: nightorder.otherNights("pukka"),
    },
  },
  whiterabbit: {
    ability:
      "Each night*, you learn each character type that was late to nominations today.",
    otherNights: "Give each character type that was late to nominations today.",
    homebrew: {
      name: "White Rabbit",
      roleType: "townsfolk",
      otherNightsIndex: nightorder.otherNights("balloonist"),
    },
  },
  queenofhearts: {
    ability:
      `Once per game during the day, publicly choose a player.` +
      ` You learn their alignment, and if they are executed, you refresh this ability.`,
    homebrew: {
      name: "Queen of Hearts",
      roleType: "townsfolk",
      otherNightsIndex: nightorder.otherNights("bountyhunter"),
    },
  },
  lookingglass: {
    ability:
      `On your first night, choose odd or even.` +
      ` Amnesiac questions might receive false answers on those days.`,
    firstNight: "The Looking Glass picks odd or even.",
    homebrew: {
      name: "Looking Glass",
      roleType: "outsider",
      // most similar to Sweetheart
      firstNightIndex: nightorder.firstNight("empath"),
    },
  },
  jabberwock: {
    ability:
      `Each night, choose a player and a statement to be mad about tomorrow,` +
      ` or they might be executed. The statement must rhyme.`,
    nights:
      `The Jabberwock points to a player and is told to give a rhyming statement.` +
      ` Tell the player they should be mad about the statement.`,
    homebrew: {
      name: "Jabberwock",
      roleType: "minion",
      firstNightIndex: nightorder.firstNight("cerenovus"),
      otherNightsIndex: nightorder.otherNights("cerenovus"),
    },
  },
  knaveofhearts: {
    ability:
      `Each night, choose two players. Their abilities are swapped tonight and tomorrow day.` +
      ` If you choose the Cheshire Cat and another Evil player, you may choose to swap permanently.`,
    nights: `The Knave of Hearts points to two players. Mark them swapped for abilities.`,
    homebrew: {
      name: "Knave of Hearts",
      roleType: "minion",
      firstNightIndex: nightorder.firstNight("poisoner"),
      otherNightsIndex: nightorder.otherNights("pithag"),
    },
  },
  tweedledum: {
    ability:
      "On your first night, choose a player. You receive each other's Amnesiac answers (even if dead).",
    firstNight:
      "Tweedledum picks a player. Mark Tweedledum and the player swapped for answers.",
    homebrew: {
      name: "Tweedledum",
      roleType: "outsider",
      firstNightIndex: nightorder.firstNight("butler"),
    },
  },
  dodo: {
    ability: `You do nothing. The Storyteller may tell you nonsense in the night or in response to your Amnesiac questions.`,
    nights: `Maybe give the Dodo nonsense`,
    homebrew: {
      name: "Dodo",
      roleType: "outsider",
      firstNightIndex: nightorder.firstNight("empath"),
      otherNightsIndex: nightorder.otherNights("undertaker") + 1,
    },
  },
  cook: {
    ability:
      `Two opposing players start with DRINK ME and EAT ME.` +
      ` DRINK ME must whisper (even publicly), and is immune to abilities and nominations until dusk.` +
      ` EAT ME must speak publicly and loudly, and has 101 votes until dusk.`,
    firstNight: `Mark two opposing players DRINK ME and EAT ME. Wake them and tell them their restrictions:
    <tab>DRINK ME cannot talk publicly or raise their voice. If nominated, they must whisper their defense.
    <tab>EAT ME must speak publicly and loudly`,
    homebrew: {
      name: "Cook",
      roleType: "townsfolk",
      firstNightIndex: nightorder.firstNight("chef"),
    },
  },
  playingcard: {
    ability:
      "Each night, pick a card. You have the corresponding Townsfolk ability until dusk. ♣TB ♦BMR, ♥S&V, ♠Experimental.",
    nights:
      "The Playing Card picks a card. Give them the corresponding Townsfolk ability.",
    homebrew: {
      name: "Playing Card",
      roleType: "townsfolk",
      firstNightIndex: nightorder.firstNight("philosopher"),
      otherNightsIndex: nightorder.otherNights("philosopher"),
    },
  },
  marchhare: {
    ability:
      "Each night, get a statement. If someone else is mad that it is true the following day, you learn their character that night.",
    firstNight: "Give the March Hare a statement.",
    otherNights:
      "If someone was mad about the March Hare's statement, tell the March Hare their character.",
    homebrew: {
      name: "March Hare",
      roleType: "townsfolk",
      firstNightIndex: nightorder.firstNight("washerwoman"),
      otherNightsIndex: nightorder.otherNights("undertaker"),
    },
  },
  madhatter: {
    ability:
      "Each night, the Storyteller asks you a yes/no question. Each day, you may ask the Storyteller a yes/no question. If you got the question wrong, the Storyteller answers falsely.",
    nights: "Ask the Mad Hatter a yes/no question. Record if correct.",
    homebrew: {
      name: "Mad Hatter",
      roleType: "townsfolk",
      // closest to Savant
      firstNightIndex: nightorder.firstNight("dreamer") - 1,
      otherNightsIndex: nightorder.otherNights("dreamer") - 1,
    },
  },
  dormouse: {
    ability:
      "Each night, pick a number. You learn the closest Good role and Evil role to an ability that many seats away, one of which is correct.",
    nights:
      "The Dormouse picks a number. Give them the closest Good role and Evil role to an ability that many seats away.",
    homebrew: {
      name: "Dormouse",
      roleType: "townsfolk",
      firstNightIndex: nightorder.firstNight("dreamer"),
      otherNightsIndex: nightorder.otherNights("dreamer"),
    },
  },
  walrus: {
    ability:
      "The first ability each player attempts to activate does something helpful.",
    homebrew: {
      name: "Walrus",
      roleType: "townsfolk",
    },
  },
  whitequeen: {
    ability: `Dead players learn that they get their ability "every other day" (ie, with a one-day delay).`,
    homebrew: {
      name: "White Queen",
      roleType: "townsfolk",
    },
  },
  caterpillar: {
    ability:
      `On the first night, look at the Grimoire and choose a Good player:` +
      ` they learn they are smoking with the Caterpillar, and everything they learn is absurd.`,
    firstNight: `Show the Caterpillar the Grimoire (without abilities) and ask them to pick a Good player.
    Tell the player they are smoking with the Caterpillar.`,
    homebrew: {
      name: "Caterpillar",
      roleType: "minion",
      firstNightIndex: nightorder.firstNight("poisoner"),
    },
  },
  humptydumpty: {
    ability:
      "Each night, make a prediction. You die the following night unless it came true. You start knowing to be careful not to fall.",
    firstNight: `Tell Humpty Dumpty to be careful not to fall. Ask for a statement about the future.`,
    otherNights: `Ask Humpty Dumpty for a statement about the future.`,
    homebrew: {
      name: "Humpty Dumpty",
      roleType: "townsfolk",
      firstNightIndex: nightorder.firstNight("fortuneteller"),
      otherNightsIndex: nightorder.otherNights("gambler"),
    },
  },
  mockturtle: {
    ability:
      `You start knowing 3 in-play character names and that you should pretend to be them.` +
      ` Your Amnesiac questions are also answered for every character you are pretending to be.`,
    firstNight:
      "Show the Mock Turtle 3 in-play character names and tell them to pretend to be them.",
    homebrew: {
      name: "Mock Turtle",
      roleType: "townsfolk",
      firstNightIndex: nightorder.firstNight("pixie"),
    },
  },
  aliceduchess: {
    ability:
      "Each day, 3 players may visit you for a party. That night, you learn whether any of them was the Cheshire Cat. Players who sneezed today register falsely to you.",
    otherNights: `The Duchess learns whether any of the players who visited them was the Cheshire Cat (or sneezed).`,
    homebrew: {
      name: "Duchess",
      roleType: "townsfolk",
      otherNightsIndex: nightorder.otherNights("fortuneteller"),
    },
  },
};
