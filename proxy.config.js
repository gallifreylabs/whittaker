const proxy = [
  {
    context: '/api',
    target: 'https://gallifreylabs-hartnell.herokuapp.com/file_upload',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;