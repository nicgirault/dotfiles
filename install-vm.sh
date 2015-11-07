sudo apt-get update
sudo apt-get install <<EOF
zsh
EOF

rm ~/.zshrc
ln -s ~/dotfiles/.zshrc ~/.zshrc

# git options
rm ~/.gitconfig
ln -s ~/dotfiles/.gitconfig ~/.gitconfig

ls ~/dotfiles/antigen.zsh || (curl -L https://raw.githubusercontent.com/zsh-users/antigen/master/antigen.zsh > ~/dotfiles/antigen.zsh)

# change default shell
chsh -s $(which zsh)
