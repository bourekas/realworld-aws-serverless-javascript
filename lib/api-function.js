const { Function, Runtime, Code } = require('aws-cdk-lib/aws-lambda');

class ApiFunction extends Function {
    constructor(scope, id, props) {
        super(scope, id, {
            runtime: Runtime.NODEJS_20_X,
            handler: 'index.handler',
            code: Code.fromAsset(dir, {
                exclude: ['function.*js', '*.test.*']
            }),
            ...props
        })
    }
}

module.exports = { ApiFunction };
