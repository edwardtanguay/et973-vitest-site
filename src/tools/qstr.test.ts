import { capitalizeFirstLetter } from "./qstr";

describe('capitalizeFirstLetter()', () => {
	it('uppercases correct letters', () => {
		expect(capitalizeFirstLetter('testing')).toBe('Testing');
	});
});