const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://react-mern123.herokuapp.com',
      changeOrigin: true,
    })
  );
};