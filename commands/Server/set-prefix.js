module.exports = ({
name: "set-prefix",
code: `
:white_check_mark: **Prefix got set to** \`$message\`
$setServerVar[prefix;$message]
$onlyIf[$message!=;:no_entry: You need to provide a new Prefix]
$onlyPerms[admin;:no_entry: You need \`admin\` Permissions!]
    `
    });