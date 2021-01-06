module.exports = ({
name: "kick",
code: `
$kick[$mentioned[1];$noMentionMessage]
:white_check_mark: **Kicked** \`$userTag[$mentioned[1]]\` **for** \`$noMentionMessage\`
$onlyIf[$noMentionMessage!=;:no_entry: You need to provide a reason!]
$onlyIf[$mentioned[1]!=;:no_entry: You need to Mention someone!]
$onlyPerms[kick;:no_entry: You need \`kick\` Permissions!]
    `
    });