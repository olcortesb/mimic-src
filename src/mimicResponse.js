'use strict';

const dynamoService = require('./services/dbServices.js')

exports.lambdaHandler = async (event, context) => {
    try {
        const { pathParameters, queryStringParameters, headers, body } = event;

        const id = pathParameters.id
        const bodyResponse = await dynamoService.getBodyResponse(id);

        console.log('Path: ' , id)

        return {
            'statusCode': 200,
            'body': JSON.stringify(bodyResponse)
        }
    } catch (err) {
        console.log('End request with error!')
        console.log(err);
        return { 'statusCode': 500 }
    }
};