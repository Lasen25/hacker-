javascript

const terminal =

document.getElementByld("terminal");

const lines = [

"Connecting...",

"Bypassing firewall...",

"Access granted.",

"Downloading files...",

"Done!"

async function typeLines() { for (let line of lines) {

const div =

document.createElement("div");

terminal.appendChild(div); for (let i = 0; i < line.length; i++) {

div.textContent += line[i];

await new Promise(r => setTimeout(r,

40));

await new Promise(r => setTimeout(r, 400));

typeLines();
