#!/bin/bash

echo "🔍 Mencari semua file .js kecuali .min.js..."
FILES=$(find script -type f -name "*.js" ! -name "*.min.js")

for FILE in $FILES; do
  DIR=$(dirname "$FILE")
  NAME=$(basename "$FILE" .js)
  OUT="$DIR/$NAME.min.js"

  echo "⚙️  Minifying $FILE -> $OUT"
  npx terser "$FILE" --compress --mangle --output "$OUT"
done

echo "✅ Semua file berhasil di-minify!"
