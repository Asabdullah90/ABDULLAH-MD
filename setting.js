const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVB6UjVMWnlYZXR0WllpTmlzdXI5TU4xUXpESnQzZGdUejFqSENXSGlIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkRpemhTNVZLV1VmNDBJakFPQmdzeXNVVUlhREIzOC9xVUNlRzZ0NnBYRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUGJtRStGL2JOQzU0TzVjMVIwTVJkenlVMTI2T05PZHRXNWJNN1hPZVdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHaXN0S294ZTdRWDlzYStKdWtKSWErdXJUM0lXb3BXUWRGYWpHL0sxdkNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMY2hvWC9kT0pzcDE3dDA3OEp3UGZtRkFickttU0NlTkdOOFo0dzUwazA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJmT1BidkFLZW1TeGRyWFRUREZ6UDQyb3pTOTRsWCs3V3lKTmhzamFmbHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNQSVFkZHhZZHNDME5MbEo1SDd5ZmsvR3BlY0c1bW84TDYwVVhiODVWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDcwWXpES2thSzBQTkpvcis3b3pWRU5MMGJiYitSSDRvb1B5YzZVSWpCbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJSQ3lBd1gvbmdFNjByM1RWb29lU3BXWU1YYnhiU2JFMWRaN1J4TVFlUXhPTWFaZzRadWR5WFptRkM2ZzJZWFZJaEl1b1NzWmRvczRsMjdkMDJZRkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg2LCJhZHZTZWNyZXRLZXkiOiJUTGlwaGlKT0dWUjVNRzk5eTdyQzJiUkVmWk81YXpIUlBGUDE2alByN0lJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA0MTk1NjAyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNGQzc2NkY3MUY0QTE3ODBGRUNCRkQ0Q0UyRkIyQjEiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MDAzOTM5N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDQxOTU2MDIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzQ1NkRGNjYwOUM4MTZDMDM3NTZFMTJBNTg5NkE1MiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgwMDM5Mzk3fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkJNOFFNSFBYIiwibWUiOnsiaWQiOiI5MjMwNDE5NTYwMjM6NDRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxOTg5NTE5Nzg0Mzg4NDE6NDRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYjdqdXNERU56OTVOQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzcUdvcFBPNzRJOE9hRUtjYUY5QXNFQkowYkJKMXAzdXJWU1p0SGV6YTN3PSIsImFjY291bnRTaWduYXR1cmUiOiJ2d29Ha0o5a0VpQkxkek5BaUU1ZUlibmR5QjZjNFpKbWNqUDlOS3hDbWxTcW44bEQ4aXBUQzk4T2hYcmFDdmh5OUpYZnlLSzEyUWxhUURxUi9aZTNCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTjZoK21Hcno0WTM4Q2RyLy9tQWoyWTNCMVhqVFVIRDl1R2d1ME9ZdlZ6WmFjTmwzd2pzRzRRKytCSnBJRHF1TTRyekI3dFlDeU5ycW8yQVRIQklOQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxOTg5NTE5Nzg0Mzg4NDE6NDRAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJLaHFLVHp1K0NQRG1oQ25HaGZRTEJBU2RHd1NkYWQ3cTFVbWJSM3MydDgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZ2dGIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4MDAzOTM5MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDNHEifQ==",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ABDULLAH-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KIRA-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ABDULLAH-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923041956023",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







