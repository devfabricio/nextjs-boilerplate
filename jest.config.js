module.exports = {
  testEnvironment: 'jsdom', // Qual tipo de ambiente será testado,
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.idea/'], // Caminhos que irá ignorar
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
