module.exports = {
	name: "shuffle",
	aliases: ["sh"],
	utilisation: "{prefix}shuffle",
	voiceChannel: true,

	async execute(client, message) {
		const queue = player.getQueue(message.guild.id);

		if (!queue || !queue.playing)
			return message.channel.send(
				`❌ ${message.author} no music currently playing.`
			);

		if (!queue.tracks[0])
			return message.channel.send(
				`❌ ${message.author} no music in the queue after the current one.`
			);

		await queue.shuffle();

		return message.channel.send(
			`✅ Queue shuffled **${queue.tracks.length}** song(s).`
		);
	},
};
