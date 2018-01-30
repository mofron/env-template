#!/bin/bash
SCP_DIR=$(cd $(dirname $0);pwd);
cd $SCP_DIR/../

error () {
    echo "ERROR : $1"
    echo "init.sh is failed"
    exit -1
}

del_file () {
    sudo rm LICENSE
    if [ $? != 0 ]; then
        error "could not delete LICENSE"
    fi

    sudo rm README.md
    if [ $? != 0 ]; then
        error "could not delete README.md"
    fi
    
    sudo rm -rf ./git
    if [ $? != 0 ]; then
        error "could not delete ./git"
    fi
    
    sudo rm ./tool/init.sh
    if [ $? != 0 ]; then
        error "could not delete init.sh"
    fi
}

build_env () {
    sudo yum install -y epel-release
    sudo yum install -y nodejs npm
}

del_file
build_env
echo `./tool/build.sh`

echo "initialized mofron env"
