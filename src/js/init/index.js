/**
 * @file index.js
 * @brief index page initialize
 */
const mf = require('mofron');
require('expose-loader?app!../conf/namesp.js');

const Text = require('mofron-comp-text');

/* app ctrl */
const theme = require('../conf/theme.js');
const base = require('../conf/basestyle.js');

/**
 * build component contents
 * 
 * @return mf.Component object
 */
let start = () => {
    try {
        
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
}

try {
    base.init();
    let ret = start(app.root);
    app.root.child(
        (true === Array.isArray(ret)) ? ret : [ret]
    );
    theme.init(app.root);
    
    app.root.visible(true);
} catch (e) {
    console.error(e.stack);
}
/* end of file */
