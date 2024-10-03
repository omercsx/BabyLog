module.exports = {

  root: true,

  rules: {

    // suppress errors for missing 'import React' in files

    'react/react-in-jsx-scope': 'off',

    // allow jsx syntax in js files (for next.js project)

    'react/jsx-filename-extension': [

      1,

      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },

    ],

  },

  extends: '@react-native-community',

};