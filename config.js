import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285727882445', 'HengkyQ', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285727882445'
global.packname = 'Qrizo - Md'
global.author = '© HengkyQ🤡'
global.namebot = '​Qrizo - Botz'
global.wm = '© HengkyQ☢️'
global.stickpack = 'QrizoBotz - HengkyQ'
global.stickauth = '© HengkyQ🗿'
// Link Sosmed
global.sig = 'https://www.instagram.com/HengkyQ'
global.sgh = 'https://github.com/HengkyQCode'
global.sgc = 'https://chat.whatsapp.com/IRhyTeTi6u7GmUlklQ8bNe'
// Donasi
global.psaweria = 'https://saweria.co/'
global.ptrakterr = '-'
global.pdana = '085727882445'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'BotzZeck'
global.rose = '-'
global.xyro = 'TZGMZsLJLZ'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "agwBbPcLH3",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
