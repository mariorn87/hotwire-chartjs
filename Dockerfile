FROM ruby:3.1.0

# Define where our application will live inside the image
ENV RAILS_ROOT /usr/src/app
WORKDIR $RAILS_ROOT

COPY Gemfile* $RAILS_ROOT/

RUN bundle install

COPY . .

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]