const { QueueRepeatMode } = require("discord-player");

module.exports = {
	name: "loop",
	aliases: ["lp", "repeat"],
	utilisation: "{prefix}loop <queue>",
	voiceChannel: true,

	execute(client, message, args) {
		const queue = player.getQueue(message.guild.id);

		if (!queue || !queue.playing)
			return message.channel.send(
				`❌ ${message.author} no music currently playing.`
			);

		if (args.join("").toLowerCase() === "queue") {
			if (queue.repeatMode === 1)
				return message.channel.send(
					`❌ ${message.author} you must first disable the current music in the loop mode (${client.config.app.px}loop).`
				);

			const success = queue.setRepeatMode(
				queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF
			);

			return message.channel.send(
				success
					? `🔁 Repeat mode **${
							queue.repeatMode === 0 ? "disabled" : "enabled"
					  }** the whole queue will be repeated endlessly.`
					: `❌ ${message.author} something went wrong.`
			);
		} else {
			if (queue.repeatMode === 2)
				return message.channel.send(
					`❌ ${message.author} you must first disable the current queue in the loop mode (${client.config.app.px}loop queue).`
				);

			const success = queue.setRepeatMode(
				queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF
			);

			return message.channel.send(
				success
					? `🔂 Repeat mode **${
							queue.repeatMode === 0 ? "disabled" : "enabled"
					  }** the current music will be repeated endlessly (you can loop the queue with the <queue> option).`
					: `❌ ${message.author} something went wrong.`
			);
		}
	},
};
