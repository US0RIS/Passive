// Calculator functionality
function calculate() {
    const initial = parseFloat(document.getElementById('initial')?.value) || 0;
    const monthly = parseFloat(document.getElementById('monthly')?.value) || 0;
    const rate = parseFloat(document.getElementById('rate')?.value) / 100 || 0;
    const years = parseFloat(document.getElementById('years')?.value) || 0;

    const monthlyRate = rate / 12;
    const months = years * 12;

    // Future value of initial investment
    const fvInitial = initial * Math.pow(1 + monthlyRate, months);

    // Future value of monthly contributions (annuity)
    const fvMonthly = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const total = fvInitial + fvMonthly;
    const contributed = initial + (monthly * months);
    const earned = total - contributed;

    if (document.getElementById('result')) {
        document.getElementById('result').textContent = '$' + Math.round(total).toLocaleString();
    }
    if (document.getElementById('result-sub')) {
        document.getElementById('result-sub').textContent = 
            '$' + Math.round(contributed).toLocaleString() + ' contributed · $' + Math.round(earned).toLocaleString() + ' earned';
    }
}

// Add event listeners to all calculator inputs
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.calculator-form input').forEach(input => {
        input.addEventListener('input', calculate);
    });

    // Initial calculation
    if (document.querySelector('.calculator-form')) {
        calculate();
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
