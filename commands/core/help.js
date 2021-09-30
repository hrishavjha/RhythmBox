const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
	aliases: ["h"],
	showHelp: false,
	utilisation: "{prefix}help",

	execute(client, message, args) {
		const embed = new MessageEmbed();

		embed.setColor("#E0B0FF");
		embed.setAuthor(
			client.user.username,
			client.user.displayAvatarURL({ size: 1024, dynamic: true })
		);

		const commands = client.commands.filter((x) => x.showHelp !== false);

		embed.setDescription(
			"These are the list of commands available as of now, working to add some more. Enjoy listening"
		);
		embed.addField(
			`Total Commands - ${commands.size}`,
			commands
				.map(
					(x) =>
						`\`${x.name}${
							x.aliases[0] ? ` (${x.aliases.map((y) => y).join(", ")})\`` : "`"
						}`
				)
				.join(" | ")
		);

		embed.setTimestamp();
		embed.setFooter(
			"Enjoy listening",
			message.author.avatarURL({ dynamic: true })
		);

		message.channel.send({ embeds: [embed] });
	},
};
