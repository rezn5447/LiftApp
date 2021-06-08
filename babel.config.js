module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'src',
        alias: {
          images: './images',
          static: './static',
          modules: './modules',
          shared: './shared',
          services: './services',
          types: './types',
        },
      },
    ],
  ],
  env: {
    development: {
      plugins: ['@babel/plugin-transform-react-jsx-source'],
    },
  },
};
