# frozen_string_literal: true

require 'rails_helper'

describe HomeController do
  subject { response }

  let(:user) { create(:user) }

  before { sign_in user }

  describe 'GET #index' do
    before { get :index }

    it { is_expected.to render_template(:index) }
    it { is_expected.to have_http_status(:success) }
  end
end
