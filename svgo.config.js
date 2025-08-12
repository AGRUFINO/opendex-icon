module.exports = {
  multipass: true,
  plugins: [
    'removeDimensions',
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};


