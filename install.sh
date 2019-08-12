#!/bin/bash
xcode-select --install
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install ruby
export PATH=/usr/local/opt/ruby/bin:$PATH
which ruby
ruby -v
gem install bundler jekyll 