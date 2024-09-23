const http = require('http');
const https = require('https');
const app = require('./app');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const httpPort = 3000;
const httpsPort = 3001;

// Create HTTP and HTTPS servers
const httpServer = http.createServer(app);
// const httpsServer = https.createServer(app);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Create HTTP and HTTPS servers

// Start servers
httpServer.listen(httpPort, () =>
{
    console.log(`HTTP Server running on http://localhost:${httpPort}`);
});

