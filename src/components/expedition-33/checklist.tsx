'use client';

import Link from 'next/link';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import {
	CATEGORIES,
	TOTAL,
	categoryItems,
	countDone,
	groupItems,
	type ChecklistCategory,
	type ChecklistItem
} from './data';
import { fromCode, toCode } from './code';
import { readState, writeState } from './storage';
import { MAX_PETALS, makePetals, type Origin, type Petal } from './petals';
import { GroupBlock } from './group-block';
import styles from './styles.module.css';

type Flash = {
	text: string;
	bad: boolean;
};

type Sheen = {
	groupId: string;
	nonce: number;
};

const findGroup = (groupId: string) =>
	CATEGORIES.flatMap(category => category.groups).find(
		group => group.id === groupId
	);

export const Checklist = () => {
	const [checked, setChecked] = useState<Set<string>>(new Set());
	const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
	const [openCategories, setOpenCategories] = useState<Set<string>>(
		new Set([CATEGORIES[0].id])
	);
	const [petals, setPetals] = useState<Petal[]>([]);
	const [sheen, setSheen] = useState<Sheen | null>(null);
	const [stat, setStat] = useState<Flash | null>(null);
	const [message, setMessage] = useState<Flash | null>(null);
	const [codeInput, setCodeInput] = useState('');

	const reduced = useRef(false);
	const dirty = useRef(false);
	const petalId = useRef(0);
	const nonce = useRef(0);
	const statTimer = useRef<number | null>(null);
	const timers = useRef<number[]>([]);

	const allDone = checked.size === TOTAL;

	/* ---------- lifecycle ---------- */

	useEffect(() => {
		reduced.current = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		const saved = readState();
		if (saved) {
			setChecked(saved.checked);
			setCollapsed(saved.collapsed);
			setOpenCategories(saved.openCategories);
		} else {
			setStat({
				text: 'Auto-save unavailable here — keep a save code',
				bad: true
			});
		}

		const pending = timers.current;
		return () => {
			pending.forEach(window.clearTimeout);
			if (statTimer.current !== null) window.clearTimeout(statTimer.current);
		};
	}, []);

	useEffect(() => {
		if (!dirty.current) return;

		const timer = window.setTimeout(() => {
			const result = writeState({ checked, collapsed, openCategories });
			if (result.ok) {
				flashStat({ text: 'Saved', bad: false });
			} else if (result.reason === 'unavailable') {
				setStat({
					text: 'Auto-save unavailable here — keep a save code',
					bad: true
				});
			} else if (result.reason === 'unverified') {
				setStat({
					text: "Save didn't stick — copy your save code below",
					bad: true
				});
			} else {
				setStat({
					text: `Couldn't save (${result.reason}) — copy your save code below`,
					bad: true
				});
			}
		}, 300);

		return () => window.clearTimeout(timer);
		// flashStat is stable for the component's lifetime.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [checked, collapsed, openCategories]);

	/* ---------- flourishes ---------- */

	const flashStat = (next: Flash) => {
		if (statTimer.current !== null) window.clearTimeout(statTimer.current);
		setStat(next);
		statTimer.current = window.setTimeout(() => setStat(null), 1800);
	};

	const later = (fn: () => void, delay: number) => {
		const id = window.setTimeout(fn, delay);
		timers.current.push(id);
	};

	const buzz = (pattern: number | number[]) => {
		if (reduced.current) return;
		try {
			navigator.vibrate?.(pattern);
		} catch {
			// Vibration is decoration; a refusal is never worth surfacing.
		}
	};

	const spawn = (
		cx: number,
		cy: number,
		count: number,
		options?: Parameters<typeof makePetals>[3]
	) => {
		if (reduced.current) return;
		setPetals(current => {
			if (current.length > MAX_PETALS) return current;
			const born = makePetals(cx, cy, count, options).map(style => {
				petalId.current += 1;
				return { id: petalId.current, style };
			});
			return [...current, ...born];
		});
	};

	const celebrate = (groupId: string) => {
		nonce.current += 1;
		setSheen({ groupId, nonce: nonce.current });

		const head = document.querySelector(`[data-e33-group="${groupId}"]`);
		if (head) {
			const rect = head.getBoundingClientRect();
			for (let step = 0; step < 9; step += 1) {
				const x = rect.left + (rect.width / 9) * step;
				later(
					() => spawn(x, rect.top + rect.height / 2, 3, { goldChance: 0.35 }),
					step * 38
				);
			}
		}
		buzz([14, 60, 26]);
	};

	const finale = () => {
		const width = window.innerWidth;
		for (let i = 0; i < 56; i += 1) {
			later(
				() =>
					spawn(Math.random() * width, -12, 1, {
						dir: 'down',
						dxMin: -60,
						dxMax: 60,
						goldChance: 0.3
					}),
				Math.random() * 900
			);
		}
		buzz([16, 70, 16, 70, 32]);
	};

	/* ---------- mutations ---------- */

	const isGroupComplete = (groupId: string, set: ReadonlySet<string>) => {
		const group = findGroup(groupId);
		return group ? groupItems(group).every(item => set.has(item.id)) : false;
	};

	const commit = (
		next: Set<string>,
		groupId: string,
		turningOn: boolean,
		wasComplete: boolean
	) => {
		dirty.current = true;
		setChecked(next);
		if (!turningOn) return;
		if (!wasComplete && isGroupComplete(groupId, next)) celebrate(groupId);
		if (next.size === TOTAL) finale();
	};

	const handleToggleItem = (
		item: ChecklistItem,
		groupId: string,
		origin: Origin | null
	) => {
		const turningOn = !checked.has(item.id);
		const wasComplete = isGroupComplete(groupId, checked);
		const next = new Set(checked);

		if (turningOn) next.add(item.id);
		else next.delete(item.id);

		if (turningOn && origin) {
			spawn(origin.x, origin.y, 8);
			buzz(9);
		}
		commit(next, groupId, turningOn, wasComplete);
	};

	const handleBulk = (
		groupId: string,
		items: ChecklistItem[],
		turningOn: boolean
	) => {
		const wasComplete = isGroupComplete(groupId, checked);
		const next = new Set(checked);

		items.forEach(item => {
			if (turningOn) next.add(item.id);
			else next.delete(item.id);
		});
		commit(next, groupId, turningOn, wasComplete);
	};

	const handleToggleCategory = (categoryId: string) => {
		dirty.current = true;
		setOpenCategories(current => {
			const next = new Set(current);
			if (next.has(categoryId)) next.delete(categoryId);
			else next.add(categoryId);
			return next;
		});
	};

	const handleToggleCollapse = (groupId: string) => {
		dirty.current = true;
		setCollapsed(current => {
			const next = new Set(current);
			if (next.has(groupId)) next.delete(groupId);
			else next.add(groupId);
			return next;
		});
	};

	/* ---------- save codes ---------- */

	const currentCode = toCode(checked);

	const handleCopy = async () => {
		setCodeInput(currentCode);
		try {
			await navigator.clipboard.writeText(currentCode);
			setMessage({ text: 'Copied. Paste it somewhere safe.', bad: false });
		} catch {
			setMessage({
				text: "Couldn't auto-copy — select the code above and copy it manually.",
				bad: true
			});
		}
	};

	const handleRestore = () => {
		const restored = fromCode(codeInput || currentCode);
		if (!restored) {
			setMessage({
				text: "That code doesn't look right — it should start with E33-",
				bad: true
			});
			return;
		}
		dirty.current = true;
		setChecked(restored);
		setMessage({
			text: `Restored ${restored.size} ticks from the code.`,
			bad: false
		});
	};

	const handleClear = () => {
		if (!window.confirm('Clear every tick?')) return;
		dirty.current = true;
		setChecked(new Set());
		setMessage(null);
	};

	/* ---------- render ---------- */

	const tally = (category: ChecklistCategory) => {
		const items = categoryItems(category);
		return { done: countDone(items, checked), total: items.length };
	};

	return (
		<MotionConfig reducedMotion="user">
			<div className={`${styles.page} ${allDone ? styles.done : ''}`}>
				<div className={styles.backdrop} aria-hidden="true" />

				<div className={styles.wrap}>
					<header className={styles.masthead}>
						<div className={styles.ghost} aria-hidden="true">
							33
						</div>
						<div className={styles.mastLine}>
							<h1 className={styles.title}>
								Expedition 33
								<span className={styles.stroke} aria-hidden="true" />
							</h1>
							<div className={styles.tally}>
								<span key={checked.size} className={styles.count}>
									{checked.size} / {TOTAL}
								</span>
								<small className={styles.tallyLabel}>
									{allDone ? 'canvas cleared' : 'cleared'}
								</small>
							</div>
						</div>

						<div className={styles.mastLine}>
							<div className={styles.track}>
								<div
									className={styles.fill}
									style={{ width: `${(checked.size / TOTAL) * 100}%` }}
								/>
							</div>
						</div>

						<div
							className={`${styles.stat} ${stat ? styles.statShow : ''} ${
								stat?.bad ? styles.statBad : ''
							}`}
							role="status"
						>
							{stat?.text ?? ''}
						</div>
					</header>

					<main>
						{CATEGORIES.map(category => {
							const { done, total } = tally(category);
							const open = openCategories.has(category.id);
							// A lone group hides its own heading, so the category button
							// stands in as the anchor for its completion celebration.
							const soleGroup =
								category.groups.length === 1 ? category.groups[0] : null;

							return (
								<section key={category.id} className={styles.category}>
									<motion.button
										type="button"
										className={`${styles.categoryHead} ${open ? styles.categoryHeadOpen : ''}`}
										aria-expanded={open}
										data-e33-group={soleGroup?.id}
										onClick={() => handleToggleCategory(category.id)}
										whileTap={{ scale: 0.97 }}
										whileHover={{ scale: 1.008 }}
										transition={{ type: 'spring', stiffness: 520, damping: 22 }}
									>
										<span
											className={`${styles.categoryBar} ${done === total ? styles.categoryBarDone : ''}`}
											style={{ width: `${(done / total) * 100}%` }}
											aria-hidden="true"
										/>
										<span className={styles.categoryLabel}>
											{category.label}
										</span>
										<span className={styles.categoryMeta}>
											<span
												className={`${styles.categoryCount} ${done === total ? styles.categoryCountDone : ''}`}
											>
												{done} / {total}
											</span>
											<motion.span
												className={styles.catChevron}
												animate={{ rotate: open ? 45 : -45, y: open ? -2 : 1 }}
												transition={{
													type: 'spring',
													stiffness: 400,
													damping: 18
												}}
												aria-hidden="true"
											/>
										</span>
									</motion.button>

									<AnimatePresence initial={false}>
										{open ? (
											<motion.div
												key="body"
												className={styles.categoryBody}
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: 'auto', opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{
													height: {
														type: 'spring',
														stiffness: 180,
														damping: 24
													},
													opacity: { duration: 0.18 }
												}}
											>
												<div className={styles.categoryCard}>
													<p className={styles.blurb}>{category.blurb}</p>
													{category.groups.map(group => (
														<GroupBlock
															key={group.id}
															group={group}
															checked={checked}
															collapsed={collapsed.has(group.id)}
															showHeading={soleGroup === null}
															sheenNonce={
																sheen?.groupId === group.id ? sheen.nonce : null
															}
															onToggleCollapse={handleToggleCollapse}
															onToggleItem={handleToggleItem}
															onBulk={handleBulk}
														/>
													))}
													{category.id === 'areas' ? (
														<p className={styles.foot}>
															Also out there: small Manor rooms behind
															mysterious doors, scattered across the whole game
															— trivial to endgame difficulty depending on where
															you find them.
														</p>
													) : null}
												</div>
											</motion.div>
										) : null}
									</AnimatePresence>
								</section>
							);
						})}
					</main>

					<section className={styles.saver}>
						<h3>Save code</h3>
						<p>
							Your ticks auto-save in this browser, and every save is verified
							by reading it back. The code below is a backup: copy it anywhere,
							and paste it here later to restore — on another device too.
						</p>
						<div className={styles.bar}>
							<input
								className={styles.codebox}
								value={codeInput || currentCode}
								onChange={event => setCodeInput(event.target.value)}
								placeholder="E33-…"
								spellCheck={false}
								autoComplete="off"
								aria-label="Save code"
							/>
							<button type="button" className={styles.btn} onClick={handleCopy}>
								Copy code
							</button>
							<button
								type="button"
								className={styles.btn}
								onClick={handleRestore}
							>
								Restore from code
							</button>
						</div>
						<div
							className={`${styles.msg} ${message?.bad ? styles.msgBad : ''}`}
							role="status"
						>
							{message?.text ?? ''}
						</div>
						<div className={styles.bar} style={{ marginTop: 14 }}>
							<button
								type="button"
								className={`${styles.btn} ${styles.quiet}`}
								onClick={handleClear}
							>
								Clear all ticks
							</button>
						</div>
					</section>

					<p className={styles.back}>
						<Link href="/">← Back to the portfolio</Link>
					</p>
				</div>

				{petals.map(petal => (
					<span
						key={petal.id}
						className={styles.petal}
						style={petal.style}
						onAnimationEnd={() =>
							setPetals(current => current.filter(one => one.id !== petal.id))
						}
					/>
				))}
			</div>
		</MotionConfig>
	);
};
