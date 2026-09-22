const fs = require('fs');
const path = require('path');
const { convertMarkdownToTistoryHTML } = require('c:/Users/PC/Downloads/healim-clinic/scripts/test-converter.js');

const md = fs.readFileSync('c:/Users/PC/Downloads/healim-clinic/content/column/de-quervain-wrist-tenosynovitis/index.md', 'utf8');
const res = convertMarkdownToTistoryHTML(md, 'de-quervain-wrist-tenosynovitis');

const match = res.html.match(/src="data:image\/png;base64,([^"]+)"/);
if (match) {
  const buf = Buffer.from(match[1], 'base64');
  console.log('Embedded Base64 PNG size:', buf.length);
  const outPath = path.join(__dirname, 'test-embedded-thumb.png');
  fs.writeFileSync(outPath, buf);
  console.log('Saved test-embedded-thumb.png to:', outPath);
} else {
  console.log('No base64 image found');
}
