module.exports = {
	name: "back",
	aliases: ["prev"],
	utilisation: "{prefix}back",
	voiceChannel: true,

	async execute(client, message) {
		const queue = player.getQueue(message.guild.id);

		if (!queue || !queue.playing)
			return message.channel.send(
				`❌ ${message.author} no music currently playing.`
			);

		if (!queue.previousTracks[1])
			return message.channel.send(
				`❌ ${message.author} there was no music played before.`
			);

		await queue.back();

		message.channel.send(`✅ Playing the **previous** track.`);
	},
};
