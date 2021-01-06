module.exports = ({
name: "avatar",
aliases: ['av'],
code: `
$color$getServerVar[embedcolor]]
$author[$userTag[$findUser[$message]];$userAvatar[$findUser[$message]]]
$image[$userAvatar[$findUser[$message];2048]]
    `
    });