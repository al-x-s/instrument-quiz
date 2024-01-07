import { writable } from 'svelte/store';

export const scores = writable({
	Saxophone: 10,
	'Baritone Horn': 10,
	'Bass Guitar': 10,
	Clarinet: 10,
	Flute: 10,
	Percussion: 10,
	Trombone: 10,
	Trumpet: 10
});
