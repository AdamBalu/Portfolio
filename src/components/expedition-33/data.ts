export type ChecklistItem = {
	id: string;
	name: string;
	lv?: string;
	note?: string;
};

export type ChecklistSection = {
	/** Omitted when the group holds a single, self-explanatory list. */
	sub?: string;
	items: ChecklistItem[];
};

export type ChecklistGroup = {
	id: string;
	title: string;
	caption: string;
	sections: ChecklistSection[];
};

export type ChecklistCategory = {
	id: string;
	label: string;
	blurb: string;
	groups: ChecklistGroup[];
};

export const CATEGORIES: ChecklistCategory[] = [
	{
		id: 'areas',
		label: 'Areas',
		blurb:
			'Every zone, with community level ballparks for normal difficulty. No area is missable — tick them in any order. Spoiler-prone names are trimmed.',
		groups: [
			{
				id: 'act-1',
				title: 'Act I',
				caption: 'Lv 1 – 25',
				sections: [
					{
						sub: 'story path',
						items: [
							{ id: 'lumiere', name: 'Lumière (prologue)', lv: 'Lv 1–3' },
							{ id: 'spring-meadows', name: 'Spring Meadows', lv: 'Lv 3–8' },
							{ id: 'flying-waters', name: 'Flying Waters', lv: 'Lv 8–13' },
							{
								id: 'ancient-sanctuary',
								name: 'Ancient Sanctuary',
								lv: 'Lv 13–17'
							},
							{
								id: 'gestral-village',
								name: "Gestral Village → Esquie's Nest",
								lv: 'Lv 15–18'
							},
							{
								id: 'stone-wave-cliffs',
								name: 'Stone Wave Cliffs',
								lv: 'Lv 18–22'
							}
						]
					},
					{
						sub: 'optional',
						items: [
							{
								id: 'hidden-gestral-arena',
								name: 'Hidden Gestral Arena',
								lv: 'Lv 15+'
							},
							{ id: 'yellow-harvest', name: 'Yellow Harvest', lv: 'Lv 18–22' },
							{
								id: 'swc-cave',
								name: 'Stone Wave Cliffs Cave',
								lv: 'Lv 20–25'
							},
							{ id: 'abbest-cave', name: 'Abbest Cave', lv: 'Lv 28+' },
							{
								id: 'red-woods',
								name: 'The Red Woods',
								lv: 'Any',
								note: "No enemies. The fountain is Bénisseur's quest — do NOT choose Attack afterwards"
							}
						]
					}
				]
			},
			{
				id: 'act-2',
				title: 'Act II',
				caption: 'Lv 22 – 45',
				sections: [
					{
						sub: 'story path',
						items: [
							{
								id: 'forgotten-battlefield',
								name: 'Forgotten Battlefield',
								lv: 'Lv 22–27'
							},
							{ id: 'mon-station', name: "Mon…'s Station", lv: 'Lv 25–28' },
							{
								id: 'old-x',
								name: '“Old …” (2nd word withheld)',
								lv: 'Lv 27–31'
							},
							{ id: 'visages', name: 'Visages', lv: 'Lv 30–34' },
							{ id: 'sirene', name: 'Sirène', lv: 'Lv 32–36' },
							{ id: 'monolith', name: 'The Monolith', lv: 'Lv 38–45' }
						]
					},
					{
						sub: 'optional',
						items: [
							{
								id: 'crushing-cavern',
								name: 'Crushing Cavern',
								lv: 'Lv 26–29'
							},
							{ id: 'esoteric-ruins', name: 'Esoteric Ruins', lv: 'Lv 27–30' },
							{ id: 'stone-quarry', name: 'Stone Quarry', lv: 'Lv 28–31' },
							{ id: 'carousel', name: 'The Carousel', lv: 'Lv 29–32' },
							{ id: 'coastal-cave', name: 'Coastal Cave', lv: 'Lv 33+' },
							{ id: 'sinister-cave', name: 'Sinister Cave', lv: 'Lv 34+' },
							{ id: 'falling-leaves', name: 'Falling Leaves', lv: 'Lv 34+' },
							{ id: 'the-crows', name: 'The Crows', lv: 'Lv 35–38' }
						]
					}
				]
			},
			{
				id: 'act-3',
				title: 'Act III',
				caption: 'Lv 50 – 80',
				sections: [
					{
						sub: 'story',
						items: [
							{
								id: 'act3-main',
								name: 'Main path → final dungeon',
								lv: 'Lv 50–60'
							}
						]
					},
					{
						sub: 'optional',
						items: [
							{
								id: 'sirenes-dress',
								name: "Sirène's Dress",
								lv: 'Lv 50–55',
								note: "Lune's quest"
							},
							{
								id: 'reacher',
								name: 'The Reacher',
								lv: 'Lv 50–55',
								note: "Maelle's quest"
							},
							{
								id: 'crimson-forest',
								name: 'Crimson Forest',
								lv: 'Lv 50–55',
								note: 'Floating island by the Endless Tower; 3-statue puzzle summons the boss'
							},
							{
								id: 'endless-night-sanctuary',
								name: 'Endless Night Sanctuary',
								lv: 'Lv 55–60'
							},
							{
								id: 'floating-cemetery',
								name: 'Floating Cemetery',
								lv: 'Lv 50–60',
								note: 'In the sky northwest of Falling Leaves; another white Nevron quest'
							},
							{ id: 'white-sands', name: 'White Sands', lv: 'Lv 55–65' },
							{ id: 'frozen-hearts', name: 'Frozen Hearts', lv: 'Lv 55–65' },
							{
								id: 'chosen-path',
								name: 'The Chosen Path',
								lv: 'Lv 60+',
								note: 'Solo 1v1 trials'
							},
							{ id: 'sky-island', name: 'Sky Island', lv: 'Lv 60–65' },
							{
								id: 'isle-of-the-eyes',
								name: 'Isle of the Eyes',
								lv: 'Lv 35–38',
								note: 'Low-level fight, but needs flight to reach — NE of The Reacher'
							},
							{
								id: 'sacred-river',
								name: 'Sacred River',
								lv: 'Lv 60+',
								note: "Opens only via Mon…'s max-bond quest; merchant with high-quality goods"
							},
							{
								id: 'dark-shores',
								name: 'Dark Shores',
								lv: 'Lv 65–70',
								note: 'Loot grabbable much earlier by dodging everything'
							},
							{
								id: 'endless-tower',
								name: 'Endless Tower',
								lv: '~50 → 90+',
								note: '11 stages × 3 trials. Main canvas in the centre = the ladder. Paintings up the back stairs = patch 1.5 superbosses, for maxed builds only'
							},
							{
								id: 'dark-gestral-arena',
								name: 'Dark Gestral Arena',
								lv: 'Lv 70–80'
							}
						]
					}
				]
			},
			{
				id: 'endgame',
				title: 'Endgame',
				caption: 'Lv 75+',
				sections: [
					{
						sub: 'all optional',
						items: [
							{ id: 'fountain', name: 'The Fountain', lv: 'Lv 75+' },
							{ id: 'flying-manor', name: 'Flying Manor', lv: 'Lv 75+' },
							{
								id: 'painting-workshop',
								name: 'Painting Workshop',
								lv: 'Lv 75–80+'
							},
							{
								id: 'sunless-cliffs',
								name: 'Sunless Cliffs',
								lv: 'Lv 80+',
								note: 'One character enters at a time'
							},
							{
								id: 'ver-drafts',
								name: "Ver…'s Drafts",
								lv: 'Lv 80+',
								note: 'Plus its inner zone'
							},
							{
								id: 'ren-drafts',
								name: "Ren…'s Drafts",
								lv: 'Lv 80+',
								note: 'Includes The Abyss — hardest content in the game'
							},
							{
								id: 'monolith-peak',
								name: 'Monolith Peak',
								lv: 'Lv 80+',
								note: 'Superboss'
							}
						]
					}
				]
			},
			{
				id: 'free-roam',
				title: 'Free-roam',
				caption: 'Any level, no forced combat',
				sections: [
					{
						items: [
							{ id: 'blades-graveyard', name: "Blades' Graveyard" },
							{ id: 'boat-graveyard', name: 'Boat Graveyard' },
							{ id: 'ancient-gestral-city', name: 'Ancient Gestral City' },
							{ id: 'twilight-quarry', name: 'Twilight Quarry' },
							{ id: 'lost-woods', name: 'Lost Woods' },
							{
								id: 'gestral-beaches',
								name: 'Gestral Beaches ×5',
								note: '1st after Flying Waters, 2nd–3rd need swim, 4th (east of Sirène) needs coral-break, 5th (SE of Sunless Cliffs) needs flight'
							},
							{ id: 'white-tree', name: 'White Tree' },
							{ id: 'the-meadows', name: 'The Meadows' },
							{ id: 'flying-casino', name: 'Flying Casino' },
							{ id: 'small-bourgeon', name: 'The Small Bourgeon' }
						]
					}
				]
			}
		]
	},
	{
		id: 'quests',
		label: 'Nevron quests',
		blurb:
			'Spare every Nevron you meet and Blanche pays out at the end. Chalier is the one exception — he has to die when he asks.',
		groups: [
			{
				id: 'nevron',
				title: 'Nevron quests',
				caption: '10 total — spare them all until Blanche pays out',
				sections: [
					{
						items: [
							{
								id: 'nq-jar',
								name: 'Jar',
								note: 'Spring Meadows — bring Resin, then shoot his torch'
							},
							{
								id: 'nq-demineur',
								name: 'Démineur',
								note: 'Flying Waters — return his mine → Deminerim weapon for Lune'
							},
							{
								id: 'nq-bourgeon',
								name: 'Small Bourgeon',
								note: 'The Small Bourgeon — bring skin, then rest at a flag and return'
							},
							{
								id: 'nq-hexga',
								name: 'Hexga',
								note: 'Stone Wave Cliffs — find 3 glowing crystals → Auto Shell'
							},
							{
								id: 'nq-benisseur',
								name: 'Bénisseur',
								note: 'Red Woods fountain — pour 5,000 → 10,000 → 25,000 → 50,000 Chroma → Recovery Pictos'
							},
							{
								id: 'nq-troubadour',
								name: 'Troubadour',
								note: 'Stone Quarry — fetch Light'
							},
							{
								id: 'nq-grandis',
								name: 'Grandis',
								note: 'The Carousel — guides disagree whether it counts toward the 10; do it anyway'
							},
							{
								id: 'nq-portier',
								name: 'Portier',
								note: 'Esoteric Ruins — bring wooden boards → Protecting Heal'
							},
							{
								id: 'nq-danseuse',
								name: 'Danseuse Teacher',
								note: 'Frozen Hearts — parry trial, retryable → Danseuse outfit for Lune'
							},
							{
								id: 'nq-chalier',
								name: 'Chalier',
								note: 'Floating Cemetery — the ONE you must kill when asked, or Auto Powerful is lost forever'
							},
							{
								id: 'nq-blanche',
								name: 'Blanche',
								note: 'The Fountain, Act 3 — 100 Lumina if you spared everyone; attacks you if not'
							}
						]
					}
				]
			}
		]
	},
	{
		id: 'collectibles',
		label: 'Collectibles',
		blurb:
			'None of these are missable, but several need Esquie fully upgraded before you can reach them.',
		groups: [
			{
				id: 'collectibles',
				title: 'Collectibles',
				caption: 'None missable unless noted',
				sections: [
					{
						items: [
							{
								id: 'col-gestrals',
								name: 'Lost Gestrals ×9',
								note: 'Last three need flight; one is on a floating island south of the Endless Tower'
							},
							{
								id: 'col-journals',
								name: 'Expedition journals ×49',
								note: 'Needs the Old Key'
							},
							{ id: 'col-records', name: 'Music records ×33' },
							{ id: 'col-monoco', name: 'Monoco skills ×44' },
							{
								id: 'col-gestralgames',
								name: 'Gestral games ×5',
								note: 'One per beach — middle difficulty is enough, except gold on the race'
							},
							{ id: 'col-relationships', name: 'Relationship interactions ×35' }
						]
					}
				]
			}
		]
	},
	{
		id: 'missables',
		label: 'Missables',
		blurb:
			'The only things on this list that a save file can put permanently out of reach. Everything else can be picked up later.',
		groups: [
			{
				id: 'missables',
				title: 'Missables',
				caption: 'One-time — guard these',
				sections: [
					{
						items: [
							{
								id: 'ms-mime',
								name: 'Mime in Lumière (prologue)',
								note: 'Only unrecoverable achievement. Its record is re-obtainable at the Opera House in Act 3'
							},
							{
								id: 'ms-oldkey',
								name: 'Old Key (prologue)',
								note: 'Since patch 1.5 also findable in the final area — left of the first steps up from the docks'
							},
							{
								id: 'ms-piano',
								name: 'Piano camp scene',
								note: 'After the first Axon in Act 2; awards a record, seems lost once Act 2 ends'
							},
							{
								id: 'ms-maelle7',
								name: 'Maelle relationship Lv 7',
								note: 'Keep camping with everyone'
							},
							{
								id: 'ms-arena',
								name: 'Dark Gestral Arena final challenge',
								note: 'Accept AND win, or the arena is destroyed and its reward is gone'
							},
							{
								id: 'ms-prologue-fits',
								name: 'Prologue outfits',
								note: "Richard near the statues; Jules before Emma's speech"
							}
						]
					}
				]
			}
		]
	}
];

export const groupItems = (group: ChecklistGroup) =>
	group.sections.flatMap(section => section.items);

export const categoryItems = (category: ChecklistCategory) =>
	category.groups.flatMap(groupItems);

export const ALL_ITEMS = CATEGORIES.flatMap(categoryItems);

export const ALL_IDS = new Set(ALL_ITEMS.map(item => item.id));

export const TOTAL = ALL_ITEMS.length;

export const countDone = (
	items: ChecklistItem[],
	checked: ReadonlySet<string>
) => items.reduce((sum, item) => (checked.has(item.id) ? sum + 1 : sum), 0);
