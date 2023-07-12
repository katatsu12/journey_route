# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { FFaker::Internet.email }
    password { 'passwordtest' }
  end
end
