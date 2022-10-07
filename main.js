const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const computerQuery = (computerObj) => {
    const computerHTMLInfo =
    `<section id="computer--${computerObj.id}"
        <h1>${computerObj.manufacturer} ${computerObj.make}</h1>
        <div>Model: ${computerObj.model}</div>
        <div>Memory: ${computerObj.specs.memory} GB</div>
        <div>Hard drive space: ${computerObj.specs.hardDrive}</div>
        <div>Processor speed: ${computerObj.specs.processor} GHz</div>
    </section>`
    return computerHTMLInfo
}

console.log(computerQuery(computer))


/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */