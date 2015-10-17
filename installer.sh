sudo apt-get update
sudo apt-get install <<APTPACKAGES
git
curl
zsh
tmux
APTPACKAGES
rm ~/.zshrc
ln -s ~/dotfiles/.zshrc ~/.zshrc
rm -rf ~/.zsh
ln -s ~/dotfiles/zsh ~/.zsh
rm ~/.tmux.conf
ln -s ~/dotfiles/.tmux.conf ~/.tmux.conf

# install fonts for agnoster zsh theme
git clone git@github.com:powerline/fonts.git ~/dotfiles/fonts
chmod +x ~/dotfiles/fonts/installer.sh
~/dotfiles/fonts/installer.sh

# change default shell
chsh -s $(which zsh)

# git options
rm ~/.gitconfig
ln -s ~/dotfiles/.gitconfig ~/.gitconfig

