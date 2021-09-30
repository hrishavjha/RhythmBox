module.exports = {
	name: "pause",
	aliases: [],
	utilisation: "{prefix}pause",
	voiceChannel: true,

	execute(client, message) {
		const queue = player.getQueue(message.guild.id);

		if (!queue)
			return message.channel.send(
				`❌ ${message.author} no music currently playing.`
			);

		const success = queue.setPaused(true);

		return message.channel.send(
			success
				? `✅ Current music ${queue.current.title} paused.`
				: `❌ ${message.author} something went wrong.`
		);
	},
};
