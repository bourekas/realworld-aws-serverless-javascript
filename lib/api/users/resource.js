const { LambdaIntegration } = require("aws-cdk-lib/aws-apigateway");
const { PostFunction } = require('./post/function');

/**
 * 
 * @param {import("aws-cdk-lib/aws-apigateway").IResource} parent 
 */
function addUsersResource(parent) {
    const usersResource = parent.addResource('users');
    usersResource.addMethod('POST', new LambdaIntegration(new PostFunction(this, 'post')));
}
