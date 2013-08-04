json.array!(@stickers) do |sticker|
  json.extract! sticker, :coordsX, :coordsY, :userValue, :id
  json.url sticker_url(sticker, format: :json)
end
