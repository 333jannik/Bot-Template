module.exports = ({
name: "help",
code: `
$color[$getServerVar[embedcolor]]
$title[Commands]
$addField[:hammer: __Server__;\`$getServerVar[prefix]help-server\`;yes]
$addField[:information_source: __Information__;\`$getServerVar[prefix]help-information\`;yes]
$addField[:partying_face: __Fun__;\`$getServerVar[prefix]help-fun\`;yes]
    `
    });