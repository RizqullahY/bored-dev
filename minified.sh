#!/bin/bash

HTML="index.html"
START_MARKER="<!-- ✨ START AUTO GENERATED LINKS -->"
END_MARKER="<!-- ✨ END AUTO GENERATED LINKS -->"

echo "🔍 Proses minify JS & inject ke $HTML ..."

FILES=$(find script -type f -name "*.js" ! -name "*.min.js")

# Tempatkan semua link hasil di variabel
LINKS=""

for FILE in $FILES; do
  DIR=$(dirname "$FILE")
  NAME=$(basename "$FILE" .js)
  OUT="$DIR/$NAME.min.js"

  echo "⚙️  Minifying $FILE -> $OUT"
  npx terser "$FILE" --compress --mangle --output "$OUT"

  LINKS="${LINKS}<a href=\"$OUT\" target="_blank">$OUT</a>\n"
done

# Sisipkan ke HTML di antara marker
TMP_HTML=$(mktemp)

awk -v start="$START_MARKER" -v end="$END_MARKER" -v links="$LINKS" '
  BEGIN {in_block=0}
  $0 ~ start {print; print ""; print links; in_block=1; next}
  $0 ~ end {in_block=0}
  !in_block {print}
' "$HTML" > "$TMP_HTML"

mv "$TMP_HTML" "$HTML"

echo "🎉 Selesai! Semua link dimasukkan ke dalam $HTML antara marker!"
