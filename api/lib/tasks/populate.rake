namespace :db do
  task populate: :environment do

    User.destroy_all

    def random_status
      ['new', 'in progress', 'closed', 'bad'].sample
    end

    20.times do
      User.create(
        name: Faker::Name.first_name,
        email: Faker::Internet.email
        )
    end

  end
end