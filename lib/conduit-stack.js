const { Stack } = require('aws-cdk-lib');
const { ConduitApp } = require('./conduit-app');

class ConduitStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    new ConduitApp(this, 'conduit-app');
  }
}

module.exports = { ConduitStack }
