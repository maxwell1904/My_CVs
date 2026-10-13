#!/bin/sh
set -eu
cd "$(dirname "$0")"
if command -v xelatex >/dev/null 2>&1; then
  cv_xelatex=$(command -v xelatex)
elif [ -x "$HOME/Library/TeX/2026basic/bin/universal-darwin/xelatex" ]; then
  cv_xelatex="$HOME/Library/TeX/2026basic/bin/universal-darwin/xelatex"
else
  echo "Không tìm thấy XeLaTeX. Hãy cài BasicTeX hoặc MacTeX." >&2
  exit 1
fi
cv_source=${1:-SCT_Logistucs_SJC_CV/main.tex}
mkdir -p output/pdf
"$cv_xelatex" -interaction=nonstopmode -halt-on-error -output-directory=output/pdf "$cv_source"
"$cv_xelatex" -interaction=nonstopmode -halt-on-error -output-directory=output/pdf "$cv_source"
