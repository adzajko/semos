require('dotenv').config();
const proxy = require('express-http-proxy');
const app = require('../../config/app');
const PORT = process.env.PROXY_PORT;
const USERS_PORT = process.env.USERS_PORT;
const PREFIX = process.env.PREFIX;
const something = require('something'); // CommonJS
// import something from "something" - ES6 MODULES

app.use(
  `${PREFIX}/users`,
  proxy(`http://localhost:${USERS_PORT}`, {
    // proxyReqPathResolver: async (req) => {
    //     return req.url
    // }
    proxyReqPathResolver: async (req) => req.url,
  })
);

app.use('*', (req, res, next) => {
  return res.status(404).json('Does not exist.');
});

app.listen(PORT, () => {
  console.log('Proxy Microservice started!');
});
