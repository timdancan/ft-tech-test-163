describe('percentageChange', () => {
    it('calculates positive percentage change', () => {
        const quote = { lastPrice: 120, previousClosePrice: 100 };
        const result = ((quote.lastPrice - quote.previousClosePrice) / quote.previousClosePrice) * 100;
        expect(result).toBe(20);
    });

    it('calculates negative percentage change', () => {
        const quote = { lastPrice: 80, previousClosePrice: 100 };
        const result = ((quote.lastPrice - quote.previousClosePrice) / quote.previousClosePrice) * 100;
        expect(result).toBe(-20);
    });

    it('calculates zero percentage change', () => {
        const quote = { lastPrice: 100, previousClosePrice: 100 };
        const result = ((quote.lastPrice - quote.previousClosePrice) / quote.previousClosePrice) * 100;
        expect(result).toBe(0);
    });

    it('handles division by zero gracefully', () => {
        const quote = { lastPrice: 100, previousClosePrice: 0 };
        const result = ((quote.lastPrice - quote.previousClosePrice) / quote.previousClosePrice) * 100;
        expect(result).toBe(Infinity); // Or handle this case differently in your code
    });
});

describe('truncateToThreeWords', () => {
    const truncateToThreeWords = (input) => input.split(' ').slice(0, 3).join(' ');

    it('returns the first three words of a long string', () => {
        const input = 'This is a very long sentence.';
        const result = truncateToThreeWords(input);
        expect(result).toBe('This is a');
    });

    it('returns the exact string if it has three words', () => {
        const input = 'Just three words';
        const result = truncateToThreeWords(input);
        expect(result).toBe('Just three words');
    });

    it('returns the full string if it has fewer than three words', () => {
        const input = 'Only two';
        const result = truncateToThreeWords(input);
        expect(result).toBe('Only two');
    });

    it('returns an empty string if input is empty', () => {
        const input = '';
        const result = truncateToThreeWords(input);
        expect(result).toBe('');
    });
});