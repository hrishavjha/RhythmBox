module.exports = {
	name: "skip",
	aliases: ["sk"],
	utilisation: "{prefix}skip",
	voiceChannel: true,

	execute(client, message) {
		const queue = player.getQueue(message.guild.id);

		if (!queue || !queue.playing)
			return message.channel.send(
				`❌ ${message.author} no music currently playing.`
			);

		const success = queue.skip();

		return message.channel.send(
			success
				? `✅ Current music ${queue.current.title} skipped.`
				: `❌ ${message.author} something went wrong.`
		);
	},
};
