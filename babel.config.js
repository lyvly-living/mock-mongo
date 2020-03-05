module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10.15.0',
        },
        modules: 'commonjs',
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
};
