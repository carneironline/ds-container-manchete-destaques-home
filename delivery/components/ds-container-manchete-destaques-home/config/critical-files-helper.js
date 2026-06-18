function getAllCriticalFiles(deliveryConfig) {
  if (!deliveryConfig) {
    return { allCriticalScripts: [], allCriticalStylesheets: [] };
  }

  const allScripts = new Set();
  const allStylesheets = new Set();

  (deliveryConfig.criticalScripts || []).forEach(script => allScripts.add(script));
  (deliveryConfig.criticalStylesheets || []).forEach(stylesheet => allStylesheets.add(stylesheet));

  if (deliveryConfig.channels) {
    Object.values(deliveryConfig.channels).forEach(channel => {
      if (channel && channel.criticalScripts) {
        channel.criticalScripts.forEach(script => allScripts.add(script));
      }
      if (channel && channel.criticalStylesheets) {
        channel.criticalStylesheets.forEach(stylesheet => allStylesheets.add(stylesheet));
      }
    });
  }

  return {
    allCriticalScripts: Array.from(allScripts),
    allCriticalStylesheets: Array.from(allStylesheets),
  };
}

module.exports = {
  getAllCriticalFiles
};
