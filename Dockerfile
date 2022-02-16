FROM ruby:3.1.0

# Define where our application will live inside the image
ENV RAILS_ROOT /usr/src/app
WORKDIR $RAILS_ROOT

RUN apt-get update && apt-get install -y \
  curl \
  build-essential \
  libpq-dev &&\
  curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y nodejs yarn
RUN yarn install

COPY Gemfile* $RAILS_ROOT/
RUN bundle install

COPY . .

RUN chmod +x ./entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]