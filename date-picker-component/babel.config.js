module.exports = {
    presets: [
        '@babel/preset-env', // Support for ES6+
        [
            '@babel/preset-react',
            {
                runtime: 'automatic', // Enable automatic JSX runtime
            },
        ],
        '@babel/preset-typescript', // Support for TypeScript
    ],
};
