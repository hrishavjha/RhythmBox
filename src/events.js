player.on("error", (queue, error) => {
	console.log(`Error emitted from the queue ${error.message}`);
});

player.on("connectionError", (queue, error) => {
	console.log(`Error emitted from the connection ${error.message}`);
});

player.on("trackStart", (queue, track) => {
	queue.metadata.send(
		`Started playing ${track.title} in **${queue.connection.channel.name}** 🎧`
	);
});

player.on("trackAdd", (queue, track) => {
	queue.metadata.send(`✅ Track ${track.title} added in the queue.`);
});

player.on("botDisconnect", (queue) => {
	queue.metadata.send(
		"❌ I was manually disconnected from the voice channel, clearing queue."
	);
});

player.on("channelEmpty", (queue) => {
	queue.metadata.send(
		"❌ Nobody is in the voice channel, leaving the voice channel."
	);
});

player.on("queueEnd", (queue) => {
	queue.metadata.send("✅ I finished reading the whole queue.");
});
