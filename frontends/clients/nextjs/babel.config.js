// module.exports = {
//     presets: ["next/babel"],
// };

module.exports = function(api) {
    const presets = [
      [
        "next/babel",
        "@babel/preset-env",
        {
          targets: {
            chrome: 100,
          },
        },
      ],
      "@babel/preset-typescript",
      "@babel/preset-react",
    ];
  
    // Cache the returned value forever and don't call this function again.
    api.cache(true);
  
    return {
      presets,
    };
  };
  