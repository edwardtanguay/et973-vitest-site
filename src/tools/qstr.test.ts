import { capitalizeFirstLetter } from "./qstr";

describe('capitalizeFirstLetter()', () => {
	it('uppercases correct letters', () => {
		expect(capitalizeFirstLetter('testing')).toBe('Testing');
		expect(capitalizeFirstLetter('TESTING')).toBe('TESTING');
		expect(capitalizeFirstLetter('T8282829383')).toBe('T8282829383');
	});
	it('handles edge cases', () => {
		expect(capitalizeFirstLetter(' testing')).toBe('Testing');
		// expect(capitalizeFirstLetter('')).toBe('Testing');
	});
});