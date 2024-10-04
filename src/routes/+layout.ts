import type { LayoutData } from './$types';

export const load: LayoutData = async () => {
	return {
		tasks: [
			{
				category: 'Rhythm',
				name: 'Single Stroke Rolls',
				description: 'Practice single stroke rolls, subdivision: 16th notes',
				duration: '4m',
				bpm: '60'
			},
			{
				category: 'Rhythm',
				name: 'Pyramid',
				description: 'Practice single stroke rolls, subdivision: 16th notes',
				duration: '4m',
				bpm: '60'
			},
			{
				category: 'Scales',
				name: 'Scale in 3rds #1',
				description:
					'Practice scale in 3rds ascending/descending around the circle of fifths. Use scale pattern #1 (one position, no shifting)',
				duration: '10m',
				bpm: '80'
			}
		]
	};
};
