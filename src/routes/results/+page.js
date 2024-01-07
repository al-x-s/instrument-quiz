/** @type {import('./$types').PageLoad} */
export function load({ url }) {
	const params = [
		{ Flute: 'fl' },
		{ Clarinet: 'cl' },
		{ Saxophone: 'sax' },
		{ 'Baritone Horn': 'bar' },
		{ 'Bass Guitar': 'bgtr' },
		{ Percussion: 'perc' },
		{ Trombone: 'trb' },
		{ Trumpet: 'tpt' }
	];

	const results = [];

	params.forEach((obj) => {
		const inst = Object.keys(obj)[0];
		const slug = Object.values(obj)[0];
		const points = url.searchParams.get(slug);
		results.push({ instrument: inst, points: +points });
	});

	results.sort((a, b) => b.points - a.points);

	return { results };
}

/*


QUERY PARAMS

?
fl=10&
cl=10&
sax=10&
trb=10&
tpt=10&
perc=10&
bgtr=10&
bar=10

STRING

http://localhost:5173/resultsWIP/?fl=8&cl=9&sax=5&trb=-4&tpt=12&perc=11&bgtr=15&bar=14

*/
