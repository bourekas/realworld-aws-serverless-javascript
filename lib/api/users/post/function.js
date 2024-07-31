const { ApiFunction } = require('../../../api-function');

class PostFunction extends ApiFunction {
    constructor(scope, id) {
        super(scope, id, { dir: __dirname })
    }
}

module.exports = { PostFunction };
