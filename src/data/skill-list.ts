import { type Skill } from '@/types/skill';

export const skillList: Skill[] = [
	{
		iconSrc: '/static/skills/typescript.svg',
		heading: 'Typescript',
		description:
			'I love this language, been working with it for about 2 years now. Made several projects with it.',
		starCount: 3
	},
	{
		iconSrc: '/static/skills/react.svg',
		heading: 'React',
		description:
			'I know React for about 2 years now. I would love to keep improving and learning this language further.',
		starCount: 3
	},
	{
		iconSrc:
			'data:image/png;base64,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',
		heading: 'Next.js',
		description:
			'This is quite a novelty for me, but so far I enjoy optimizing websites with it and love the fact that there is a lot to learn.',
		starCount: 2
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtUlEQVR4nO2XW0hTcRzH10NURhFEQRBERFJ2Q7vSY9lDBBU6W1lWqK0sNXfRTc/OmdPptozKzKKXHoJ6KijoIWhRdDsQ9eK2M93cdFtE4ZyXTKakv/ivztzlnF1o21lwvvB5/3zOn/PwEwj48ePHLysnxJxQwkAR5oAauQuaaz1xua+4O/qzfSX4DYv+Df3CV0kHFLTZoVjFHFGMOeBinIi7igcjXnwXICbaVmVWHm2T3gb57TYoYokQqpxQVc8c0al8PErLByNaV2dOng5AbGu3s0aUYA441zAYJt+heD4+hO8Ok6f5oV2TGfnQgECEzgZHVQ7ml8CcUK4YCMhr699MDBF7GOVpxlrWgt+Qk175yADEVp0NjuBsLzEAyqYX49/jyM9FrAO/Pid98kwBiC06OxzGo1+iFP/s/0rsnklEPhihyWUKSI08WwBis84Gh4i5CBHeM2WVimddkjLwqfMTDkCMajaAX5/iL09vxTUrsEbobXCQcEAxTk1T0sqZwboKQLgkZ8BHJBcxot4Ik7ocoyDl67bA8uu9kMcSsV3XM22SiX/R8jTuurMwnMRLjDbnpvbLhwYglt2wQp4h4gUM1MzH+vNR8kEk5TCMF3AoHxKAWNI5F5Gnt86+U1yaYpUPRlSAl9jBkXxEAGLxTSog/7Kx1h9XPgQvvpPp502zPEPAvG4zPJR3TPbXVINLcjrhAMSQag94iUx9eXqh8rcscEd5Y8JUcR0Q/dVScEnLkovA9sJYxuQFAsGCLjrADFewrnFansZ2sQHc0pMJB3xTFmZOHm1JJwWLbppmW4lbY5HyNH1VTeCWncg+ebSlnRb4JK35yiZPYz2vBo9MlF3yaB9kde548nMRLeCRHYuSfyS9N6CudesFXKzvkiIh+WCEWAtf5CVBeQlm9NE3AicRpMgIvVVNSUVQYh145MIwec4iSJERAhEXCDBVXks44nLT2yh5TiLIvwEI6wU1mCriR5Sq3/pOK8NPzKiIGk9zxgNIkREosRbMlVdjyL/2BW4ElRPKlH9OTE5fgowIQFjEV8Bc2cEuT5MNESRDAAIJm88Z2OVDIk41chhBsgQgespvg0XcDgfaXvkKNf0shz7HEWSMAMT+tjfDgQNHZ4f92RhBxpLXvveFnZjZGEEmKp9MRCZ/bJJB/rjmmWt9xH0cjh32ZUsEGSF/UvN0AN0H87soWG/oY4/IlpcgGeRp/osIkkU+pRGNaYyIJZ+qCCGWxohTmieDseT/iwh+/PjxE6R7vwHpwkGS7i/bmgAAAABJRU5ErkJggg==',
		heading: 'Kotlin',
		description:
			"I developed a few mobile apps with it, one for my Bachelor's thesis. Much better than Java!",
		starCount: 3
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEFUlEQVR4nO3WzW/bdADG8WcMWrHLNA0Q2iRUCYkrY9K2vwHxMl6GQGIdSCCNG4UTCLFyQ+KG4LC8kaxdk8Z13trUdmI7aZukea1TssRdmrTdJJCohnpc2tHWyHHaxHGabqAmOfiRPqdE6fdX58WAPn369OnTp69h+XwfuHvnMbP2LvjVawivDiK0ehlc6TyIfB96coR0HKGVj8Gv0AitbCG0ItWVJfA1XPkR+FIQbPkTZDLPoCcWKl4CV87vR+4rSeCaLSvYqjUElt/qbjxfGgRX2tJEss2KimCjuwpm6dfuXA22+AaCy/+oIoMHRAYaLdUxNbQ4CWq5v3PxgfILCBQfHBrJNBLr6D2FuukCg8nMic4cgFkyKZHiDmiRBiPeAFX4DEzhO9DiOOjCw5aR1J682nSNPxcBmzl5tPFTxbNgxC3QIg/qzsstn8OKp0HlRzSB03fU/HtydVM5Ad6FM20b/Nlz8C2KmMpefPID0EsDoMSh6lfnYfPnvsFUblcVqETW/K42KVuU4MtuwJcdgj93SvV6nuwAfMJP8GYr8AirCIefxpFvMnsdU4s79cBaZCNfNVrLK2zDI9yHR0jDI/wJryDBI1uQ4Ml8io7Nl70K3+K2NjArR2pVA5u4M42CkKRj6Oi8whV4hIr6v7jQLrImLcGlUoA7eRpdmUu4AFe6pIl0aSIluFISSI05EMkX0dXJ3/Vk6gbI1EaLQAlkUsJEEyK5DiL+JQy9cv8kj5h/FmT8fRAJI4hEGhOJv0AkKnAmNuFMyMEpOOM3MZG4DIrq/29/wL3wHtwZE1zpDFyZByBTmzXrIFMZkCkT3MkPOvcL+jiTLxOZ/hpk+u/99+Phl3oDRGK4+wch5s+CTMbavh8nEhKIZnGFM14GMX+xS/HC85hI3G0b6Ww2rxhXqcAeu9LZeEk6Bmece/zImMLRLKoYi27DHr3auQOMz3++H+eI7cIR+wOOaBKO2H04ojuaQHuziGKs0ewObs9+0ZkPrSN6D/boQ9ijP4KIvKR6fCxyCvbIEOyRDW3knOJ2o9m6kZldjMx+e2gDQRyHLfwVrOGBJz+Afe4S7NECxiOvtn9e9AxG5wRV4GijmbqRPeGa0CjGws+1fN1b7Cuw8WHY+E2Yg+1vo//3CPYkRmcirSPDEm7tCanZZFwFVs4JK/89bNx1WPkfYOWDsHI7sHISrOxNdGSGyROwhRltoIxXs8o4rd9kbJ2FXYfhgCt0JPuZ6oeV8x0Y2RxYD5VgCaqZA49gCbyOjk/+8FvYXw4NVCJbMzGbMFAfoauzMG/CHFw7ILCdHAzUBfTE5KthpgdhpAMwMlttojdhZPwwMR9iePgp9OQIog9m6jUY6LdhZK5VmZl3YAyc6637eX369OnTpw/d379j3BOao+D9NwAAAABJRU5ErkJggg==',
		heading: 'Tailwind CSS',
		description:
			"Although it kind of bloats HTML (JSX), I love its simplicity. It's easy to understand and use.",
		starCount: 3
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADoElEQVR4nO2aXWiVZRzA/xfdF3TVNoy28+UkScKYTOyTRNtKDOk7DHXueMwLZbldWIGjIC8EA6OLCK2LaMuzT+c529nccTsYBIJ6v5F11UJy3nj1i//wnWvt6fXVv3CeeH/wg/f5P8/z7nfY7nZEYmJiYmJiYmLugpoPaa3bz0Rdjpt1+6Gq1KYc4zU5WuRBsGofnz2eAx9ctY9u0w+fyNLakIX6LLfqs3yUzlEjVYY21Wc5rI3a+kS74V9Cqp2JdDukshyWKifVTqe2pvdSMnvp6j3MN7ZBpo3HpMrRRm1tbOOG2UvX7gZVPMG8d90uUMUTzHvXfwCqeIJ5b9NOUMUTzHs3vg+qeIJ573PvgSqeYN774jugiieY925+G1TxBPPerW+CKp5g3vvqG6CKJ5j3bt8BqniCee+O10EVTzDvfWs7qOIJ5r3vbgNVPMG8d+droLr2D03z58Fp5v5rfagCS/3HfoWOhVmFoWCmz7fPdrjee6+9kdndCqpr/5MLoDrXZeaC2aLlOx/k4zJfLs4n2XSkTPOSsydc773X3sjsbQHVtX/sPKiu9V3Mvw32vpigpAZr3Qu7H7U3MrmtoLr2vyqB6lqHzU+O8VOw9y/H6A27H7U3Mge2gOra/64IK+k6t3x+ukhB56cLDAVnFp8LnAu7H7U3Mgc3g+ra7zsHK+k6t8K8ovP+szT1jfBrfoTf+ws0L5wfYTrsftTeyHS8DKprf2wYVNc6dD7EZZ0XB0mODrBB1eeF80NcDrsftTcyXS+B6tq/OACqax0672dW51N9d/7fUBmk9vb5meX3fz7Do/fTG5kjL4Dq2r+aB9W1DptfyTOn819+5OFgdinPIzq7coY/lty/FrwjUO9G7Y3Mp8+D6tqf6WFOda1D5738NtvDdSZ4KJjps85meri25P4WXc/2QuBK7wvrjUz3s6CKJ5j3fr4JVPEE895jG0EVTzDvPd4MqniCee+JDaCKJ5j3nmwCVTzBvPfrZ0AVTzDv/WY9qOIJ5r2nngZVPMG89/t1oIonmPf+8BSo4gnmvT1rQRVPMO/NPwmqeIJ578AaUMUTzHuHVzN/thGK6er7guRyBpPUautwI3+ZvbSYYbyYgdEMnVLlFDJ0aWsxY/hFydEMLaU0lFLcKqXorMa/hLEktaUMXQuNaRhP8orpD5hM0D2ZBB88n+CoPAjKCVouJChNNTA/lYCqsoF5bZu2/s3HxMTExMTEyP+VvwFTjAHLCpTjOQAAAABJRU5ErkJggg==',
		heading: 'HTML',
		description:
			"I've been experimenting with HTML since high school. It's been more than 8 years now.",
		starCount: 3
	},
	{
		iconSrc:
			'data:image/png;base64,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',
		heading: 'Figma',
		description: 'I love designing things and this tool is just awesome.',
		starCount: 2
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE/ElEQVR4nO1ae0xbVRz+uWyL+od/+t+SpXWzxbElClsMr8iWiAwjWzbYwrKiCzAkYOIji0wys2jcK3PRRDEMHE8d0vEYyMMJ6OYWoO0UYVJa2IA9fMQhoGQb0M+cy+3tk6XQe9tS7pd8aXPOPefe7zu/87vnnhwiGTJkyJAhQ4YMGTLmDVzXPIo+TRZM+5phSr8Dc8Y9DGTCI5rTAIN6/tSr/oVe3Qe9ugI6dRJ6QlaSPwCzJhXm9D89FuxM466FGeBClRk61TbfCQc9AlPq6QULt7I7QiQDhMg4BtAy6Q3oTy3mBAzmAKNNwNhF4MY78xPfGy+ueFs0HJVY/J4UmDMtnPjJaxAw2uLZnGdhL/bIO/OqOlEa8br0FTBl/M6J+acVDriTPyvs6nppxXkWBSZJEiP6977KiR85DMBiE/9HUQCIdo6CkJ0SGLDvW5fRn9D5X6w76lVl4htgTrvOGXB/xGbAYHaAGqDuk8CAjCnOAMsDmwG/bAxUA8bFN2CAz+b28LfQh1A2QGxAjoDM2SlgmZoNf/a7JKfAaNNsImS/S9KAATsGgFDZAIO/IsCctsQjwCjWhoZ4nLj0NIYbn4KpVukDA7ol/qydJ/9qXQtjtVKgtAb0xgfcyNuLl8YAs482NBZAFvbSG2Dwv9C5yOb8ojNgpGQnql4+i8a9X+DB5Wdd60t3oD3rOHdNeWw9tK98jZbXPsWvx7Jx/yfH653FLwoDGjX5OB32I8cbhbuF8pmudfh+/8dCnTuWvdCAsaboxW1A/e5CQZA5XyOUd+XlOoit3l6GC+mn0LCnAKUxjUL5YEFKEBqgD0FJVLOt/HObMdboGDqTjN6Tmdz/oDPg3sUwoawwvN1B5MMYVBFQHNEilP+QcwR36zcvIQMManQePOiS9Njcb0r9DN0fvYHxlujgNmC6IxRXDhxC4cZ2t28AVs7qgzIHwI6T7Ztw7eR+tL1+ApUvaV2MMBx+O7gNgBMnLkSgPfuo0KYyXru4DajdUWpbCBXZfVrrQ+ZsM9YcLbQpiW72sQF61YQYwi36Z7hlcNGmNkHMaEMsV/df6/PcsvebhEr8/OGb3BtgumMDVzfeEsVNB2ubhpQCrnxG584AxaQEBqiN3opvyzqBIqfkVpVQyZnC6m+Vb3ef+MId27A+blUkzpp22fVTuL9WOSSFAeXeGmC/lGU8G6fF3fO29zwzoivvXRRHfjfnd0DFljoMfZkstLnZtMbFAFONUiu+ATp1krcG3P4qEZ3v5aL7SA5uVyRipjPU7XVTVzZg+EwSeo5noSM3D5fe+gD69w9wy2DrlGD8u81xF8hK8zmFRnwDekJWcgeSRE6G8yWb8yzs3Y08F/41ips9lRKdHINOtU2KDUx3QhZKU50yWRLxVnCnsUTewBRNfK3yFEkNgJax01jejLzYwvvOKS3mOsUnkou3BzuNxR1IEmED0yvWKIaNWoXvDkraA7rnVrADSexMDgzq3zxZLHk75/trFNPGaqXRVKusMtYodrUdouUODyVDhgwZfsByInqCiJ4kolVEtJaIQokonIgiiSiKiGKIKJaIthDRi0QUR0QJPOP4ss38NTF8m0i+j1C+z1X8Pdi9/Jr8Hiei1UQUxj9wgp8Yyz/Dav6ZfIL1RLTVj6Ln4lY+UiRH6FI3IFCnwGMUYElwHZ/AIpySIEt0niZB1pb1wfpaI0US/B+ZzKdynk0VKwAAAABJRU5ErkJggg==',
		heading: 'JavaScript',
		description:
			'As a worse version of Typescript, I know it but I would never prefer it.',
		starCount: 2
	},
	{
		iconSrc:
			'data:image/png;base64,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',
		heading: 'CSS',
		description: 'This one is a must, however, I prefer tailwind nowadays.',
		starCount: 3
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAESklEQVR4nO2bT0zbVhzHf4dpVXfoae2lRUNuSm00emIO1ZioGF2p2tMGvW89DdFmK9ru0PW+3nuo2qq7gZgq2Gmbpm6wqfYzatlEAkhNtAMqdknsZKfxm37hZYUoKXb8J7zEX+mrILAdfz+/33t+sg1ArFixYsWKFStWSDpr2MdUw/wmaZgsySwnaVj4WjPLUZmpq4Z5k/YFkaUyc1RlVmHf0HVM+6pLmyMgavgkM7cbDf+qI8xt4SCcpbavqvzoved4e+g3vH1+AUfuZ72CyPfrhaMgitTymN8bgoLf6f2l7G8/WmhgOJhTIIqShmmEAEAHUaQyy64OQG1PECj8Jw+yDU2IIIqSfie+OgZRlGRWrr0BLJkXw4AArSR1afOEyqy5tgVA6n1qdsQAjDbtgN6nZofKrHlhAHyZxcNjGXsytWYv31iz/5lYt/F1Tq3ZgV8FUFfqW5Md1OVF1LqvYTpxKNDwn69sSal1O7Nf6N2+mi5EC2AvDIbs1PHAKp/i4aeeO/i76eCGXcS/7RLeytYHMPzsZfMAVCAE0QljGXuyEt50SlgqvfL0hlMz/JW/8oGH9wxgB8K4bwDXV+0/KdSi6ewJX90BNOap7cOovFcAzq+nMTefwNVZSfMN4Is1u0QBqe0r4cczW6GFrOdBli24Cf/ixy5cmTm542mp6BvABK/w7upHHZ78tT6tu6n8/+G5WwbAhjbwx34AqO1DA1Ao7oSnz6jD/6Bf/8lN+2dmT4YHYP6Fg4VisfwZRehzLOdQ27upfMXV4QMFMLHLbkPcYncXX2p9xs4qzeMlrAFHAiDlcon7WPvs5yhCRw7gqoslLlU+6vCRARh2sdApt32rALjBF0LkUZdL3H+fKJGM+d0uLcg1AEi2bwBjq/nlT9MFvOBhiRtWSPvxaczOJ2pe7mpb8v8soc+wrnm9hIURfs8S16VXv5e+8g1gOI2Hyo+2mwiAKu81/MqMtJyeC+jGSB/bPO4FQtAAqO29hl9/1PkOBKnuZ/imyqzxJLMWaj36ChOAqzE/LRVXZiSN2j6wyjcqTwE15VFgt68OitALgKXECWg1YQxA8TAE5LmW6wIMeh2gyTnUlYvQtgB0spyF9gagiPNsEDWl4Hmxc/cKPhyaxe/Oz2Lu3mitbfIgipCeyngEQMErL1HRzzXmAXFekkJdvhk8AGUSRBEaZ455HQbU9hS8PATuj1T/fQufdL0NIgn17hHUlG3/l0BlGzX5YxBRSBB0Je8DwJaw4StCPXEUNWUKdUVDTbb3r3h5G43GvHBtH6uN9QYAHAEA+g+PDgDoAoAeAHgPAPoB4AMAGACAQQAYAoALdLcNAC5zD/Pffci3GeD79PNj9PBjdvDvOMK/s2l6CwA66WUvfsKXm+RBfg6d/Jwi0RkAuNTE0PV8iXdK6OppdwAHdQgchgM2Cb7LJ7D3qyZBmujcToK0Lx2DjnUqjEnwP7Cj9CszX8MzAAAAAElFTkSuQmCC',
		heading: 'Python',
		description:
			'Obviously had to have a lot of experience with it. School, personal, and more school experience.',
		starCount: 3
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFPklEQVR4nO2ZbUxbVRjHD2O+YEBFs5g4P8ygXzQmbjFmcyDiFtKEZcItFWUyGFt4WxaZY/IBRt0iKAwEglsCDpPFbQIKxJktzgV0Y+HeDliFDZAyXkpLobQU6AuF9raPOZfMQWnvLe0F+oF/8iQ35/be8/uf8zzn3JMitKEN+Z4+HC97SaAov3VI+7PtkPYKHTlS2hQqy9+CfF0iEPnvGSr5PklzhU6fboDFkai9TEfIi39644H4SeSLihguOvbpxEWTI7hjxE9cNH8gP5uNfEWhQwUCQlWl4gJ3DGKsajJ0qDB63cB39pe8FqWoaE+bql8R+OJIm26A/aPnZbv7z7y5ZuACWfmzAmV5/eHJGrun4I5xRFdrF4yU3QyXip9fPXIAv73y0jMJmksWvsDTHeKg9rI1cqS8UgziTbyyhw0WJH48Xj3D1nnGdAN8Y2iGa3O90GfVwLjNAPN2mokxm55pw/cKDM2cRuLUPxrfHyrM8Bo8XF4cGq2qHOACv2CSgNpmAHeFzVWZJMyzbO+OHasejxgsiFwxeOTIDy9EjVZQqRwFmqe/AUO0DjzVID0Jufo/WPvADFHKCuo9TWGQ2wZixiqHuaa52HgL9PY58FZG+zyUGVtY+wodK4OnBzL/ddtAiu4X1heWGluABhvwJSvY4Dvj7WX9RGuqIXA4C5DqS0CjWeC2ATZ4POUGHkbe2Uzk6W8wfSRN1cDL8hxAoycX4B+FtwZw0XmT81x6SGvhLUU++ClOLAXnywBebbiE6+KquRvyDU3w+cxvTOClE7exzZzEMgK7tOecg/NhAI8+11J5z6KE4zNXXaYfvie1jC55RkFPQ8JUDfipstnhvTWANykueK51fWEgGhkTJrsFxPo/IWAshxucDwN4F2VLG7aRXxxp0/XwjrIIXlF/vQQOy9k1bwbwp4Ar4fx2Bz5MVQab5V84hVt1A2z5jwuWDTxafQGCHq3nTsDZxJuBObvVZSeZLtInSediPV+PGTCzGHDMf3xQ2SMvgYCOBEA9hwEpfcCA2s0U2q86Dy9KjwCihI/jrghQX6rTmeASj0U84bKT3809+LAOId3Hl4I7RvsngB4eXZ8ZuMayjOpoIwR3JLLDL4rAzmR4V1Oxtgbw5wCb6icp2ETFcsLj3zTqJGAHO9SZOyFEXbg2GxneZfFJisvEc20JLuHxvQYdteQZC9BQaaJgy/jp1TWAo2zmb+CSxqqHPEUN7Lh/EgLbDkBQ22fMNW7D91ymoW0WsvXXwX81DCRP1sD2/lOw+W4ckIY+WC3d0feCX1scIFkaPwZSp36F8OFCCGg/8H8abJOmw4Rlhnd4rVUPIf8cfZxy9+IBDR7zzAA+Uu4bPQfB0mSnuRzecwrmWTa2lWreboWw7lzntdN5EJA8c2EPcVdbOzMauVaT3d05oLZM8zLyET1i9tVLEguoK7HZbQOoPeUJRApPI1JoYnvxq9J0aPWiJu7oe5mUZIXHDJjluuAptGK1irYiSliJKIJ21YEfFQtC2VnonVW6Dd4zqwBCVsQFbkckUYfIj7atHHyZkZgdiCL+4kqr7fez4CtlLTTNdDGGDLSZCXyN28SKWni76wT3bk0KSSQR7fIefJkRYi8iiQfufjJ4EDIkiRWhVRWuD4pIQRQxwR84oUOkMNuzPPdULfHBiCK+RZRwzmNwkrAwNXZbtI5/AJLE6wvFJrSv0MBNJBGu3T8znKJidiKSaHUDvAO1isKRTwqQH1OElHDISZ4rmdqpE/kjn1f7vmcQSeQiUjiwEEQu07ahDSGf039Ig9FRXwxQewAAAABJRU5ErkJggg==',
		heading: 'C#',
		description:
			"Didn't have much experience with it. Don't like it too much, but I think it's just a skill issue.",
		starCount: 1
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMAklEQVR4nO2aC1RVVRrHr9PDprGHU7NmptbSFBBEBAFBMAqfoGKY1nUwUREQBAuDQIlMTB1LRdFQjNQ0HV+IcN8XuMKFy7ngA0nT6eFjfLRyfIRTo83k8zdrXy9FykW4AtYs/mt9a52797e////b95y999n7yGTtaEc72tGOdrQqnpmK8zPxxHaJZ1XXeEq6xnO06zQudJnGFWHi2lIWT0mXaWQL327T6CH7NaNbHO7d41nSLY6vuseDPdYtnlPd48gQsWS/DtDBKY4Qp1jMTlOhnp1xjGWLYyzTHaYS7BJNjy5xdHaV86AwcS3KRJ3jVF53nMpW0aZ+DMepSE6xjBAcsl8iXOLwdolht0ssCHOOpdY5hiynWHzti0iHnjH0c45lhYj1Y9wYqlxi8JL9UtB1Eg+5RbOs1xSuuU0Btyl87TqFRPdwftdSHCKWWzRJbtGcFhxWrkzH1+gou5fwjMLRI5oaj2hwj+KKexSLWjLxW+EaTyePaBYLLsHpEcW+XjE4yO4FPCPx94yk1isKvKI43DcSz7bi9o7AyyuSI4LbM4pvvCfTT9aW8I0kyGcyl3wmg89kFL7jebRNBQgN43nUZzIqq4ZL3hEMbRNiv4n4+kdwyT8C/CexPjCd+2X3CHI59/lFkGPV8r1/BP1bldAvHMeACdQGTIRnJ7D6lzEl0SFgImssmiZyPmAy3VuFJnASDwWGUxM4AZ4PRyF6v359QhVvTK+kaHolWxKqiH+9mj+3FHe6kfsTqhiaUMmKhEo0CZVsTazk6R+1BXJ/4ARUVm17h7XG7DAwnGWDwmFgOIeH3fLMx1TzcJKZ/yRVQp0lmrmeaEaZZLZ/cIw30impkrSkSs7Vjy3sjUoS6/sOkfPYoPEctWrMkLUkgl7Be8grXBs6jiuDw25P6A0zISlmSDFTnVzJxBSJLSlmfhBlyRLXk82smmEmOMXMTEudxJ5kiSMpZs4nm7mQbOZkisSBZImdyRIZKRLjkyXCU8ycssYl2cz+ZDOpKWbmWMokDA3pHPoKV63Wp4XSp8PwMHYPHwfDw1jUkEeqxLxUM8w0s7CuLHk3f5opkZkqcUXU2WszJfbNqPhphE+r5Gkr18WGtAwfx1KhdVgYUoukPyKMkJFhEPIXvh5qY5GTJrHmLQnSKoi8te5NM25vSZSlSexKk1iRJhGRVoFfqokeb5r4Q7qRx2dW0CVNos8siRFpFbydVoEyrYKjb0m8Js/9+Vhj5bso+FIkHrm1LjSUR0aG8U+L5nEE33UHhMoxjxoLofKfP3P1MdvEx7MrYFY5EbI2wOwKvhV8qRV0bqg+VE6KVbPprohGj8VjjBxGy6kNb2SJ+46JRe+Y4B0Ts2WtDHHHzCnnxhwTP0DD07BcTqcxL3PBon0sbnaTyV9iifwlkL9EVmN+88uJmG+Ceaa77PEmYG4ZYyxc5RxozE/+EtlW7T+OS81G2Bi+GjcGxo7Gx5ZP+iEefLecT94thwVl5MlaGe8aGfBuOVcXlHFjgZFhtvzGj8ZPaA8bzQm7iMaH4hw+Gsa/yNnGVnwLy5i5qAwWlfHFwgYGpdbAQiMpFk4jJ3OqeaBhLzqEj+aMyCH8BRybTTIplKmTRsHEUWyx5bNcR8cMI6eXlMGSRv6NlkY6/GaJkb8L3sVGJtjymxTKNpHDpBeJaTZJZCjZkaEQGcp0Wz5LjQxZZoTMUg7K2hjLSokS3MuMaGz5TA4l0ZLDC6xoNkH0SEqnjIToENtzaVYp87JKIavkLgYaO5FVzFPvl3Ajq5Tv0tP5TUM+USGMsOQw8vZV4x0RF8LxuBCIGWZ7xyW7hL+tKoGVOwmX3QNkl1Ar+HOMPNlQfWwITiKHuBCONTv4tBHUvjoCEoP4vS2fnJ1oPyyB1SVit7btkVPCl4L/Q0PDZwgxI3lS5PDqcM43O3hCMJenD4N0OQ/a8llrIHftTlhbzFjZPcDanZwW/GuKeaqh+teG0VHkMD2YH5odPDGIy0nBjXfAegOr1hvgYwPxsnuAdQYuC34xG9nqAJFDUpAdHTBjKLUzghp/BDYWM2+jATYamCNrY2zS0NnCXcy/bfkkBfKkyGFGkB2PQOpg/vHmEEgNsr2I2FSMfHMxbCqmWNbG2FTEC4J7cxEVtnxmDcHJksMQjjab4K3BlM4aDG8PsT0N5ht4YlsR17cV8l+ViodlbYithazYVgTbimzffbMGMkLkMGuQHdNg+gCy0wfC7AG2F0ICeXp25xVCrp5oWRtBoeCR7XrOWnn9bfnNHkiiyCF9oB0LoXkDiJ07AOYGsrUxv3w98oJCKCjkdFFR650K1UeBnvkWTn3juz5zB5ArcpgTyJRmk8wdiPOCQPhrIGdp5GVIrMKUOvar9KDSk5vbwA5OS0KtJ1il57JSxw21ngG2/ITmBYGcEznMG2jn8dl7AZxa+BwsDmj86Emvx1mr419aHWh0bBK3qKwVoNEzRqPlkuDRapnfmO+i5/EX2t97zs7XYYGMADIyAiAj4OcbIiJBvZ4BhRr6G408JMqKtAzSa/m2UAeFOk7odITrbMzPzYVej5deR541NoVa1tla/9chI4BVVu3v2U28rB/umf0hsz+1i4fefL4rc/mtQcNxgxYspqG2WMtUsT1l0NKjWENNvbpzxVrWG9RMMujwbMoYUV3NA8VqnAwaRhVrWHhLvEtFWqbdKcbC/jyy1J8LQvsy/7vYEhNY7o/0vj8s70eS+G3I54lSNVeMGqhvpWo2in9FWKma8aVqam71sZias0b17VNXmQ5Po4ZjRg3XGmj3TamGzJ1K/ihrAt73Y4ZFs18LbNGt6seIbD9Y6cfpFYF0EmXlKqJNKq6a1FCu4rtyNd9br2fVbyspcC5TM71cjU7UW+0DWwNlmZrnylVcsMRSc7JczfxyNcHirmiq3uW+PLrSjzMWzb4E3XUHIKPDBz5U5fjCBz4sris3a3heUlFrVoOkQiOpuS6puGLW3H5CK2l4zeKnpoQ7PLuSmlCr7xFbu76NIceHTKE1x8f2CrHZ+Mgbr9V9ubbGhyviuq68SsXwXSrYpaS2SkWW5VrFxSoVCZKCpyo0dN6jwqdKySeWOgUhTeHbpeK48N+tad7xVk5ffNb05aqwtb54yFoSH3mTua4vrOvLkY2+Px2O7lWg36uEPUrm71GyWlzbsk81DR9k3Iq9CrZZ2ih4uan61nnw+Dpvjlk0ev90p7YYljvScYMX1Ru9YKMXKmPgzQ8jqpX41Shhn4JLNSp89ikIrVGg36fg3D4FF2qUfFajIKumoOkfL+xTslzErFGQ0BR/oWWDJxqhbYMXe3Jdbb/C3xW2eOOwuQ/fbPaEzZ6sqVshHlCQfUABBwr4/kABcw4pf3qDNBq5f7+Sbp8oGN1UngMKMkS8/QW8cSdfoWFzHz4SmjZ5cm6DO91krYmtffDZ6sHFbR6wzYOPRe+LUf1gASsO5nPjUAEIO5jPdwfzOX+ogCvWsmtN5ThYwBJLm/ybU68t5Mq5b6s7HwotW935PtfT9otRi2KHG0PzenMpzx2290aV681jovyLPJ79fAebP8/n9Of5UN8+y296B3y+gyXWNjY7QHBu741GaMhz52Jeb4bI2hIKd/rlu3G+oDcU9Oaowo2+9esP5dLppIbO1Tk8cDgfvsznelNjf5nPUtHm8I6GT6R39MKnoDfHLNxunMv3sPdr1LuEpjfdVa7sVfcClStX1b1YqnC+/UXo2A44mseNpsY9msdS0ebYLR2gc+RRlSuZVi7UruxRtvYzfyfoHOmo60mGtidXda6g68kZXU+Sja43V40CJ/JA2B2D1flvJ1P4H9/B6+K3iKXvSYq2J2cFh+DSurK41UZ7e1DkSp9CF6QiF7CYMxcKnVlZ7ILfV9vhq2Z0wKntZIo2n6ayrMiFbBGrLm6hCxWFTi28yGlJFDsTbHDGtNMZ6qzMC/a+DAYXknb2YHiJM84GF54Q/6AwcS3KRJ2hB0nSYA6LNvVjiJglLi2wtm8rGF1wK+3BIqMTJ4w9wC4TbZ1YKGLJfs2odMDR5MCUCgdWVjhgMDlyxORArcmBy1arrXDksKgTPuUORIs291p3O9rRjna0Q/Z/jv8BiE7OnAyyET4AAAAASUVORK5CYII=',
		heading: 'GitHub',
		description: 'A must and a great tool for version control.',
		starCount: 3
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFXElEQVR4nO2ZfUwTZxzHz5ltyZIt25Jlf+yf/YHpoZI4etcXJAKC0BYprzdaSsHJ65huE5OZbEai2ZzJYpS7qhScEXUZa6WtHaswWnAzmeB0EDcWdVZI3PBlE0StYKn9LU83Xyj2ri8H9A++yS95crm75/N97vf7PU9yGDaveUWfslT21zPV1h9UlY4Hqiq7R6G2OGSU4TUs2kVRsFD2tllXWGn3FL93Ap4MVWWnR15oPryYMjyHRaMUqtb1BWs7XP7g/lFQ1j4uo8ybsGhROtUqyym1DXOB+0dOie1mep45Zw7BDTGrNdYzmhDBnwxNTTcotW0XM/KNS2YNXKaxvbRabW1VV9u94YL7R1F1lzez6FhnUrb55RlEhwUKlWUbVfm9my/wYr8orOiczCyy6Ovq4Ble0Vflm0rz3mkf4wLYvOMMmG1D8PvFUfjrmgsm7nt8gcbomsk25LuH6z35a9vvygpaayIGT1NbE7NLvnOyTaZddwLo/QNw9fo9CFbD11y+Z7Tr2I3klh6/Jis0pocMTlHtr2ZprD2oyNgmqK3rhUuDYxCu/rg8Bhu29HAWOmJRKi0vBm0gp8Q2xPWZt+3sg7HbbohUd+66YXt9P+tcCrUVRKu+Oh+0gaKaLtYXfra7HyY9XuBLkx4vfLqrb3oKrWkHqawFpHIjSGUGCNoAG/yHW3rg9p3IV/5pX6K2rtc3h6rKASuyDCCRGf6D9xkwRm4AFV0kOc+lC84xSMs3gTjjm8fgfBpAnYNLqC6M1svwyednoGzDSV+gsfHbQdYvN3D+JlTUdk0H58sAWn3U/tjU+8sNKN94MmD6VWw8Caf7bkx55vrf92DrF6chQREAnC8DaAPigufq6w8XApkYn/DA/iMDkJxtYgfnywDaYdnShm3l/fu6QnUMlMVtwYHzZQAdBQIJ5Xww8KifizP+b4uhhixCA2xHhY+3s59v8tZ0PO7n4YYsQgMoZwOpvPbp6aOq6prez+fMwDiLAb/8R3kuL7TA0uUNsGzFAX4MyGcwhVCff3ifUtsG8UlNgJPMo4gV6+CtlIMglRvmzsDAhcBFfLRtEKiyDkjIODQF3D+WSPaBMPXw3BgwsbTR0VsTIFrZyAr/ZIhWfgllH9hn1wDXRtbhuASxIm74xWId2E84wesFcPx4BQrWHp8dA8EcJZAJIlkfEJ5M0UNnt3PKM5OTD8Bic4JcZZ1ZAyh27u0HLt0cuQf1DT2Qp22B+KQGECbpfWNa3wMjo+MBn7t95z7sOXAOEjKP8m9AXe2AZGULLJHooP/XqzBTOts/DIsleyA+5ZCv70duoKYbMigTxEn3PUqDVGWzb5X51uitcUjPfdzFlkobgEg7Ep6Bone7Iau4DZatmNrPH4a2ygRud+CNLVS53R7QVLQ+da645U0gSm8BSSgGyNSDZq5uUlR+FP7h4UuM3hqH0mozR/fSQVxiU1fQBoRC/bMCkt4qIGkX24vTspuh79zViHI+VdnMCo8YEEtMTP3zWKhaJNn3Bk7SepygPYEmQL3//U02cA6OBA1+aXAE1n9k41h12osTjEEg3vUmFqlwIROPk3Q3V1rlFreArrEXTv18xWfI5XL7Ao3RNaaxF3I0X3NudgKCOYWTjBTjW7EEnSYg6N+CPTKEGgKCuSgQMRQ2k0L1gRNMJU4yN/gDp0dwktkUVp6Hq7jEva8ICHoHTjITYYOTtBvVWMyy+rn7ARgr3r0IFZuv6EKCZzpjSd3s/ZnhEi6qlwgI+qcgVv0sTtQnYdEpWICKECeYwWnwBP0nqh2MMizEol1Cof4FAUlvxknaiQKN0bW55prXvLDp+hfbmoxip87ScgAAAABJRU5ErkJggg==',
		heading: 'C',
		description: 'We had so much of it in school, but please, no more :(',
		starCount: 2
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC7klEQVR4nO2YXWjOURzHP3sSezBKWjIveWlGU3IjicVkt0q5I1zIhRsXauVtG0oprpQLkkm5MDeTtzt5JytZs2yFxiLykteHMZ36/uv073/+zxbPzs56PnXa8/z+52m/7zn/38s5UKTIiGQs0AR0Azn9bQSyBCbiDtCfMG6HJKbJIaJfo4FA6M4jpItAyOUR8oMRsiNPfTtYBhwCeoEeoMoxrzGPkH14ZCbQEXNop2NuVtkpScQtn1lrEtCZ4NS2lN9klZ26FDNd2glvIjLApQQRv4EKzZkLtACfgLfAedmGFXsdr0iznlfJ+fjz90Alw4Q1Wvm4k8bxclXw9pSgNjvjnRmOlf4FrNacU3my00fPGhgD3HM4t0NzNlu268B44EjCznnlWJ64qAa+yvYGmCr74dj8Mx41UO2Ii/tAqVb+iZW56vS7GqDPmv8ZmINnVmqlI6deA9P0rNmyH7TqzPNB1JiCMhl4ABzV91lAm4rZMtm2Wo6a88Yo1ZnLMRHXgBI8kAGuyIlWy26q8Cp9ng98t5ytlb0+4TXcDywBxg21kAYrcKNXKE5LzNmo1fiQkn771NqY13FeoUXUKWj7rFVO4l3MyShTteWpJdF4PFRFb5dsu9WhTrTmZRMci+ZPV1zdUK/lEtJbKBGjgbv6JxcVJ+v1PScHbXpijn1TC2NjAnw2sFadbosOWS+AdYUSskcOPVP6XKDcb2zbE+afcLQr54AtPmvGBhW2xcAE67zhqsYVjt4rGq9ir6MXTsuZR+poXSzXxYFLzHE8c0GpdyCHoY3AH4cQY1+BRzIK/oFyIGVXOtU9B0EJcDZFjLlpDIbSlPtdk80WERBTErpe+7AVFDUpgT+YuPMeK60OIabNCYZ6h4gvavuDYCnw0yHE1JogKAdeOkScJBAywFWHiPY8Lc6wojElLkwHHQS1jqsiMzYREA8dIkz3HBS5BBEdPm5L/pWbCcfdhQRIpXVr0mPdygdLma+bxCJF+H/8BalXmD9JrQ3eAAAAAElFTkSuQmCC',
		heading: 'Jetpack Compose',
		description: 'Used it to develop some mobile apps. Great experience!',
		starCount: 2
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEUlEQVR4nO2ZXUxbZRjHn46oUQE/ksULvWBBr7xw48K4TJ1LjNmFF462zs0BMc6puC8+CgiFUhhkyeaFZm5hOYdtgA6aCWgYLkP6AaUU+R6Er8BAhgutbPJVoKX0Me+BUCk9H6Wn0Av+yZOcnNP3nN//Pc/zvG9zALa1rSDU6caXQFFngJz2JVB3OEGhr4VT1Tsh6CXHEEjSXQJ1uxPyu3FNqNuckKQvBpXmSQhKJepOQVaLbR24Z2S1zEOSPhWCRgk1ByHD/JAX3DMyzI8g8c5HWweedudVSDG2QJ6P4GuiCyGtYQDO1r6+eeCq6nBINf4CuR2ujYN7RG6nCxSGGjhT8XzgwBEloKjLgexWh2jg+Z6F3r4IKYYCUOEOceFPa+NA+ecUH0BU4SDmGK2o+2sWeycWcNaxxAQ5JufU9VbmN7xGMptnIaEm3n/wxPq3Id00xPUwSX43ystHsf+RHYWqb2IBZeWjzFhOI8qmcUg2fOA7uMr0IqQazZDXxfmAyCsDaP57DjeqxrE53HV5gNsEYUgxmkFhDBNuIN08wvea9xXdR4ttEf3VxJwTD/w0zG3iWyPCyeo+4Qby7nHe8L2SYbQ7XSiW7E4Xvlt8f/2zVM0IZ+8iKPQISVoUboADPuLHfrSKMPPe3kTklZV0yu1ESPgDIVm3DM+Ezn8DpOj8yXk+NTywoYTAEvhVcBENkG7DJ1IXGXoL7qYH8dkLPUzsoQdRabBwvrmm0Wnce6nNC7hIBsjsk/bHJU3vFIZd7GFNv/DvevBW39SaMQ8mFzDmZi9KUtjARTJAFiA+eN6+vjIRxITNsYSqu8P4dHodD7hIBsgKy5U2XDPv2dcJ9Cu5JoHgIhkgWwE2kZwXBJ/W4G6LCv3qeG/A66/5aYBrq/AGxbO/yWpGOOMG3xIDM/YlVgOhbOlzzls/d8N5ivuanwamOQysz/8uhGQ9wtEShOPlCMlaEQzoA5dCpOe79y0mhNibCDLaHR9fR/jyV9Y3AYJSyE8D2hH2Is40WBBULQhfVK4F94wjRQjxVVtjQF3P3katM3YMjyvhhv9fhH6uwTd/aPWxjeoDu5DdahxGiZwffoe8ECuaRtDlQtR0WjHyfNPmGBCylSAmwmOKWOGfiy3G8qaRNWMcThcWmB/izuyGwBogISsb4jTApNPUPGaWtmJUSiWGHivCsJgi5jirtBX/mZ5nHfd4bhFTbw9hSEAM5HYgnPwdJYevYWO/BQMlY+84Sj65gfDVb8t9328D5P9oohbhyI3VNIj4uoyZZbE1Mb2Akd9o3Cn3aQkzaRszcO7e8r7l2M9ec3l/1m20L7IvbL7KvriE72RWea+d2NLl/RNZQwTrM00FXzfZp6xCy+S8KDN/ILuau3vJCxHiNFrhBk4UPAFSSg0y2sZ1413xGjT5URPG3nEmJXkmy8awHPz+KfBZ8usvg5QqACnlZHsA6f3Si7XYOzYpGLxn7F+MvlDLA065QEZr4PC1CPBbhwqjQEbr+NJqj6ISszVtWNv1kDE0M+9gghyTc6qyNtydXCFktW4EObUXRFc0/T7I6G6hWwbfgxoAGSWHgIrUh5w+AVLKKhq4lH4MUip1Y3m+UR29/ALI6PMgoxf8AHcwNSant/ADYHTha0yxLRedL+lSA9Krm/hlhk+Hrr4FUtokALwV5PR+CE6hhClCKTW8Pl2oMaZ25JoQCHp9WPAMyCglyKihlVAy57a1LQg6/QeJ2JhT+6JnrAAAAABJRU5ErkJggg==',
		heading: 'C++',
		description:
			"Didn't have much experience with it, but would take it over C any day.",
		starCount: 1
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADh0lEQVR4nO2aXWxTZRiA31sTrtyVY8G4dW2ZkUgMBiIRRSMWNjUY4r/BiKOlaMIWZUtETVzQhBgSTDReaKJyYTZsARmybt0YpRN2uy1ejuxwCRcybnb1mNfQrRSaHsjb5nzmPMlz8eU739vnpOckvahISEhISEhISIgPmj+kq2U/Ey1pbrbsh0CpTWnGm9N0Sj1Ys4/DD6fBBdfsY8D05iMputpS0JpiqTXFJ7E0zRIwtKk1xUFt1NZHkoZPQjTJRCwJ0RQHJeBEk/Rpa2wvebOhaz9gsaMb4t08JAFHG7W1o5sbZkPX7QFVHMG8d/37oIojmPdueA9UcQTz3o27QRVHMO/d/C6o4gjmvc+8A6o4gnnvc2+BKo5g3rvtTVDFEcx7t78OqjiCee9Lr4EqjmDeu3MXqOII5r27XgVVHMG8942doIojmPe+/Qqo4gjmvbtfBtXv9b1FdvQWudo7BWpPkWuV+z1Frvbo3hQcKOL1/kWi4prrlefq1VuTPV2gik8+K+B9XoBlL9x+I58W8A4VoMKF8mtKZxvRW5O9naCKT46cB7Xa/teToH4zxYOHR2kqre9lhmVvTdLbQRWffJ8Htdr+t+OgVlv7mWHZW5OPEqCKT37J4f2ag5K6Pj6y8o7/NAZqtbVSOtuI3pr0bANVfJIZIXHyHN7Jc7Dsnyvv+OAIqNXWSulcI3pr8vELoMp9MjYMaml95iyo1dZ3O9PI3jvofx5UuU8unQa1tJ44A+pohib11nrpbmcuZ2hqdO8dHNoKqvhkJsv12SzcZmblFZg+hTd9CirMlM+YzeJVzpjJ+vtdcK+9NfniWVDFJ/NDXLtyApYdYmH+d14s7c9lSMxl8eayUObfs4OsKpuRmB/CK5+jc+vRW5OBLaBKHVgY5IErJ7h86waTgez96mlQxRHMe49sBlUcwbz36FOgiiOY9x7bBKo4gnnvdxtBFUcw7/3hSVDFEcx7f9wAqjiCee/PT4AqjmDee3w9qOII5r2/PQ6qOIJ579A6UMURzHuzj4EqjmDee/pRUMURzHuH17J4tgNyseD9QbKSP9pZra3DHfxjNjQXZzwXh9E4fRJwRuL0a2subvhHydE4nfkY5KMs5aP0BfFJGGtndT5O/3+NMRhvZ4fpB0xGGJhsBxc8H+FLqQcXInQWIuQvtrF4MQKBso1FbStaf/MhISEhISEh8n/lX3CMceZ3rptkAAAAAElFTkSuQmCC',
		heading: 'SQL',
		description: "Although not my favourite, it's a must.",
		starCount: 2
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABF0lEQVR4nO2YOwrCQBBAx2RFL6DXWVvRwkJNYeMtUmrpAURRS6vY6BEEBU9g7SEMWI6sKPhJyArqzMo8mDrvzS4hBEAQhK+jN9ivbBHfmB5wQeSpkM1TIZunQjZPhWyeCtk8FVo+zIjQsnkitGweaJagP/RQshOsbDB0Vv7NCJ7ylhG85TMiEh/qR8d+aXlas5FPiUiV96MYzVhG9OCXmKthJkveMoLPz6sk+YwIN+T95Ai35P3rlFenbdr1I8OL4tA2QHXmh3x9vANueBYRRr5YHaIZ5yLUnbxzEepJvlAboWqM0WtNMNeeDYBzxE3+QTqYPU6bYYR5M6nuYn+Rbk5fpV2IgGAaZopLxC+Qk+DCX5yEIABLzq9GJ2/sHHe1AAAAAElFTkSuQmCC',
		heading: 'Flutter',
		description:
			'Love multiplatform development. Same principle as Jetpack Compose.',
		starCount: 2
	},
	{
		iconSrc:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEUlEQVR4nO3WMWgUQRSA4aeQJoJgsiMoaGHSiEnjVYIgMzFd2tQGM7u12BwKkhSephIt08YZYimkDGHnSFAwBwrpokIwBIurNLPxCMSRAw/O5Yyzu29uN7g/TPt4392wuwBlZWVl8dhLfZ1K/YqJqMmEPqBCr08IPQVFjy7/GKFCLzOhfzIZmfihUj+CInZLfveojBao0K1ei/+JiBagKE0umTNM6iqV0bd/LV4oRGXRDFAZBUxEX5Msnj/CmFNMHkwzqT+mXTw3xITcv81k1MBYvO8IEoQ3x2rbhvgK9ZwP6uby/Xfm2pPt124Bvlpp/1ouEOT3GX24te5k+aFZdZXw8Kjzl48//ewMceXBh7foAI+rpfbw7nt7YhDnZuqXCA8P44ATgyA8fNEZ2usJUmjE2dk3Qx5X+8cBCo0gfjjfPey4Z3nhEBeCxqDHVdMWUDiEx8N78SE2b1WXCLAuaAx4vtpJA3CJANtIUL/Ta0CS7xsXCLC+Pr56nxXgAgE2Dd/duPi3AWm+NDERYHd91kYwAZgIsGrOnCZ+uIcJwEKAbYSHM9gADAQkiXBVxQZkRUDS4ggMQBYEpKkbgQVIi4C0dRBU6FwRkKU24sZiExWQFAFZG699EtgAlgABGFWe767mhQCsKs++rOSBAMweb7aqtc2WwT7Qz1wgoN9hIyCPMBGQV1gIyDMMBJSVlf1//QIAUa+np5/fKgAAAABJRU5ErkJggg==',
		heading: 'Dart',
		description: "I don't like Dart, but Flutter requires it :D",
		starCount: 2
	},
	{
		iconSrc:
			'data:image/png;base64,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',
		heading: 'Haskell',
		description: 'Tried it, never understood it fully. Maybe one day.',
		starCount: 1
	}
];