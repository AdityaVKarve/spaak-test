const cron = require('node-cron');
const syncData = require('./syncData');

cron.schedule('*/30 * * * *', async () => {
  console.log('Running syncData job...');
  await syncData();
});

console.log('Cron job scheduled.');
