module.exports = {
	website: {
		assets: "./assets",
		css: [
			"ystable.css"
		],
		js: [
			"ystable.js"
		]
	},
	hooks: {
		page: formater
	}
}

function formater (page) {
	page.content = page.content
		.replace(new RegExp('%indicator%', "g"),
			'<div class="fold-icon">' +
				'<div class="plus"></div>' +
				'<div class="minus"></div>' +
			'</div>'
		)
	return page;
};