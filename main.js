// first create selections of each layer to refer to later
const indianLayer = d3.select("#Indian")
const midEastLayer = d3.select("#MidEast")
const mexicanLayer = d3.select("#Mexican")
const caribLayer = d3.select("#Carib")
const frenchLayer = d3.select("#French")
const chineseLayer = d3.select("#Chinese")
const meditLayer = d3.select("#Medit")
const italianLayer = d3.select("#Italian")

// a function that adds the "hide" class to each layer
function hideAllLayers() {
	indianLayer.classed("hide", true)
	midEastLayer.classed("hide", true)
	mexicanLayer.classed("hide", true)
	caribLayer.classed("hide", true)
	frenchLayer.classed("hide", true)
	chineseLayer.classed("hide", true)
	meditLayer.classed("hide", true)
	italianLayer.classed("hide", true)
}

// when the page loads, we want to hide those layers by default, so let's call hideAllLayers() now
hideAllLayers()

d3.select("#indian_button")
	.on("click", () => {
		// if the layer already has the hide class
		if (indianLayer.classed("hide")) {
			//remove it
			indianLayer.classed("hide", false)
		} else {
			// otherwise add it
			indianLayer.classed("hide", true)
		}
	})

d3.select("#middle_east_button")
	.on("click", () => {
		// if the layer already has the hide class
		if (midEastLayer.classed("hide")) {
			//remove it
			midEastLayer.classed("hide", false)
		} else {
			// otherwise add it
			midEastLayer.classed("hide", true)
		}
	})

d3.select("#chinese_button")
	.on("click", () => {
		// if the layer already has the hide class
		if (chineseLayer.classed("hide")) {
			//remove it
			chineseLayer.classed("hide", false)
		} else {
			// otherwise add it
			chineseLayer.classed("hide", true)
		}
	})

d3.select("#italian_button")
	.on("click", () => {
		// if the layer already has the hide class
		if (italianLayer.classed("hide")) {
			//remove it
			italianLayer.classed("hide", false)
		} else {
			// otherwise add it
			italianLayer.classed("hide", true)
		}
	})

d3.select("#french_button")
	.on("click", () => {
		// if the layer already has the hide class
		if (frenchLayer.classed("hide")) {
			//remove it
			frenchLayer.classed("hide", false)
		} else {
			// otherwise add it
			frenchLayer.classed("hide", true)
		}
	})

d3.select("#carib_button")
	.on("click", () => {
		// if the layer already has the hide class
		if (caribLayer.classed("hide")) {
			//remove it
			caribLayer.classed("hide", false)
		} else {
			// otherwise add it
			caribLayer.classed("hide", true)
		}
	})

d3.select("#med_button")
	.on("click", () => {
		// if the layer already has the hide class
		if (meditLayer.classed("hide")) {
			//remove it
			meditLayer.classed("hide", false)
		} else {
			// otherwise add it
			meditLayer.classed("hide", true)
		}
	})

d3.select("#mex_button")
	.on("click", () => {
		// if the layer already has the hide class
		if (mexicanLayer.classed("hide")) {
			//remove it
			mexicanLayer.classed("hide", false)
		} else {
			// otherwise add it
			mexicanLayer.classed("hide", true)
		}
	})