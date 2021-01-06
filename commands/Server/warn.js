module.exports = ({
name: "warn",
code: `
$setUserVar[warns;$sum[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]
:white_check_mark: **Warned** \`$userTag[$mentioned[1]]\` **for** \`$noMentionMessage\`
$onlyIf[$noMentionMessage!=;:no_entry: You need to provide a reason!]
$onlyIf[$mentioned[1]!=;:no_entry: You need to mention a User!]
$onlyPerms[kick;:no_entry: You need \`kick\` Permissions!]
    `
    });