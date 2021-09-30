module.exports = {
	name: "disconnect",
	aliases: ["dc"],
	utilisation: "{prefix}disconnect",
	voiceChannel: true,

	execute(client, message) {
		const queue = player.getQueue(message.guild.id);

		if (!queue || !queue.playing)
			return message.channel.send(
				`❌ ${message.author} no music currently playing.`
			);

		queue.destroy();

		message.channel.send(
			`✅ Music stopped into this server, see you next time.`
		);
	},
};
