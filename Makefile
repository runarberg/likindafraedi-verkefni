all:
	R -e "library('knitr'); knit('lausnir.Rmd', quiet=TRUE)" --slave
	pandoc -f markdown -t html5 \
	--section-divs \
	--css="buttondown.css" -s \
	--mathjax="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML" \
	--highlight-style pygments < lausnir.md > index.html
	pandoc -f markdown -t html5 \
	--section-divs -A scripts.html \
	--css="buttondown.css" -s \
	--mathjax="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML" \
	--highlight-style pygments < lausnir.md > lausnir.html
	~/.local/bin/ffreload.sh
