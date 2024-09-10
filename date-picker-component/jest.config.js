// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'jsdom',
//     transform: {
//         '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript and TSX files
//         '^.+\\.(js|jsx)$': 'babel-jest', // Transform JavaScript and JSX files
//     },
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Your Jest setup file
// };



module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: '<rootDir>/tsconfig.json', // Ensure tsconfig is referenced here
            isolatedModules: true,  // Speed up tests without full type-checking
        }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],  // Jest setup file if necessary
    transformIgnorePatterns: [
        'node_modules/(?!@babel/runtime)',  // Ensure node_modules can be transformed
    ],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',  // Mock CSS imports, optional
    },
};

