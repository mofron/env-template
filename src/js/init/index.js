/**
 * @file index.js
 * @brief index page initialize
 */
const mf = require('mofron');
require('expose-loader?app!../conf/namesp.js');

/* app ctrl */
const theme = require('../conf/theme.js');
const base = require('../conf/basestyle.js');

/**
 * page init function
 * 
 * @param rc (mf.Component) root component
 */
let start = (rc) => {
    try {
        
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
}

try {
    start(app.root);
    theme.init(app.root);
    base.init();
    
    app.root.visible(true);
} catch (e) {
    console.error(e.stack);
}
/* end of file */
