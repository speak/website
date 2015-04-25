FROM ruby:2.1.5
RUN gem install github-pages
RUN gem install therubyracer
WORKDIR /site
CMD jekyll serve --force_polling --port 5000

