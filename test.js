const MortgageRateAnalyzer = require('./mortgageRates');

test('should find best and worst pricing days', () => {
    const analyzer = new MortgageRateAnalyzer();
    const rates = [
        { date: '2025-01-01', rate: 3.5 },
        { date: '2025-01-02', rate: 3.7 },
        { date: '2025-01-03', rate: 3.4 }
    ];

    const result = analyzer.findBestAndWorstPricingDays(rates);
    
    expect(result.bestDayToPrice.rate).toBe(3.4);
    expect(result.worstDayToPrice.rate).toBe(3.7);
});

test('should throw error for empty array', () => {
    const analyzer = new MortgageRateAnalyzer();
    expect(() => analyzer.findBestAndWorstPricingDays([])).toThrow();
});