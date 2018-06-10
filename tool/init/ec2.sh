sudo yum update
sudo yum install -y gcc-c++ make openssl-devel git

# install node
cd /tmp
git clone https://github.com/nodejs/node.git
cd node
sudo ./configure
sudo make
sudo make install

sudo export PATH=$PATH:/usr/local/bin

# install npm
cd /tmp
git clone https://github.com/npm/npm.git
cd npm
sudo make
sudo make install
