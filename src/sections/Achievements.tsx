import achievements from '../assets/images/achievements-meat.jpeg';
import JaggedDivider from '../components/JaggedDivider';
import Reveal from '../components/Reveal';

export default function Achievements() {
  return (
    <section id="achievements" className="bg-white">
      <div className="relative bg-[#fb5b22] pb-12 pt-12 text-white sm:pb-14 sm:pt-16">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-10 lg:px-20">
          <div className="mt-28 sm:mt-32">
            <h2 className="font-display text-[clamp(3.1rem,6.5vw,6.2rem)] font-medium leading-[0.88] tracking-[-0.07em]">What We’ve Achieved</h2>
            <p className="font-display text-[clamp(2rem,4.8vw,4.55rem)] font-medium leading-[0.9] tracking-[-0.07em] text-[#a91d21]">Daily Meals to Global Events</p>
          </div>
        </div>
        <JaggedDivider color="#ffffff" height={26} className="absolute inset-x-0 bottom-[-1px]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 pb-20 pt-12 sm:px-10 sm:pb-24 lg:px-20">
        <Reveal className="max-w-[1150px] text-base leading-[1.55] text-[#171313] sm:text-[1.15rem]">
          <p>In just 24 months, Devlon has demonstrated an unmatched ability to handle diverse culinary demands at scale. We have evolved from a meal provider into a high-capacity logistics powerhouse.</p>
          <ul className="mt-6 space-y-5 pl-7">
            <li className="list-disc"><strong>Mass-Scale Excellence:</strong> Served over 30,000 people, providing consistent, quality nutrition to university campuses and corporate offices alike.</li>
            <li className="list-disc"><strong>International Recognition:</strong> In 2024, Devlon was selected as the official meal provider for the 11th Edition of the Federation of Africa University Sports (FASU). We successfully managed the dietary needs of participants from 43 African countries, proving our ability to operate on a continental stage with cultural sensitivity and logistical excellence.</li>
          </ul>
          <p className="mt-7">Our systems are built for scale, allowing us to manage complex, large-scale feeding operations without compromising on quality or consistency. Whether it is a daily corporate staff lunch or an international summit, Devlon delivers a seamless dining experience driven by precision.</p>
        </Reveal>
        <Reveal className="mt-20 ml-auto max-w-[1080px] overflow-hidden rounded-t-[5rem] sm:mt-24">
          <img src={achievements} alt="Large-scale prepared food operation" className="h-auto w-full" />
        </Reveal>
      </div>
    </section>
  );
}
