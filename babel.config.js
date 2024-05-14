module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset', { loose: false }], // Ensure the loose option is set consistently
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-proposal-private-methods', { loose: false }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
  ],
};
