'use strict';

const dynamoService = require('./services/dbServices.js')

exports.lambdaHandler = async (event, context) => {
    try {
        const { path, queryStringParameters, headers, body } = event;

        console.log('Start request!', JSON.parse(body));
        const objectBody = JSON.parse(body)
        const id = await dynamoService.createBodyResponse(objectBody);
        console.log('Phone Number: ' + id)

        return {
            'statusCode': 200,
            'body': id
        }
    } catch (err) {
        console.log('End request with error!')
        console.log(err);
        return { 'statusCode': 500 }
    }
};