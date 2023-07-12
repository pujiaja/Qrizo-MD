.const fg = require('api-dylux');
const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper');

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `*Example:* .tiktok https://vm.tiktok.com/xxxxx`;
  }
  if (!args[0].match(/tiktok/gi)) {
    throw '🐱 Make sure the link is from TikTok';
  }
  let wait = 'Please wait...';

  const arr = [
    { text: "[□□□□□□□□□□] 0%", timeout: 200 },
    { text: "[■□□□□□□□□□] 10%", timeout: 200 },
    { text: "[■■□□□□□□□□] 20%", timeout: 200 },
    { text: "[■■■□□□□□□□] 30%", timeout: 200 },
    { text: "[■■■■□□□□□□] 40%", timeout: 200 },
    { text: "[■■■■■□□□□□] 50%", timeout: 200 },
    { text: "[■■■■■■□□□□] 60%", timeout: 200 },
    { text: "[■■■■■■■□□□] 70%", timeout: 200 },
    { text: "[■■■■■■■■□□] 80%", timeout: 200 },
    { text: "[■■■■■■■■■□] 90%", timeout: 200 },
    { text: "[■■■■■■■■■■] 100%", timeout: 200 },
  ];

  const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });

  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll,
        type: 14,
        editedMessage: {
          conversation: arr[i].text
        }
      }
    }, {});
  }
  let start = new Date();
  try {
    let p = await fg.tiktok(args[0]);
    let te = `🐱 Fetching: *${new Date() - start} ms*`;
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m);
    let wait = 'Please wait...';

  const arr = [
    { text: "[□□□□□□□□□□] 0%", timeout: 200 },
    { text: "[■□□□□□□□□□] 10%", timeout: 200 },
    { text: "[■■□□□□□□□□] 20%", timeout: 200 },
    { text: "[■■■□□□□□□□] 30%", timeout: 200 },
    { text: "[■■■■□□□□□□] 40%", timeout: 200 },
    { text: "[■■■■■□□□□□] 50%", timeout: 200 },
    { text: "[■■■■■■□□□□] 60%", timeout: 200 },
    { text: "[■■■■■■■□□□] 70%", timeout: 200 },
    { text: "[■■■■■■■■□□] 80%", timeout: 200 },
    { text: "[■■■■■■■■■□] 90%", timeout: 200 },
    { text: "[■■■■■■■■■■] 100%", timeout: 200 },
  ];

  const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });

  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll,
        type: 14,
        editedMessage: {
          conversation: arr[i].text
        }
      }
    }, {});
  }
  } catch (error) {
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
      .catch(async _ => await tiktokdlv2(args[0]))
      .catch(async _ => await tiktokdlv3(args[0]));
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
    if (!url) {
      throw '🐱 An error occurred while downloading the video';
    }
    let te = `🐱 Fetching: *${new Date() - start} ms*`;
    conn.sendFile(m.chat, url, 'tiktok.mp4', te, m);
    let wait = 'Please wait...';

  const arr = [
    { text: "[□□□□□□□□□□] 0%", timeout: 200 },
    { text: "[■□□□□□□□□□] 10%", timeout: 200 },
    { text: "[■■□□□□□□□□] 20%", timeout: 200 },
    { text: "[■■■□□□□□□□] 30%", timeout: 200 },
    { text: "[■■■■□□□□□□] 40%", timeout: 200 },
    { text: "[■■■■■□□□□□] 50%", timeout: 200 },
    { text: "[■■■■■■□□□□] 60%", timeout: 200 },
    { text: "[■■■■■■■□□□] 70%", timeout: 200 },
    { text: "[■■■■■■■■□□] 80%", timeout: 200 },
    { text: "[■■■■■■■■■□] 90%", timeout: 200 },
    { text: "[■■■■■■■■■■] 100%", timeout: 200 },
  ];

  const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });

  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll,
        type: 14,
        editedMessage: {
          conversation: arr[i].text
        }
      }
    }, {});
  }
  
handler.help = ['tiktok2'];
handler.tags = ['downloader'];
handler.command = /^(tiktok2|tt2|tiktokdl2|tiktoknowm2)$/i;
handler.limit = true;
handler.group = false;

module.exports = handler;