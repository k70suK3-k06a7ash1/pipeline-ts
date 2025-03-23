// babel.config.js
module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' }, modules: false  }],
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@babel/plugin-proposal-pipeline-operator', { proposal: 'hack', topicToken: '#' }],
    ],
  };