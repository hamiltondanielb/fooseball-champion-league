describe "Users API" do
  describe "GET /api/users" do
    it "returns all the users" do
      FactoryGirl.create name: "The Lord of the Rings"
      FactoryGirl.create name: "The Two Towers"

      get "/api/users", {}, { "Accept" => "application/json" }

      expect(response.status).to eq 200

      body = JSON.parse(response.body)
      movie_titles = body.map { |m| m["name"] }

      expect(movie_titles).to match_array(["The Lord of the Rings",
                                           "The Two Towers"])
    end
  end
end