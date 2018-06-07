/**
 * @file   devtype.js
 * @brief  device type function
 * @author simpart
 */
//let mf = require('mofron');

let dev_type = null;
try {
    let ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        dev_type = 'smartphone';
    } else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        dev_type = 'tablet';
    } else{
        dev_type = 'other';
    }
} catch (e) {
    console.error(e.stack);
    throw e;
}

module.exports = {
    isMobile : () => {
        try {
            return (('smartphone' === dev_type) || ('tablet' === dev_type)) ? true : false;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },
    isTablet : () => {
        try {
            return ('tablet' === dev_type) ? true : false;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },
    isSmartphone : () => {
        try {
            return ('smartphone' === dev_type) ? true : false;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    },
    isPC : () => {
        try {
            return ('other' === dev_type) ? true : false;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
