import fs from 'fs';
import path from 'path';
import { resolveThumbnail } from './thumbnail-resolver.mjs';

const columnDir = 'c:/Users/PC/Downloads/home/content/column';
const masterFiles = [
  'child-tic-disorder.md',
  'panic-disorder-breathing.md',
  'autonomic-fatigue.md',
  'sleep-onset-insomnia.md',
  'hwabyeong-maehaekgi.md',
  'tinnitus-autonomic-dizziness.md',
  'damjeok-functional-dyspepsia.md',
  'adult-adhd-executive-dysfunction.md',
  'sleeping-pill-withdrawal.md',
  'vasovagal-syncope.md',
  'cervicogenic-dizziness.md',
  'tmj-bruxism-stress.md',
  'chronic-depression-lethargy.md',
  'burnout-somatization.md',
  'claustrophobia-agoraphobia.md',
  'social-anxiety-tremor.md',
  'ocd-compulsive-thoughts.md'
];

masterFiles.forEach(f => {
  const content = fs.readFileSync(path.join(columnDir, f), 'utf8');
  const title = (content.match(/title:\s*"([^"]+)"/) || [])[1] || '';
  const category = (content.match(/category:\s*"([^"]+)"/) || [])[1] || '';
  const slug = f.replace('.md', '');
  const res = resolveThumbnail({ slug, title, categoryName: category });
  console.log(slug.padEnd(36), '=>', res);
});
