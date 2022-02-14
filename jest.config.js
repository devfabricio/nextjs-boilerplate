module.exports = {
  testEnvironment: 'jsdom', // Qual tipo de ambiente será testado,
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Caminhos que irá ignorar
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
