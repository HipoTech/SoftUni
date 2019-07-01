function acceptance() {
	const btn = document.querySelector('#acceptance');
	const company = document.querySelector('#fields td input[name="shippingCompany"]');
	const product = document.querySelector('#fields td input[name="productName"]');
	const quantity = document.querySelector('#fields td input[name="productQuantity"]');
	const scrape = document.querySelector('#fields td input[name="productScrape"]');
	const warehouse = document.querySelector('#warehouse');
	btn.addEventListener('click', addToList);
	console.log();

	function addToList() {
		if (company.value !== ''
			&& product.value !== ''
			&& !isNaN(quantity.value)
			&& !isNaN(scrape.value)
			&& quantity.value - scrape.value > 0
		) {
			const divCreate = document.createElement('div');
			const p = document.createElement('p');
			const outOfStockBtn = document.createElement('button');
			p.textContent = `[${company.value}] ${product.value} - ${quantity.value - scrape.value} pieces`;
			outOfStockBtn.textContent = `Out of stock`;
			outOfStockBtn.type = 'button';
			outOfStockBtn.classList = 'OutOfStock'
			outOfStockBtn.addEventListener('click', removeStock)

			divCreate.appendChild(p);
			divCreate.appendChild(outOfStockBtn);
			warehouse.appendChild(divCreate);

			company.value = '';
			product.value = '';
			quantity.value = '';
			scrape.value = '';
		}

	}

	function removeStock() {
		this.parentNode.remove();

	}
}