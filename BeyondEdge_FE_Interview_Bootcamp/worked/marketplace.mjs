// Reduced teaching model of the current InterDev Broker Marketplace.
// Run: node worked/marketplace.mjs success|refresh-error
// No InterDev setup, HTTP calls, database or credentials are required.
const scenario = process.argv[2] || 'success';
if (!['success', 'refresh-error'].includes(scenario)) {
  throw new Error('Choose success or refresh-error');
}
const initial = [
  { id: 'a', title: 'Build a portal', status: 'PUBLIC_DRAFT', brokerId: null, proposals: [] },
  { id: 'b', title: 'Private request', status: 'PRIVATE_DRAFT', brokerId: null, proposals: [] },
];
let server = structuredClone(initial);
let visible = structuredClone(initial);
const appliedCount = rows => rows.filter(row => row.proposals.includes('broker-1')).length;

async function apply() {
  server = server.map(row => row.id === 'a'
    ? { ...row, proposals: [...row.proposals, 'broker-1'] }
    : row);
}
async function reload() {
  try {
    if (scenario === 'refresh-error') throw new Error('Reload unavailable');
    visible = structuredClone(server);
  } catch (error) {
    console.log('reload error:', error.message);
  }
}
console.log('market IDs:', visible.filter(row => row.status === 'PUBLIC_DRAFT' && !row.brokerId).map(row => row.id).join(','));
await apply();
console.log('application confirmed');
// The production page starts the refresh without awaiting it. The await here
// makes the final observed state deterministic for this tiny console model.
await reload();
console.log('server applied:', appliedCount(server));
console.log('UI applied:', appliedCount(visible));
