import {readFileSync, mkdtempSync, writeFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
import assert from 'node:assert/strict';
const version=process.argv[2]||'08';
assert.match(version,/^\d{2}$/);
const root=readFileSync('site/index.html','utf8');
assert.equal(root,readFileSync(`site/t/${version}/index.html`,'utf8'),'Latest must mirror immutable edition');
assert(root.includes(`Research Edition ${version}`));
assert(readFileSync('site/t/index.html','utf8').includes(`href="./${version}/"`));
assert(!/<(?:script|link)[^>]+(?:src|href)="\.\/assets\//.test(root),'Release must be self-contained');
const ids=[...root.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size,'No duplicate IDs');
for(const id of ['cityTrack','theoryTrack','atlas','timeline','themeToggle','sceneArt','three-source','sceneFallback','cityCanvas',...(version==='06'?['homeArt','commonsArt','scoreMidi','scoreButton','cameraToggle','supportResearch','contributionLink']:[]),...(['07','08'].includes(version)?['scoreSamples','scoreButton','podcastButton','episodeList']:[]),...(version==='08'?['donateDialog','networkOptions','walletAddress','walletCopy','qr-sol','qr-eth','qr-btc','qr-trx']:[])])assert(ids.includes(id),id);
const script=root.match(/<script type="module" id="release-script">([\s\S]*?)<\/script>/)?.[1];assert(script);
const temp=mkdtempSync(join(tmpdir(),'zistshahr-check-'));
try{const file=join(temp,'release.mjs');writeFileSync(file,script);const r=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});assert.equal(r.status,0,r.stderr)}finally{rmSync(temp,{recursive:true})}
console.log(`Edition ${version}: mirror, archive entry, inline assets, unique IDs, required controls and JavaScript syntax passed.`);
