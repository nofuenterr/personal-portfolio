import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';
import { Avatar } from 'radix-ui';
import avatar from '../assets/images/avatar.webp';
import MapPin from './icons/MapPin';
import Mail from './icons/Mail';

export default function Hero() {
	return (
		<section className="grid justify-items-center gap-8 sm:grid-cols-[auto_1fr]">
			<Avatar.Root className="border-foreground-light grid size-60 place-content-center overflow-hidden rounded-full border">
				<Avatar.Image
					className="transition-transform hover:scale-110"
					src={avatar}
					alt="My avatar image"
				/>
				<Avatar.Fallback
					className="font-brand text-6xl font-bold -tracking-widest"
					delayMs={600}
				>
					RR
				</Avatar.Fallback>
			</Avatar.Root>

			<div className="grid gap-3 text-center sm:text-start">
				<div className="grid gap-1">
					<h1 className="text-2xl font-semibold">Hi, I'm RR 👋</h1>
					<p className="text-muted-foreground-light dark:text-muted-foreground-dark flex items-center gap-1.5 justify-self-center sm:justify-self-start">
						<span className="inline-block">
							<MapPin className="size-4.5" />
						</span>
						<span>Iloilo, Philippines</span>
					</p>
				</div>
				<p>
					Frontend Developer who enjoys building interactive websites in React,
					but is also open to learning other technologies. I started my frontend
					journey on mid-2025 and am currently trying to get better at
					developing websites with user experience in mind, building creative UI
					designs on my own, and the architecture of things.
				</p>
				<ul className="flex items-center justify-center gap-2 sm:justify-start">
					<li>
						<a
							aria-label='LinkedIn'
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/romel-raphael-nofuente-536207371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
						>
							<LinkedIn className="fill-foreground-light dark:fill-foreground-dark h-6 w-auto hover:fill-[#0284c7] dark:hover:fill-[#bae6fd]" />
						</a>
					</li>
					<li>
						<a
							aria-label='Github'
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/nofuenterr"
						>
							<GitHub className="dark:fill-background-light h-6 w-auto hover:fill-[#52525b] dark:hover:fill-[#e4e4e7]" />
						</a>
					</li>
					<li>
						<a aria-label='Send gmail' href="mailto:rrn091301@gmail.com">
							<Mail className="stroke-foreground-light dark:stroke-foreground-dark h-6 w-auto hover:stroke-[#ea580c] dark:hover:stroke-[#fdba74]" />
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}
