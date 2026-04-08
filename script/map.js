const countries = document.querySelectorAll('.africa .map path');
countries.forEach(country => {
    country.addEventListener('click', function () {
        this.classList.toggle('active');
        const countryId = this.id;
        console.log(`Clicked country: ${countryId}`);
    });
    country.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.02)';
    });
    country.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

const selectedText = document.getElementById('selected-country');
countries.forEach(country => {
    country.addEventListener('click', function () {
        countries.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        if(this.classList.contains('yes')){
            selectedText.textContent = `Research conducted in ${this.id}`;
        }
        else if(this.classList.contains('view')){
            selectedText.textContent = `Research under consideration in ${this.id}`;
        }
        else{
            selectedText.textContent = `No research conducted in ${this.id}`;
        }
    });
});

const tooltip = document.getElementById('tooltip');

if (tooltip) {
    countries.forEach(country => {
        country.addEventListener('mousemove', e => {
            tooltip.style.left = `${e.pageX + 15}px`;
            tooltip.style.top = `${e.pageY + 15}px`;
            tooltip.textContent = country.dataset.name || country.id;
            tooltip.style.display = 'block';
        });

        country.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
}