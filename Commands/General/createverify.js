const {EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder, CommandInteraction, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('createverify')
    .setDescription('Đặt kênh xác minh của bạn')
    .addChannelOption(option =>
        option.setName('channel')
        .setDescription('Gửi xác minh nhúng vào kênh này')
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');
        const verifyEmbed = new EmbedBuilder()
        .setTitle("Xác minh")
        .setDescription('Nhấp vào nút để xác minh tài khoản của bạn và có quyền truy cập vào các kênh.')
        .setColor(0x5fb041)
        let sendChannel = channel.send({
            embeds: ([verifyEmbed]),
            components: [
                new ActionRowBuilder().setComponents(
                    new ButtonBuilder().setCustomId('verify').setLabel('Verify').setStyle(ButtonStyle.Success),
                ),
            ],
        });
        if (!sendChannel) {
            return interaction.reply({content: 'There was an error! Try again later.', ephemeral: true});
        } else {
            return interaction.reply({content: 'Verification channel was succesfully set!', ephemeral: true});
        }
    },
};