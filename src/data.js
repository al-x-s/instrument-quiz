export const questions = [
	{
		id: 1,
		category: 'Personality',
		question: 'My child enjoys patterns, maths and repetition.',
		score: [{ instrument: 'Percussion', points: 1 }]
	},
	{
		id: 2,
		category: 'Personality',
		question: 'My child enjoys working in a group',
		score: [
			{ instrument: 'Flute', points: 1 },
			{ instrument: 'Clarinet', points: 1 },
			{ instrument: 'Saxophone', points: 1 }
		]
	},
	{
		id: 3,
		category: 'Personality',
		question: 'My child is confident working alone/being different from the crowd.',
		score: [
			{ instrument: 'Percussion', points: 1 },
			{ instrument: 'Trombone', points: 1 },
			{ instrument: 'Baritone Horn', points: 1 }
		]
	},
	{
		id: 4,
		category: 'Personality',
		question: 'My child may struggle with resilience if they find things challenging.',
		score: [
			{ instrument: 'Flute', points: -2 },
			{ instrument: 'Trumpet', points: -2 },
			{ instrument: 'Bass Guitar', points: -2 },
			{ instrument: 'Percussion', points: -1 }
		]
	},
	{
		id: 5,
		category: 'Personality',
		question: 'My child loves the spotlight and being the center of attention.',
		score: [
			{ instrument: 'Trumpet', points: 2 },
			{ instrument: 'Trombone', points: 1 },
			{ instrument: 'Percussion', points: 1 }
		]
	},
	{
		id: 6,
		category: 'Personality',
		question: 'My child struggles to concentrate at times and is easily distracted.',
		score: [
			{ instrument: 'Bass Guitar', points: -2 },
			{ instrument: 'Percussion', points: -2 }
		]
	},
	{
		id: 7,
		category: 'Personality',
		question: 'My child has excellent attention to detail, is tidy and organised.',
		score: [{ instrument: 'Clarinet', points: 1 }]
	},
	{
		id: 8,
		category: 'Physical Attributes',
		question: 'My child is below average height for a year 2 student.',
		score: [
			{ instrument: 'Bass Guitar', points: -4 },
			{ instrument: 'Trombone', points: -2 },
			{ instrument: 'Flute', points: -2 }
		]
	},
	{
		id: 9,
		category: 'Physical Attributes',
		question: 'My child has strong fingers/grip.',
		score: [
			{ instrument: 'Clarinet', points: 1 },
			{ instrument: 'Bass Guitar', points: 1 }
		]
	},
	{
		id: 10,
		category: 'Physical Attributes',
		question: 'My child has longer than average fingers.',
		score: [
			{ instrument: 'Saxophone', points: 1 },
			{ instrument: 'Bass Guitar', points: 1 }
		]
	},
	{
		id: 11,
		category: 'Physical Attributes',
		question: 'My child may need major dental work (more than just braces) in the future.',
		score: [
			{ instrument: 'Trumpet', points: -1 },
			{ instrument: 'Trombone', points: -1 },
			{ instrument: 'Baritone Horn', points: -1 },
			{ instrument: 'Clarinet', points: -1 }
		]
	},
	{
		id: 12,
		category: 'Physical Attributes',
		question:
			'My child can blow a small, steady stream of air for at least 5 seconds without puffing out their cheeks.',
		score: [{ instrument: 'Flute', points: 2 }]
	},
	{
		id: 13,
		category: 'Skills',
		question: 'My child has learned the piano (with an experienced tutor) for at least 2 years.',
		score: [{ instrument: 'Percussion', points: 2 }]
	},
	{
		id: 14,
		category: 'Skills',
		question: 'My child has great listening skills (can sing/hum confidently and in tune).',
		score: [
			{ instrument: 'Trumpet', points: 2 },
			{ instrument: 'Trombone', points: 2 },
			{ instrument: 'Baritone Horn', points: 2 }
		]
	},
	{
		id: 15,
		category: 'Skills',
		question: 'My child has great fine motor skills (building lego, typing, etc).',
		score: [
			{ instrument: 'Flute', points: 1 },
			{ instrument: 'Clarinet', points: 1 },
			{ instrument: 'Saxophone', points: 1 },
			{ instrument: 'Bass Guitar', points: 1 }
		]
	},
	{
		id: 16,
		category: 'Skills',
		question: 'My child has great gross motor skills (kick a ball, ride a bike, skipping, etc).',
		score: [
			{ instrument: 'Trombone', points: 2 },
			{ instrument: 'Percussion', points: 2 },
			{ instrument: 'Baritone Horn', points: 1 },
			{ instrument: 'Bass Guitar', points: 1 }
		]
	},
	{
		id: 17,
		category: 'Your Family',
		question: 'Space is an issue in our home.',
		score: [{ instrument: 'Percussion', points: -4 }]
	},
	{
		id: 18,
		category: 'Your Family',
		question: 'We need an instrument that is quiet.',
		score: [
			{ instrument: 'Saxophone', points: -3 },
			{ instrument: 'Clarinet', points: -2 },
			{ instrument: 'Percussion', points: -2 }
		]
	},
	{
		id: 19,
		category: 'Your Family',
		question: 'Cost is a factor in our decision.',
		score: [
			{ instrument: 'Saxophone', points: -2 },
			{ instrument: 'Baritone Horn', points: -2 },
			{ instrument: 'Percussion', points: -1 }
		]
	}
];

export const instrumentData = {
	Saxophone: {
		name: 'Saxophone',
		info: 'https://teachingservices.com.au/sax/',
		slug: 'sax',
		image: '/src/lib/images/saxophone.svg',
		attributionName: 'Freepik',
		attributionLink: 'https://www.flaticon.com/free-icons/saxophone',
		description: 'Saxophonists are tall, dextrous and have great breath control.'
	},
	'Bass Guitar': {
		name: 'Bass Guitar',
		info: 'https://teachingservices.com.au/bassguitar/',
		slug: 'bgtr',
		image: '/src/lib/images/bass-guitar.svg',
		attributionName: 'Freepik',
		attributionLink: 'https://www.flaticon.com/free-icons/bass-guitar',
		description:
			'Bass guitarists are tall, dextrous and disciplined. When faced with a challenge they work hard to overcome it.'
	},
	'Baritone Horn': {
		name: 'Baritone Horn',
		info: 'https://teachingservices.com.au/euphobaritone/',
		slug: 'bar',
		image: '/src/lib/images/baritone-horn.svg',
		attributionName: 'Freepik',
		attributionLink: 'https://www.flaticon.com/free-icons/tuba',
		description:
			'Baritone players are strong, have great breath control and a natural ear for music.'
	},
	Clarinet: {
		name: 'Clarinet',
		info: 'https://teachingservices.com.au/clarinet/',
		slug: 'cl',
		image: '/src/lib/images/clarinet.svg',
		attributionName: 'Freepik',
		attributionLink: 'https://www.flaticon.com/free-icons/clarinet',
		description: 'Clarinetists are dextrous, determined and have great breath control.'
	},
	Flute: {
		name: 'Flute',
		image: '/src/lib/images/flute.svg',
		slug: 'fl',
		attributionName: 'Freepik',
		attributionLink: 'https://www.flaticon.com/free-icons/flute',
		description: 'Flautists are dextrous, determined and have great breath control.'
	},
	Percussion: {
		name: 'Percussion',
		info: 'https://teachingservices.com.au/percussion/',
		slug: 'perc',
		image: '/src/lib/images/percussion.svg',
		attributionName: 'Freepik',
		attributionLink: 'https://www.flaticon.com/free-icons/drum',
		description:
			"Percussionists thrive in challenging environments. They're natural leaders with an impeccable sense of time and co-ordination."
	},
	Trombone: {
		name: 'Trombone',
		info: 'https://teachingservices.com.au/trombone/',
		slug: 'trb',
		image: '/src/lib/images/trombone.svg',
		attributionName: 'Nikita Golubev',
		attributionLink: 'https://www.flaticon.com/free-icons/trombone',
		description: 'Trombonists are strong, have great breath control and a natural ear for music.'
	},
	Trumpet: {
		name: 'Trumpet',
		info: 'https://teachingservices.com.au/trumpet/',
		slug: 'tpt',
		image: '/src/lib/images/trumpet.svg',
		attributionName: 'Freepik',
		attributionLink: 'https://www.flaticon.com/free-icons/trumpet',
		description: 'Trumpeters are dextrous, have great breath control and a natural ear for music.'
	}
};

export const places = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
