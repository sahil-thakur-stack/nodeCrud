const swaggerAutogen = require('swagger-autogen')()
const doc = {
    info: {
        title: 'My API',
        description: 'Description'
    },
    host: 'localhost:3000'
};
const outputFile = './swagger.json'
const endpointsFiles = ['./routes.js']

swaggerAutogen(outputFile, endpointsFiles, doc);