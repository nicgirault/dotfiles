sudo apt-get update
sudo apt-get install <<EOF
git
curl
zsh
tmux
EOF

rm ~/.zshrc
ln -s ~/dotfiles/.zshrc ~/.zshrc
rm -rf ~/.zsh
ln -s ~/dotfiles/zsh ~/.zsh
rm ~/.tmux.conf
ln -s ~/dotfiles/.tmux.conf ~/.tmux.conf

# install fonts for agnoster zsh theme
git clone git@github.com:powerline/fonts.git ~/dotfiles/fonts
chmod +x ~/dotfiles/fonts/install.sh
~/dotfiles/fonts/install.sh

# git options
rm ~/.gitconfig
ln -s ~/dotfiles/.gitconfig ~/.gitconfig

curl -L https://raw.githubusercontent.com/zsh-users/antigen/master/antigen.zsh > ~/dotfiles/antigen.zsh

# change default shell
chsh -s $(which zsh)
