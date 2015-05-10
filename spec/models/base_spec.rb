require 'rails_helper'

describe Base do

  it { should validate_presence_of(:slug) }
  it { should validate_uniqueness_of(:slug) }
end
