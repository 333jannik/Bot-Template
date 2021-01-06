module.exports = ({
name: "nuke",
code: `
$djsEval[
d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(d.message.channel.position)
 c.send(' :white_check_mark: **Channel got Nuked by <@$authorID>**')

 })
 .catch(() => d.message.channel.send(':no_entry:  I dont have the right Permission'))
]
$onlyPerms[managechannels;:no_entry: You need \`managechannels\` Permissions!]

`
});