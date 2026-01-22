import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';
import Mail from './icons/Mail';

export default function Contact() {
	return (
		<section className="grid gap-4">
			<h2 className="bg-muted-light border-border-light dark:border-border-dark dark:bg-muted-dark inline-block justify-self-start rounded-lg border p-2">
				Contact
			</h2>
			<p className="text-2xl">Let's Connect</p>
			<p>
				Interested in working together or looking to chat? Just shoot me a
				message and I'll respond whenever I can.
			</p>
			<ul className="flex items-center gap-2">
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
		</section>
	);
}
