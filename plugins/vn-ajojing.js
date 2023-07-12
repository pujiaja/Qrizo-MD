import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${audio.getRandom()}`, "ajojing.m4a", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(audioajojing|Audioajojing|AudioAjojing|AUDIOAJOJING|AudioAjojinG)$/i;
handler.tags = ['tools']
handler.command = new RegExp();

handler.owner = true

export default handler;

const audio = [
	"./vn/ajojing.m4a",
	"./vn/ajojing.m4a",
];