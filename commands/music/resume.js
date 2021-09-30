module.exports = {
	name: "resume",
	aliases: ["rs"],
	utilisation: "{prefix}resume",
	voiceChannel: true,

	execute(client, message) {
		const queue = player.getQueue(message.guild.id);

		if (!queue)
			return message.channel.send(
				`❌ ${message.author} no music currently playing.`
			);

		const success = queue.setPaused(false);

		return message.channel.send(
			success
				? `✅ Current music ${queue.current.title} resumed`
				: `❌ ${message.author} something went wrong.`
		);
	},
};
