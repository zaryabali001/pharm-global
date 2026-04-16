const fs = require('fs');
const path = require('path');
const productsSrc = fs.readFileSync(path.join(process.cwd(),'app/component/Products.tsx'),'utf8');
const nameRegex = /\{ name: '([^']+)'/g;
const names = [];
let m;
while((m=nameRegex.exec(productsSrc))){ names.push(m[1]); }
const files = fs.readdirSync(path.join(process.cwd(),'public','Global-Pharma'));
const normalize = s => s.toLowerCase().replace(/\s+/g,' ').replace(/\./g,' ').replace(/\+/g,' plus ').replace(/\//g,' ').replace(/[^a-z0-9 ]/g,'').trim();
const fileNorm = new Map(files.map(f => [normalize(f.replace(/\.png$/i,'')), f]));
const exact = [];
const almost = [];
const missing = [];
for(const name of names){
  const key = normalize(name);
  if(fileNorm.has(key)) exact.push([name, fileNorm.get(key)]);
  else {
    let t = name
      .replace(/\s*\/\s*/g, ' + ')
      .replace(/1gm\b/gi, '1 gm')
      .replace(/(\d+)mg\b/gi, '$1')
      .replace(/\bInjection\b/gi, 'Inj')
      .replace(/\bMG\b/gi, 'mg')
      .replace(/\s+/g, ' ')
      .trim();
    t = normalize(t);
    if(fileNorm.has(t)) almost.push([name, fileNorm.get(t)]);
    else missing.push([name, t]);
  }
}
console.log('exact', exact.length);
console.log('almost', almost.length);
console.log('missing', missing.length);
console.log('sample exact', exact.slice(0,20));
console.log('sample almost', almost.slice(0,20));
console.log('sample missing', missing.slice(0,50));
fs.writeFileSync('product-image-mapping.json', JSON.stringify({ exact, almost, missing }, null, 2));
