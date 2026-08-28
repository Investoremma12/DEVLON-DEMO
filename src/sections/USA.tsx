import agoyin from '../assets/images/agoyin-platter.jpeg';
import store from '../assets/images/usa-store.jpeg';
import bowl from '../assets/images/agoyin-bowl.jpeg';
import wide from '../assets/images/agoyin-bowl-wide.jpeg';
import african from '../assets/images/african-platter.jpeg';
import rice from '../assets/images/rice-beans.jpeg';
// import JaggedDivider from '../components/JaggedDivider';
import Reveal from '../components/Reveal';

const benefits = [
	[
		'High Protein Content',
		'A powerful plant-based protein source that aids in muscle repair and growth.',
	],
	[
		'Slow-Release Energy',
		'The complex carbohydrates in honey beans provide steady energy levels throughout the day.',
	],
	[
		'Rich in Fiber',
		'Supports digestive health and promotes a feeling of fullness.',
	],
	[
		'Essential Minerals',
		'Packed with iron, potassium, and magnesium, which are vital for heart health and blood circulation.',
	],
];

export default function USA() {
	return (
		<section id="usa" className="bg-white">
			<div className="relative min-h-[760px] overflow-hidden bg-black sm:min-h-[900px]">
				<img
					src={agoyin}
					alt="Ewa Agoyin meal with plantain and sauce"
					className="absolute inset-0 h-full w-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-black/8" />
				<div className="absolute inset-x-5 bottom-16 mx-auto max-w-[700px] sm:inset-x-10 sm:bottom-20">
					<div className="relative bg-white px-6 pb-12 pt-14 text-center sm:px-12 sm:pt-16">
						<span
							aria-hidden="true"
							className="absolute -top-8 left-1/2 size-16 -translate-x-1/2 rounded-full bg-[#dfceb7] shadow-[8px_8px_0_rgba(90,65,50,.22)]"
						/>
						<h2 className="font-display text-[clamp(2.45rem,5vw,4.8rem)] font-semibold leading-[0.93] tracking-[-0.065em] text-[#a91d21]">
							THE USA (United
							<br className="hidden sm:block" /> States of Agoyin)
						</h2>
						<p className="mt-6 font-display text-[clamp(1.2rem,2.2vw,2rem)] tracking-[-0.045em] text-[#171313]">
							The rebirth of the Original and True Agoyin
						</p>
					</div>
				</div>
				<p className="absolute bottom-6 left-5 text-xs text-white sm:left-10 lg:left-20">
					04 The USA (United States of Agoyin)
				</p>
			</div>

			<div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-10 sm:py-20 lg:px-20">
				<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
					<Reveal>
						<h3 className="font-display text-[clamp(4.2rem,8.3vw,7.2rem)] font-medium leading-[0.84] tracking-[-0.075em] text-[#333]">
							Local
							<br />
							Beans
							<br />
							<span className="text-[#a91d21]">
								Ewa
								<br />
								Agoyin
							</span>
						</h3>
						<div className="mt-16 flex max-w-md gap-6 border-l-[6px] border-[#a91d21] pl-8">
							<p className="text-[clamp(1.35rem,2vw,2rem)] font-semibold leading-[1.08] text-[#a91d21]">
								A rich and flavorful Beans seared to perfection.
							</p>
						</div>
					</Reveal>

					<Reveal className="text-base leading-[1.55] text-[#333] sm:text-[1.08rem]">
						<p>
							<span className="text-[#a91d21]">Ewa Agoyin</span> traces its
							roots to the Agoyin people (Beninese and Togolese migrants) who
							settled in Lagos in the 1960s.
						</p>
						<p className="mt-4">
							Soft, buttery honey beans paired with a signature gritty, spicy,
							and deeply caramelized palm oil sauce. A classic street-food
							staple that brings the authentic taste of Lagos to your table.
						</p>
						<h4 className="mt-14 text-xl font-medium">Benefits:</h4>
						<ul className="mt-5 space-y-7">
							{benefits.map(([title, body]) => (
								<li key={title} className="flex gap-3">
									<span aria-hidden="true" className="mt-1 text-xl">
										•
									</span>
									<p>
										<span className="font-medium text-[#a91d21]">{title}:</span>{' '}
										{body}
									</p>
								</li>
							))}
						</ul>
					</Reveal>
				</div>

				<div className="relative mt-16 min-h-0 sm:mt-20 sm:min-h-[430px]">
					<Reveal className="relative z-10 mx-auto w-full max-w-[390px] rotate-[1.5deg] bg-[#eef2f3] p-3 shadow-sm sm:absolute sm:left-0 sm:top-0 sm:w-[47%] sm:max-w-none">
						<img
							src={store}
							alt="The United States of Agoyin food stall"
							className="w-full"
						/>
						<span
							aria-hidden="true"
							className="absolute -top-7 left-1/2 size-14 -translate-x-1/2 rounded-full bg-[#dfceb7] shadow-[7px_7px_0_rgba(90,65,50,.22)]"
						/>
					</Reveal>
					<Reveal className="relative z-20 mx-auto mt-14 w-full max-w-[520px] -rotate-[1deg] bg-[#eef2f3] p-3 shadow-sm sm:absolute sm:right-0 sm:top-28 sm:mt-0 sm:w-[58%] sm:max-w-none">
						<img src={bowl} alt="Ewa Agoyin with plantain" className="w-full" />
						<span
							aria-hidden="true"
							className="absolute -top-7 left-1/2 size-14 -translate-x-1/2 rounded-full bg-[#dfceb7] shadow-[7px_7px_0_rgba(90,65,50,.22)]"
						/>
					</Reveal>
				</div>
			</div>

			<div className="bg-[#99918b] px-5 py-10 sm:px-10 sm:py-12 lg:px-20">
				<div className="mx-auto max-w-[1280px] space-y-10">
					{[wide, african, rice].map((src, index) => (
						<TornPhoto key={src} src={src} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}

function TornPhoto({ src, index }: { src: string; index: number }) {
	const alts = [
		'Ewa Agoyin bowl with plantain',
		'African platter of traditional dishes',
		'Rice and beans served on a leaf',
	];
	return (
		<Reveal className="relative overflow-hidden bg-white p-[3px] [clip-path:polygon(0_3%,2%_2%,4%_4%,6%_2%,8%_4%,10%_1%,12%_3%,14%_2%,16%_4%,18%_2%,20%_4%,22%_1%,24%_3%,26%_2%,28%_4%,30%_2%,32%_3%,34%_1%,36%_4%,38%_2%,40%_4%,42%_2%,44%_3%,46%_1%,48%_4%,50%_2%,52%_4%,54%_2%,56%_3%,58%_1%,60%_4%,62%_2%,64%_4%,66%_2%,68%_3%,70%_1%,72%_4%,74%_2%,76%_4%,78%_2%,80%_3%,82%_1%,84%_4%,86%_2%,88%_4%,90%_2%,92%_3%,94%_1%,96%_4%,98%_2%,100%_3%,100%_97%,98%_98%,96%_96%,94%_99%,92%_97%,90%_98%,88%_96%,86%_99%,84%_97%,82%_98%,80%_96%,78%_99%,76%_97%,74%_98%,72%_96%,70%_99%,68%_97%,66%_98%,64%_96%,62%_99%,60%_97%,58%_98%,56%_96%,54%_99%,52%_97%,50%_98%,48%_96%,46%_99%,44%_97%,42%_98%,40%_96%,38%_99%,36%_97%,34%_98%,32%_96%,30%_99%,28%_97%,26%_98%,24%_96%,22%_99%,20%_97%,18%_98%,16%_96%,14%_99%,12%_97%,10%_98%,8%_96%,6%_99%,4%_97%,2%_98%,0_97%)]">
			<img src={src} alt={alts[index]} className="w-full object-cover" />
		</Reveal>
	);
}
