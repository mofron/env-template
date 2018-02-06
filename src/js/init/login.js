/**
 * @file login.js
 * @brief login page initialization
 */
let mf = require('mofron');
let Text = require('mofron-comp-text');
let Button = require('mofron-comp-button');
let Login = require('mofron-comp-login');
let Image = require('mofron-comp-image');
let Fade = require('mofron-effect-fade');
/* util */
let Font = require('mofron-font-google');
/* app ctrl */
let theme = require('../conf/theme.js');

let start_btn = () => {
    return new Button({
        height : 33,
        text   : 'Start Without Login',
        color  : new mf.Color(30,140,90),
        style  : {
            'position' : 'relative',
            'left'     : '65px',
            'top'      : '-33px'
        }
    });
}

/**
 * page init function
 * 
 * @param rt : root component
 */
let start = (rt) => {
    try {
        let login = new Login({
            title : new Text({
                        text  : 'Road of Reject',
                        font  : new Font('Amatic SC', 'https://fonts.googleapis.com/css?family=Amatic+SC'),
                        space : 5
                    }),
            color    : new mf.Color(30,140,90),
        });
        login.header().execOption({
            height : 70,
            logo   : new Image('./img/logo.png'),
            //bind   : false
        });
        login.background(new Image('./img/login_wall_01.jpg'));
        
        login.frame().execOption({
            color    : new mf.Color(220, 240, 220),
            addChild : start_btn()
        });
        
        rt.addEffect(
            new Fade({
                speed : 3
            })
        );
        rt.addChild(login);
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
}

try {
    require('expose-loader?app!../conf/namesp.js');
    theme.theme(app.root.theme());
    mf.debug = true;
    start(app.root);
    app.root.visible(true);
} catch (e) {
    console.error(e.stack);
}
/* end of file */
