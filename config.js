const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'd0508fea44',
}

// Other
global.owner = ['919895823783', '687718888', '687958182', '919072716363']
global.premium = ['919895823783', '919072716373']
global.packname = 'SHARU'
global.author = 'MITNICK🦜'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿','#']
global.sp = '🌼'
global.mess = {
    success: '⚡𝕾𝖚𝖈𝖈𝖊𝖘𝖘 𝖊𝖓𝖏𝖔𝖞',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Owner Bots Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number User Special Features',
    wait: '🧑🏻‍🦯𝕷𝖔𝖆𝖉𝖎𝖓𝖌 𝖊𝖓𝖏𝖔𝖞...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every Hour 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 444
}
global.thumb = fs.readFileSync('./lib/mitnick.jpg')
global.visoka = { url: 'https://telegra.ph/file/e6f6b8ee6289a8f94894b.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
