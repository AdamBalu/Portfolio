import { LovedTechnologies } from '@/components/my-skills/loved-technologies';

import { OtherTechnologies } from './other-technologies';

export const SkillGrid = () => (
	<div className="grid grid-cols-12 gap-3 mx-auto p-4 w-full h-min">
		<div className="col-span-5">
			<LovedTechnologies />
		</div>
		<div className="col-span-2" />
		<div className="col-span-5">
			<OtherTechnologies />
		</div>
	</div>
);
