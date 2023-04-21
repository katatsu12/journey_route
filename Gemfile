source 'https://rubygems.org'
git_source(:github) { |repo| 'https://github.com/#{repo}.git' }

ruby '3.1.3'

gem 'rails', '~> 7.0.4', '>= 7.0.4.3'
gem 'sprockets-rails'
gem 'pg', '~> 1.1'
gem 'puma', '~> 5.0'
gem 'importmap-rails'
gem 'turbo-rails'
gem 'stimulus-rails'
gem 'tailwindcss-rails'
gem 'jbuilder'
gem 'redis', '~> 4.0'
gem 'tzinfo-data', platforms: %i[ mingw mswin x64_mingw jruby ]
gem 'bootsnap', require: false
gem 'slim'
gem 'devise'

group :development, :test do
  gem 'factory_bot_rails'
  gem 'ffaker'
  gem 'pry-rails'
  gem 'rspec-rails', '~> 6.0.0'
end

group :development do
  gem 'web-console'
end

group :test do
  gem 'database_cleaner'
  gem 'rails-controller-testing'
  gem 'shoulda'
  gem 'simplecov', require: false
end
