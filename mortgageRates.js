class MortgageRateAnalyzer {
    /**
     * Analyzes historical mortgage rates to find best and worst pricing days
     * @param {Array} rates - Array of objects containing date and rate
     * @returns {Object} - Object containing best and worst days with their rates
     */
    findBestAndWorstPricingDays(rates) {
        // Input validation
        if (!Array.isArray(rates) || rates.length === 0) {
            throw new Error('Input must be a non-empty array of rate objects');
        }

        // Verify each item has required properties
        rates.forEach(rate => {
            if (!rate.date || !rate.rate || typeof rate.rate !== 'number') {
                throw new Error('Each rate object must have date and numerical rate properties');
            }
        });

        // Find best (lowest) and worst (highest) rates
        let bestDay = { ...rates[0] }; // Lowest rate
        let worstDay = { ...rates[0] }; // Highest rate

        for (let i = 1; i < rates.length; i++) {
            if (rates[i].rate < bestDay.rate) {
                bestDay = rates[i];
            }
            if (rates[i].rate > worstDay.rate) {
                worstDay = rates[i];
            }
        }

        return {
            bestDayToPrice: {
                date: bestDay.date,
                rate: bestDay.rate,
                reason: 'Lowest mortgage rate found'
            },
            worstDayToPrice: {
                date: worstDay.date,
                rate: worstDay.rate,
                reason: 'Highest mortgage rate found'
            }
        };
    }
}

// Example usage:
const analyzer = new MortgageRateAnalyzer();

// Sample data
const historicalRates = [
    { date: '2025-01-01', rate: 3.5 },
    { date: '2025-01-02', rate: 3.7 },
    { date: '2025-01-03', rate: 3.4 },
    { date: '2025-01-04', rate: 3.8 },
    { date: '2025-01-05', rate: 3.3 }
];

try {
    const result = analyzer.findBestAndWorstPricingDays(historicalRates);
    console.log('Analysis Results:', result);
} catch (error) {
    console.error('Error:', error.message);
}

// Export for testing
module.exports = MortgageRateAnalyzer;