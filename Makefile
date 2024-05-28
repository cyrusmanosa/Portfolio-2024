run: 
	npm run dev

gitupdate:
	git add .
	git commit -m "update"
	git push origin main

.PHONY: run gitupdate