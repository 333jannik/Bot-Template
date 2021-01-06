module.exports = ({
name: "checkwarns",
aliases: ['warns'],
code: `
\`$userTag[$findUser[$message]]\` **got** \`$getUserVar[warns;$findUser[$message]]\` **Warns**
    `
    });