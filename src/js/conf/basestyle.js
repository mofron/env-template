/**
 * @file basestyle.js
 * @brief styel sheet define for html,body 
 * @author simpart
 */
const mf = require('mofron');
let thisobj = null;

try {
    if (null !== thisobj) {
        module.exports = thisobj;
    }
    
    thisobj = {
        html : {
            base : {
                
            },
            default : {
                'font-size' : '625%'
            },
            mobile  : {
                'font-size' : '625%'
            },
            tablet  : {
                'font-size' : '625%'
            }
        },
        body : {
            base : {
                'margin'    : '0px',
                'padding'   : '0px'
            },
            default : {
                'font-size' : '0.16em'
            },
            mobile  : {
                'font-size' : '0.16em'
            },
            tablet  : {
                'font-size' : '0.16em'
            }
        },
        
        init    : (p1, p2) => {
            try {
                let dtype = mf.func.devType();
                /* set html style */
                let set_style = '';
                let idx       = null;
                let tgt = [thisobj.html, thisobj.body];
                
                for (let tidx in tgt) {
                    set_style = '';
                    for (idx in tgt[tidx].base) { 
                        set_style += idx + ':' + tgt[tidx].base[idx] + ';';
                    }
                    if (undefined !== arguments[idx]) {
                        for (idx in arguments[idx]) {
                            set_style += idx + ':' + arguments[idx] + ';';
                        }
                    }
                    if ('mobile' === dtype) {
                        for (idx in tgt[tidx].mobile) {
                            set_style += idx + ':' + tgt[tidx].mobile[idx] + ';';
                        }
                    } else if ('tablet' === dtype) {
                        for (idx in tgt[tidx].tablet) {
                            set_style += idx + ':' + tgt[tidx].tablet[idx] + ';';
                        }
                    } else {
                        for (idx in tgt[tidx].default) {
                            set_style += idx + ':' + tgt[tidx].default[idx] + ';';
                        }
                    }
                    /* set style */
                    let tgt_elm = (0 == tidx) ? document.documentElement : document.body;
                    tgt_elm.setAttribute('style', set_style);
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
