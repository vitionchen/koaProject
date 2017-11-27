/**
 * Created by vson on 17-2-27.
 */
var register = require('babel-core/register');

register({
    presets: ['stage-0']
});

require('./index.js');