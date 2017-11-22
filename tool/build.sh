#!/bin/bash
SCP_DIR=$(cd $(dirname $0);pwd);
cd $SCP_DIR/../
WEBPACK=node_modules/.bin/webpack

top_pack () {
    echo $($WEBPACK --config conf/webpack/webpack.config.top.js);
}

dev_pack () {
    echo $($WEBPACK --config conf/webpack/webpack.config.dev.js);
}

if [ -n "$1" ]; then
    if [ $1 = "top" ]; then
        top_pack
    elif [ $1 = "dev" ]; then
        dev_pack
    fi
else
    top_pack
    dev_pack
fi
