import {
	Bot,
	BrainCircuit,
	Plug,
	ShieldCheck,
	Sparkles,
	Terminal,
	type LucideIcon
} from 'lucide-react';

export type CurrentSkill = {
	label: string;
	icon: LucideIcon;
};

// What actually gets reached for today — shown under the classic tech list.
export const currentSkills: CurrentSkill[] = [
	{ label: 'Claude Code', icon: Terminal },
	{ label: 'Agentic development', icon: Bot },
	{ label: 'AI skills & workflows', icon: Sparkles },
	{ label: 'MCP & tool integration', icon: Plug },
	{ label: 'Prompt & context engineering', icon: BrainCircuit },
	{ label: 'Evals & guardrails', icon: ShieldCheck }
];
