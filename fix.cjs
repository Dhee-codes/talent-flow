const fs = require('fs');
let content = fs.readFileSync('src/components/security/ThemeSettings.tsx', 'utf8');

let start = content.indexOf('<svg');
let end = content.indexOf('</svg>');

if (start !== -1 && end !== -1) {
  content = content.substring(0, start) + '<img src="/theme-preview.svg" alt="Theme Preview" className="w-[236px] h-auto object-contain" />' + content.substring(end + 6);
  fs.writeFileSync('src/components/security/ThemeSettings.tsx', content, 'utf8');
  console.log("Replaced massive SVG with img tag.");
} else {
  console.log("SVG tag not found.");
}
