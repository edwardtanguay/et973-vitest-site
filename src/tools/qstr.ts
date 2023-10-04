/**
* capitalizeFirstLetter()
*
* capitalizeFirstLetter('this is a test')
*
* "This is a test"
*/
export const capitalizeFirstLetter = (text: string) => {
	let r = text;
	r = r.trim();
	r = r.charAt(0).toUpperCase() + r.slice(1);
	return r;
}