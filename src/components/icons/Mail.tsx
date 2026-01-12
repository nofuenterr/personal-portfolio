import type { IconComponentProps } from '../../types/iconComponentProps';

export default function Mail(props: IconComponentProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="#fff"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M22 7l-8.991 5.727a2 2 0 01-2.009 0L2 7" />
			<rect x={2} y={4} width={20} height={16} rx={2} />
		</svg>
	);
}
