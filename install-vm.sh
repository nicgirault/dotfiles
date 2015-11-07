sudo apt-get update
sudo apt-get install <<EOF
zsh
EOF

rm ~/.zshrc
ln -s ~/dotfiles/.zshrc ~/.zshrc
rm -rf ~/.zsh
ln -s ~/dotfiles/zsh ~/.zsh

# git options
rm ~/.gitconfig
ln -s ~/dotfiles/.gitconfig ~/.gitconfig

curl -L https://raw.githubusercontent.com/zsh-users/antigen/master/antigen.zsh > ~/dotfiles/antigen.zsh

# change default shell
chsh -s $(which zsh)
