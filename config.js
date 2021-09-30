module.exports = {
	app: {
		px: "-",
		token: process.env.TOKEN,
		playing: "-play -help",
	},

	opt: {
		DJ: {
			enabled: false,
			roleName: "DJ",
			commands: [
				"back",
				"clear",
				"filter",
				"loop",
				"pause",
				"resume",
				"seek",
				"shuffle",
				"skip",
				"stop",
				"volume",
			],
		},
		maxVol: 100,
		discordPlayer: {},
	},
};
