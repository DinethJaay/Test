function logSuccess(message) {
  console.log(`✅ SUCCESS: ${message}`);
}

function logError(message) {
  console.error(`❌ ERROR: ${message}`);
}

module.exports = {
  logSuccess,
  logError,
};
