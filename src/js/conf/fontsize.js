/**
 * @file fontsize.js
 * @brief html,body font-size config
 * @author simpart
 */
const mf = require('mofron');
let thisobj = null;

try {
    if (null !== thisobj) {
        module.exports = thisobj;
    }

    thisobj = {
        default : ['625%','0.16em'],
        mobile  : ['625%','0.16em'],
        tablet  : ['625%','0.16em'],
        init    : (p1, p2) => {
            try {
                let dtype = mf.func.devType();
                /* set html attribute */
                if ( (undefined !== p1) && ('string' === typeof p1) ) {
                    document.documentElement.setAttribute('style', 'font-size:'+ p1 + ';');
                } else if ('mobile' === dtype) {
                    document.documentElement.setAttribute('style', 'font-size:'+ thisobj.mobile[0] + ';');
                } else if ('tablet' === dtype) {
                    document.documentElement.setAttribute('style', 'font-size:'+ thisobj.tablet[0] + ';');
                } else {
                    document.documentElement.setAttribute('style', 'font-size:'+ thisobj.default[0] + ';');
                }
                /* set body attribute */
                if ( (undefined !== p2) && ('string' === typeof p2) ) {
                    document.body.setAttribute('style', 'font-size:'+ p2 + ';');
                } else if ('mobile' === dtype) {
                    document.body.setAttribute('style', 'font-size:'+ thisobj.mobile[1] + ';');
                } else if ('tablet' === dtype) {
                    document.body.setAttribute('style', 'font-size:'+ thisobj.tablet[1] + ';');
                } else {
                    document.body.setAttribute('style', 'font-size:'+ thisobj.default[1] + ';');
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }
    module.exports = thisobj;
} catch (e) {
    console.error(e.stack);
    throw e;
}
/* end of file */
