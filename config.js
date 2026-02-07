module.exports = {
    client: {
        token: 'process.env.DISCORD_TOKEN', // ← Your bot token (.env IS RECOMMENDED)
        id: 'process.env.CLIENT_ID' // ← Your bot ID
    },
    modmail: {
        guildId: '1461381254229262408', // ← Your server ID
        categoryId: '1461825003539402954', // ← The modmail category ID
        staffRoles: ['1463930730332819477'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: 'process.env.WEBHOOK' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};
