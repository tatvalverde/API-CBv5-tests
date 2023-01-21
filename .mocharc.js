module.exports = {
  require: ['@babel/register'],
  spec: 'tests/**/*.js',
  ignore: 'tests/first.spec.js',
  file: 'global-hooks/global-hook.js'
}