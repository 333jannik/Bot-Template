module.exports = ({
name: "ban",
code: `
$ban[$mentioned[1];$noMentionMessage]
:white_check_mark: **Banned** \`$userTag[$mentioned[1]]\` **for** \`$noMentionMessage\`
$onlyIf[$noMentionMessage!=;:no_entry: You need to provide a reason!]
$onlyIf[$mentioned[1]!=;:no_entry: You need to Mention someone!]
$onlyPerms[ban;:no_entry: You need \`ban\` Permissions!]
    `
    });