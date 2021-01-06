module.exports = ({
name: "purge",
aliases: ['clear'],
code: `
:white_check_mark: **Deleted** \`$message\` **messages in** <#$channelID>
$clear[$message]

$onlyIf[$noMentionMessage<101;:no_entry: Number cant be __over__ 100]
$onlyIf[$isNumber[$noMentionMessage]==true;:no_entry: Thats not a number!]
$onlyIf[$noMentionMessage!=;:no_entry:  Wrong usage: \`$getGlobalUserVar[prefix]purge <number>\`]
$onlyPerms[managemessages;:no_entry: You need __manage messages__ permissions]

    `
    });