const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      analyzerOutputDir: 'bundle-analysis',
      analyzerOutputFilename: 'bundle-report.html',
      generateStatsFile: true,
      statsFilename: 'bundle-stats.json',
      openAnalyzer: false,
      logLevel: 'info',
      defaultSizes: 'parsed',
      excludeAssets: null,
    }),
  ],
};
