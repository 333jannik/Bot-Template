module.exports = ({
name: "unban",
code: `
$unban[$findUser[$message]]
:white_check_mark: **Unbanned** \`$userTag[$findUser[$message]]\`
$onlyIf[$isBanned[$findUser[$message]]==true;:no_entry: User is not Banned]
$onlyIf[$findUser[$message]!=$authorID;:no_entry: You need to mention a User]
$onlyPerms[ban;:no_entry: You need \`ban\` Permissions!]

    `
    });