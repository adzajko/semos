require('dotenv').config();
const proxy = require('express-http-proxy');
const app = require('../../config/app');

const PROXY_PORT = process.env.PROXY_PORT;
const WARS_PORT = process.env.WARS_PORT;
const API_PREFIX = process.env.API_PREFIX;

app.use(
  API_PREFIX + '/wars', // http://localhost:8080/api/v1/wars/participants
  proxy(`http://localhost:${WARS_PORT}`, {
    // http://localhost:8081/participants
    proxyReqPathResolver: async (req) => req.url,
  })
);

app.use((req, res) => res.status(404).json('Not Found'));

app.listen(PROXY_PORT, () => {
  console.log('Proxy microservice started!');
});
