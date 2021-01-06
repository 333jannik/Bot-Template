module.exports = ({
    name: "meme",
    code: `
    $color[$getServerVar[embedcolor]]
$title[**Meme** \`#$random[1;500]\`]
$image[https://ctk-api.herokuapp.com/meme/$random[1;500]]

    `
    });