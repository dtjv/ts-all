module.exports = (testFile) =>
  testFile.replace(/test/, 'src').replace(/-test\.ts$/g, '.ts')
