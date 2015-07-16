sudo apt-get install vim
sudo apt-get install git

sudo apt-get install google-chrome-stable

git clone git@github.com:nicgirault/dotfiles.git

# add ssh key to ~/.ssh
sudo apt-get install curl

# Z
ls ~/.z.sh || (curl https://raw.githubusercontent.com/rupa/z/master/z.sh > ~/.z.sh)

sudo apt-get install python-pip
sudo pip install flake8

# download and install atom on https://atom.io/
apm install language-cjsx
apm install language-jade
apm install linter-flake8
apm install linter-python-pep8

sudo apt-get install zsh
rm ~/.zshrc
ln -s ~/dotfiles/.zshrc ~/.zshrc

# bash
rm ~/.bashrc
ln -s ~/dotfiles/.bashrc ~/.bashrc

# tmux
sudo apt-get install tmux
rm ~/.tmux.conf
ln -s ~/dotfiles/.tmux.conf ~/.tmux.conf

# git options
rm ~/.gitconfig
ln -s ~/dotfiles/.gitconfig ~/.gitconfig

