module.exports = {
  analyzerMode: 'static',
  analyzerOutputDir: 'bundle-analysis',
  analyzerOutputFilename: 'bundle-report.html',
  generateStatsFile: true,
  statsFilename: 'bundle-stats.json',
  openAnalyzer: false,
  logLevel: 'info',
  defaultSizes: 'parsed',
  excludeAssets: null,
  server: {
    port: 8888,
    open: true
  }
};
