import { capitalizeFirstLetter } from "./qstr";

describe('capitalizeFirstLetter()', () => {
	it('uppercases correct letters', () => {
		expect(capitalizeFirstLetter('testing')).toBe('Testing');
		expect(capitalizeFirstLetter('TESTING')).toBe('TESTING');
		expect(capitalizeFirstLetter('T8282829383')).toBe('T8282829383');
		expect(capitalizeFirstLetter('two words')).toBe('Two words');
	});
	it('handles edge cases', () => {
		expect(capitalizeFirstLetter(' testing')).toBe('Testing');
		expect(capitalizeFirstLetter('')).toBe('');
	});
	it('handles German letters', () => {
		expect(capitalizeFirstLetter('äpeln')).toBe('Äpeln');
		expect(capitalizeFirstLetter('öfter')).toBe('Öfter');
		expect(capitalizeFirstLetter('über')).toBe('Über');
		expect(capitalizeFirstLetter('ÄÄÄÄ')).toBe('ÄÄÄÄ');
		expect(capitalizeFirstLetter('ÖÖÖÖ')).toBe('ÖÖÖÖ');
		expect(capitalizeFirstLetter('ÜÜÜÜ')).toBe('ÜÜÜÜ');
	});
});