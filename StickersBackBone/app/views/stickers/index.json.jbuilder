json.array!(@stickers) do |sticker|
  json.extract! sticker, :coordsX, :coordsY, :userValue
  json.url sticker_url(sticker, format: :json)
end
