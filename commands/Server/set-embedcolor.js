module.exports = ({
name: "set-embedcolor",
code: `
:white_check_mark: **Embed color set to** \`$message\`
$setServerVar[embedcolor;$message]
$onlyIf[$isValidHex[$message]==true;:no_entry: \`$message\` Is not a valid Hex Color]
$onlyIf[$message!=;:no_entry: You need to provide a valid Hex]
$onlyPerms[admin;:no_entry: You need \`admin\` Permissions!]

    `
    });