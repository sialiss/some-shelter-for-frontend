module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/some-shelter-for-frontend/'
    : '/'
}