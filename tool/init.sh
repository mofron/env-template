#!/bin/bash
SCP_DIR=$(cd $(dirname $0);pwd);
cd $SCP_DIR/../

sudo rm LICENSE
sudo rm README.md
sudo rm -rf ./git
sudo rm ./tool/init.sh

echo "initialized mofron env"
