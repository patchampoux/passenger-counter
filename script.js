class PassengerCounter {
	constructor() {
		this.$count = document.querySelector('#count');
		this.$incrementBtn = document.querySelector('#increment-btn');
		this.$saveBtn = document.querySelector('#save-btn');
		this.$save = document.querySelector('#save');

		this.count = isNaN(parseInt(this.$count.textContent)) ? 0 : Number(this.$count.textContent);
		this.hasPreviousEntries = false;

		this.addEventListeners();
	}

	addEventListeners() {
		this.$incrementBtn && this.$incrementBtn.addEventListener('click', () => this.increment());
		this.$saveBtn && this.$saveBtn.addEventListener('click', () => this.save());
	}

	increment() {
		this.count += 1;
		this.updateUI();
	}

	save() {
		this.$save && (this.$save.textContent += `${this.hasPreviousEntries ? ' - ' : ' '}${this.count}`);
		this.count = 0;
		this.updateUI();

		if (!this.hasPreviousEntries) {
			this.hasPreviousEntries = true;
		}
	}

	updateUI() {
		this.$count && (this.$count.textContent = String(this.count));
	}
}

new PassengerCounter();