const dbd = require("dbd.js")
 
// MAIN

const bot = new dbd.Bot({
token:process.env.token,        // GO TO YOUR ".env" FILE AND PUT YOUR TOKEN IN THERE
prefix: "$getServerVar[prefix]"
})


// VARIABLES


bot.variables({
    prefix: "!"  // YOU CAN CHANGE YOUR DEFAULT PREFIX TO WHATEVER YOU WANT
  });
 
bot.onMessage()
 



// COMMAND HANDLER

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
code: command.code
})
} 
}