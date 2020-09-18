// frontend/babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { 
      useBuiltIns: 'usage', 
      corejs: "3",  
    }],
    '@babel/preset-react'
  ],
  plugins: ["@babel/plugin-proposal-class-properties"],
};