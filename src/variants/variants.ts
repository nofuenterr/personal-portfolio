export const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.15,
		},
	},
};

export const itemVariants = {
	hidden: {
		opacity: 0,
		y: 18,
		filter: 'blur(6px)',
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: {
			duration: 0.6,
			ease: 'easeOut' as const,
		},
	},
};
