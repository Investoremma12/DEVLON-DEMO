import { motion } from 'framer-motion';
import phone from '../assets/images/fmo-phone-cards.png';
import logo from '../assets/logos/devlon-white.png';
import JaggedDivider from '../components/JaggedDivider';
import Reveal from '../components/Reveal';

const usps = [
	[
		'The Signature "Dark-Art" Sauce',
		'We utilize a proprietary, slow-caramelization process using traditional sun-dried peppers and high-grade palm oil. This ensures the authentic, gritty, smoky depth that commercial competitors often fail to replicate.',
	],
	[
		'Consistency at Scale',
		'By standardizing our preparation metrics, we eliminate the "hit-or-miss" nature of traditional vendors. Every bowl maintains the exact same flavor profile, whether ordered in-store or via delivery.',
	],
	[
		'Identity & Storytelling',
		'Unlike generic food vendors, our brand leans into the rich history of the Agoyin people, turning a meal into a cultural experience that resonates with the nostalgia of our audience.',
	],
];

export default function Why() {
	return (
		<section id="why" className="bg-[#f7f7f8]">
			{/* WHY THIS WOULD WORK */}
			<div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-10 sm:py-20 lg:px-20">
				<Reveal>
					<h2 className="font-display text-[clamp(3.2rem,6.5vw,5.9rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#333]">
						Why this would work
					</h2>
				</Reveal>

				<div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
					<Reveal className="text-base leading-[1.55] text-[#3a3737] sm:text-[1.08rem]">
						<p>
							Our primary success driver is the professionalization of a
							high-demand cultural staple. While Ewa Agoyin has a massive,
							loyal consumer base, it is largely underserved by brands that
							offer hygiene, consistency, and premium packaging. We occupy
							the space between "authentic street flavor" and "modern
							consumer standards."
						</p>

						<p className="mt-8">
							Ultimately, bridging this gap is about elevating a commodity
							into an experience. By applying high-level branding and
							digital-first accessibility to a heritage dish, the business
							moves away from competing on price and begins competing on
							value. This allows the brand to command a premium while
							providing the customer with a sense of nostalgic comfort
							delivered through a modern, reliable lens.
						</p>

						<div className="mt-10 flex gap-6 border-l-[6px] border-[#a91d21] pl-8">
							<p className="text-[clamp(1.4rem,2.3vw,2rem)] font-semibold leading-[1.1] text-[#a91d21]">
								A refreshing blend—perfect for every days.
							</p>
						</div>
					</Reveal>

					<Reveal>
						<h3 className="font-display text-2xl font-semibold tracking-[-0.05em] text-[#333]">
							Unique Selling Points (USP)
						</h3>

						<ul className="mt-7 space-y-7 text-base leading-[1.55] text-[#3a3737] sm:text-[1.08rem]">
							{usps.map(([title, body]) => (
								<li key={title} className="flex gap-3">
									<span
										aria-hidden="true"
										className="mt-1 text-xl"
									>
										•
									</span>

									<p>
										<span className="text-[#a91d21]">
											{title}:
										</span>{' '}
										{body}
									</p>
								</li>
							))}
						</ul>
					</Reveal>
				</div>
			</div>

			{/* FMO COMING SOON SECTION */}
			<div className="relative overflow-hidden bg-[#b9bdc0] px-5 pb-16 pt-16 sm:px-10 sm:pb-20 lg:px-20">
				<JaggedDivider
					color="#f7f7f8"
					height={28}
					className="absolute left-0 -top-2 w-full rotate-180"
				/>

				{/* Larger desktop container */}
				<div className="mx-auto max-w-[820px] pt-6">
					<div
						className="
							relative
							h-[335px]
							overflow-visible
							rounded-[25px]
							bg-[#a91d21]
							text-white

							max-[640px]:h-[272px]
							max-[640px]:rounded-[23px]
						"
					>
						{/* COMING SOON */}
						<div
							className="
								absolute
								left-1/2
								-top-[31px]
								z-30
								flex
								h-[46px]
								w-[250px]
								-translate-x-1/2
								items-center
								justify-center
								rounded-full
								bg-black
								text-[17px]
								font-medium
								text-[#fff200]

								max-[640px]:-top-[29px]
								max-[640px]:h-[42px]
								max-[640px]:w-[230px]
								max-[640px]:text-[16px]
							"
						>
							Coming Soon
						</div>

						{/* LEFT CONTENT */}
						<div
							className="
								absolute
								left-[58px]
								top-[48px]
								z-10
								w-[350px]

								max-[640px]:left-[30px]
								max-[640px]:top-[43px]
								max-[640px]:w-[250px]
							"
						>
							{/* Devlon + HMO */}
							<div className="flex items-center gap-2">
								<img
									src={logo}
									alt="Devlon"
									className="
										h-[47px]
										w-auto
										object-contain

										max-[640px]:h-[38px]
									"
								/>

								<span
									className="
										text-[38px]
										font-medium
										leading-none
										tracking-[-0.04em]

										max-[640px]:text-[31px]
									"
								>
									HMO
								</span>
							</div>

							{/* FMO */}
							<div className="mt-0">
								<span
									className="
										font-display
										text-[100px]
										font-medium
										leading-[0.82]
										tracking-[-0.08em]

										max-[640px]:text-[82px]
									"
								>
									FMO
								</span>
							</div>

							{/* Divider */}
							<div
								className="
									mt-[15px]
									h-px
									w-[330px]
									bg-white/80

									max-[640px]:mt-[13px]
									max-[640px]:w-[250px]
								"
							/>

							{/* Description */}
							<p
								className="
									mt-[11px]
									text-[18px]
									font-medium
									leading-[1.15]
									text-[#fff200]

									max-[640px]:mt-[10px]
									max-[640px]:text-[16px]
								"
							>
								Structured Feeding, One Subscription,
								<br />
								Eat Anywhere, Anytime.
							</p>
						</div>

						{/* PHONE + CARDS */}
						<motion.img
							initial={{
								y: 40,
								opacity: 0,
							}}
							whileInView={{
								y: 0,
								opacity: 1,
							}}
							viewport={{
								once: true,
							}}
							transition={{
								duration: 0.7,
								ease: 'easeOut',
							}}
							src={phone}
							alt="FMO mobile food ordering concept"
							className="
								absolute
								bottom-0
								right-[-10px]
								z-20
								w-[365px]
								max-w-none

								max-[640px]:right-[-80px]
								max-[640px]:w-[260px]
								max-[500px]:right-[-115px]
								max-[500px]:w-[230px]
							"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}