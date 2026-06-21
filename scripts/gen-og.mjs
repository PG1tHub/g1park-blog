// 브랜드 에셋 생성: OG 공유 이미지 + favicon PNG들 (sharp로 SVG→PNG 래스터화)
// 실행: node scripts/gen-og.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const ACCENT = '#2337ff';

// --- OG 이미지 (1200x630) — 래스터라이저 폰트 이슈 피하려 영문 텍스트 ---
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0f1219"/>
  <rect width="1200" height="10" fill="${ACCENT}"/>
  <g font-family="Arial, Helvetica, sans-serif">
    <rect x="80" y="84" width="96" height="96" rx="24" fill="${ACCENT}"/>
    <text x="128" y="150" font-size="52" font-weight="800" fill="#ffffff" text-anchor="middle">G1</text>
    <text x="200" y="150" font-size="34" font-weight="600" fill="#9aa4b8">g1park.dev</text>
    <text x="80" y="350" font-size="84" font-weight="800" fill="#ffffff">AI Agent Engineering</text>
    <text x="80" y="424" font-size="36" font-weight="500" fill="#9aa4b8">Building production AI agents end-to-end.</text>
    <text x="80" y="540" font-size="40" font-weight="700" fill="${ACCENT}">Jiwon Park</text>
  </g>
</svg>`;

await sharp(Buffer.from(ogSvg)).png().toFile('public/og.png');

// --- favicon PNG들 (favicon.svg에서) ---
const fav = readFileSync('public/favicon.svg');
await sharp(fav, { density: 384 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(fav, { density: 384 }).resize(48, 48).png().toFile('public/favicon-48.png');

console.log('✓ og.png · apple-touch-icon.png · favicon-48.png 생성 완료');
