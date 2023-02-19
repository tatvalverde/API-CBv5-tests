module.exports = {

  require: ['@babel/register'],
  spec: 'tests/**/*.js',
  ignore: 'tests/first.spec.js',
  file: 'global-hooks/global-hook.js',
  timeout: 20000,
  reporter: 'mochawesome',
  reporterOptions: ['json=false', 'reportFilename=MyReport', 'reportDir=Reports']
}
