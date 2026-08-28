import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from '../assets/logos/devlon-outline.jpeg';

const links = [
	['Who we are', '#about'],
	["What we've achieved", '#achievements'],
	['The USA', '#usa'],
	['Why this works', '#why'],
] as const;

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const closeOnResize = () => {
			if (window.innerWidth >= 1024) setOpen(false);
		};
		const onScroll = () => setScrolled(window.scrollY > 8);

		window.addEventListener('resize', closeOnResize);
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();

		return () => {
			window.removeEventListener('resize', closeOnResize);
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	const close = () => setOpen(false);

	const headerClass = scrolled
		? 'fixed inset-x-0 top-0 z-200 bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl transition-[background-color,box-shadow] duration-300'
		: 'fixed inset-x-0 top-0 z-200 bg-transparent transition-[background-color,box-shadow] duration-300';

	return (
		<header className={headerClass} aria-label="Primary navigation">
			<div className="mx-auto max-w-[1440px] px-4 sm:px-7 lg:px-10">
				<div className="flex h-20 items-center justify-between gap-4 lg:h-24">
					<a
						href="#top"
						aria-label="Devlon home"
						onClick={close}
						className="group flex items-center gap-2.5 outline-none"
					>
						<img
							src={logo}
							alt="Devlon"
							className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.03] sm:h-9"
						/>
					</a>

					<nav
						className="hidden items-center gap-8 lg:flex"
						aria-label="Page sections"
					>
						{links.map(([label, href]) => (
							<a
								key={href}
								href={href}
								className="group relative py-2 text-[13.5px] font-medium tracking-tight text-[#282321]/80 transition-colors duration-200 hover:text-[#282321] focus-visible:outline-none"
							>
								{label}
								<span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#a91d21] transition-transform duration-300 ease-out group-hover:scale-x-100" />
							</a>
						))}
					</nav>

					<div className="flex items-center gap-3">
						<a
							href="#contact"
							className="hidden min-h-10 items-center rounded-full bg-[#282321] px-5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-[#a91d21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a91d21] focus-visible:ring-offset-2 sm:flex"
						>
							Get in touch
						</a>
						<button
							type="button"
							onClick={() => setOpen((value) => !value)}
							className="grid size-10 place-items-center rounded-full text-[#282321] transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a91d21] lg:hidden"
							aria-label={
								open ? 'Close navigation menu' : 'Open navigation menu'
							}
							aria-expanded={open}
							aria-controls="mobile-navigation"
						>
							<AnimatePresence mode="wait" initial={false}>
								<motion.span
									key={open ? 'close' : 'menu'}
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.15 }}
									className="grid place-items-center"
								>
									{open ? <X size={20} /> : <Menu size={20} />}
								</motion.span>
							</AnimatePresence>
						</button>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{open && (
					<motion.nav
						id="mobile-navigation"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.25, ease: 'easeInOut' }}
						className="overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-xl lg:hidden"
						aria-label="Mobile page sections"
					>
						<div className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-4 sm:px-7">
							{links.map(([label, href], i) => (
								<motion.a
									key={href}
									href={href}
									onClick={close}
									initial={{ opacity: 0, x: -8 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.2, delay: i * 0.04 }}
									className="flex min-h-11 items-center rounded-xl px-3 text-[15px] font-medium text-[#282321] transition-colors hover:bg-[#a91d21]/8 hover:text-[#a91d21]"
								>
									{label}
								</motion.a>
							))}
							<a
								href="#contact"
								onClick={close}
								className="mt-2 flex min-h-11 items-center justify-center rounded-full bg-[#a91d21] px-4 text-sm font-semibold text-white transition hover:bg-[#8f171b]"
							>
								Get in touch
							</a>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}
