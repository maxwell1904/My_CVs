// A small state timeline inspired by PayPalMilestoneCheckout.
// Run: node worked/payment-flow.mjs success|cancel|sync-error
// All operations are local. No money, provider SDK or external services.
const scenario = process.argv[2] || 'success';
if (!['success', 'cancel', 'sync-error'].includes(scenario)) {
  throw new Error('Choose success, cancel or sync-error');
}
let providerCaptured = false;
let appConfirmed = false;
console.log('checkout ready');
if (scenario === 'cancel') {
  console.log('cancelled before capture');
} else {
  console.log('buyer approved');
  providerCaptured = true;
  console.log('provider captured');
  try {
    await Promise.resolve();
    if (scenario === 'sync-error') throw new Error('Application sync unavailable');
    appConfirmed = true;
    console.log('application confirmed escrow');
  } catch (error) {
    console.log('confirmation uncertain:', error.message);
    console.log('inspect application/provider state before retrying payment');
  }
}
console.log(JSON.stringify({ providerCaptured, appConfirmed }));
