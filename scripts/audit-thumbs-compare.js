const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/PC/Downloads/healim-clinic/content/column';
const thumbsDir = 'c:/Users/PC/Downloads/healim-clinic/static/thumbnails';
const { columnThumbnailDB } = require('c:/Users/PC/Downloads/healim-clinic/scripts/exact-thumbnail-builder.js');

const cols = fs.readdirSync(baseDir).filter(d => !d.startsWith('_') && fs.statSync(path.join(baseDir, d)).isDirectory());

console.log('Total column dirs:', cols.length);
let mismatchCount = 0;
cols.forEach(slug => {
  const mdFile = path.join(baseDir, slug, 'index.md');
  const md = fs.readFileSync(mdFile, 'utf8');
  const titleMatch = md.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : '';
  const dateMatch = md.match(/date:\s*([^\r\n]+)/);
  const dateStr = dateMatch ? dateMatch[1] : '';
  
  const inDB = slug in columnThumbnailDB;
  const dbData = columnThumbnailDB[slug];
  const dbTitle = dbData ? dbData.title : 'NOT IN DB';
  
  const svgExists = fs.existsSync(path.join(thumbsDir, slug + '.svg'));
  const pngExists = fs.existsSync(path.join(thumbsDir, slug + '.png'));
  
  let svgTitle = '';
  if (svgExists) {
    const svg = fs.readFileSync(path.join(thumbsDir, slug + '.svg'), 'utf8');
    const svgMatch = svg.match(/<g transform="translate\(90, 235\)">\s*<text[^>]*>([\s\S]*?)<\/text>/);
    if (svgMatch) svgTitle = svgMatch[1].trim();
  }
  
  console.log(`\n[${slug}]`);
  console.log(`  Date: ${dateStr}`);
  console.log(`  MD Title:  ${title}`);
  console.log(`  DB Title:  ${dbTitle}`);
  console.log(`  SVG Title: ${svgTitle}`);
  console.log(`  Files: svg=${svgExists}, png=${pngExists}`);
});
