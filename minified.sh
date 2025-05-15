#!/bin/bash

HTML="index.html"
echo "🔍 Proses minify JS & inject ke $HTML ..."

FILES=$(find script -type f -name "*.js" ! -name "*.min.js")

for FILE in $FILES; do
  DIR=$(dirname "$FILE")
  NAME=$(basename "$FILE" .js)
  OUT="$DIR/$NAME.min.js"

  echo "⚙️  Minifying $FILE -> $OUT"
  npx terser "$FILE" --compress --mangle --output "$OUT"

  # Cek apakah sudah ada di HTML
  grep -q "$OUT" "$HTML"
  if [ $? -ne 0 ]; then
    echo "➕ Menambahkan <a href=\"$OUT\"></a> ke $HTML"
    echo "<a href=\"$OUT\">\"$OUT\"</a>" >> "$HTML"
  else
    echo "✅ Sudah ada: $OUT"
  fi
done

echo "🎉 Selesai! Cek $HTML"
