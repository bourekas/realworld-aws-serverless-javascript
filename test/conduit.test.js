const { App } = require('aws-cdk-lib');
const { Template } = require('aws-cdk-lib/assertions');
const { ConduitStack } = require('../lib/conduit-stack');

it('does not alter the infrastructure', () => {
  const app = new App();
  const stack = new ConduitStack(app, 'conduit-test-stack');
  const template = Template.fromStack(stack);
  
  expect(template.toJSON()).toMatchSnapshot();
});
