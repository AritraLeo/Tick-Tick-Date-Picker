module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript and TSX files
        '^.+\\.(js|jsx)$': 'babel-jest', // Transform JavaScript and JSX files
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Your Jest setup file
};
