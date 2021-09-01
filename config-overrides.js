const { override, addBabelPreset, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins([
      "@emotion",
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        "sourceMap": true,
        "autoLabel": "dev-only",
        "labelFormat": "[local]",
        "cssPropOptimization": true
      }
    ],
    '@babel/plugin-transform-react-jsx'
  ),
  addBabelPreset([
    "@emotion/babel-preset-css-prop",
    {
      "autoLabel": "dev-only",
      "labelFormat": "[local]",
      "useBuiltIns": false,
      "throwIfNamespace": true
    }
  ])
);
