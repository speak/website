FROM ruby:2.1.5
ADD . /site
WORKDIR /site
RUN gem install libv8 -v '3.16.14.3' -- --with-system-v8
RUN bundle install
CMD bundle exec jekyll serve --force_polling --port 5000

