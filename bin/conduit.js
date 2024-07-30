#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { ConduitStack } = require('../lib/conduit-stack');

const app = new cdk.App();
new ConduitStack(app, 'ConduitStack', {});
