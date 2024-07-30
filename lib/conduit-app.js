const { RestApi, MockIntegration } = require('aws-cdk-lib/aws-apigateway');
const { Construct } = require('constructs');

class ConduitApp extends Construct {
    constructor(scope, id, props) {
        super(scope, id, props);

        const restApi = new RestApi(this, 'rest-api');
        restApi.root.addMethod('ANY', new MockIntegration());
    }
}

module.exports = { ConduitApp };
