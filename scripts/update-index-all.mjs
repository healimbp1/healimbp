import { rebuildColumnIndex } from './build-all-columns.mjs';

console.log('🔄 Rebuilding content/column/_index.md with full pagination and current dates...');
rebuildColumnIndex();
console.log('✅ Successfully updated content/column/_index.md!');

