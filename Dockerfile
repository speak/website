FROM ruby:2.1.5
ADD . /site
WORKDIR /site
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y nodejs
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN apt-get install -y npm
RUN npm install -g grunt-cli
RUN npm install
RUN gem install libv8 -v '3.16.14.11' -- --with-system-v8
RUN bundle install
CMD ["bundle", "exec", "foreman", "start"]

