sudo apt-get update
sudo apt-get install <<EOF
git
curl
tmux
EOF

rm ~/.tmux.conf
ln -s ~/dotfiles/.tmux.conf ~/.tmux.conf

# install fonts for agnoster zsh theme
git clone git@github.com:powerline/fonts.git ~/dotfiles/fonts
chmod +x ~/dotfiles/fonts/install.sh
~/dotfiles/fonts/install.sh

~/dotfiles/install-vm.sh
