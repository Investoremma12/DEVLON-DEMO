import { motion } from 'framer-motion';
import community from '../assets/images/community-meal.jpeg';
import JaggedDivider from '../components/JaggedDivider';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <section id="about">
<div className="bg-[#a91d21] h-50"></div>

      <div className="relative bg-[#a91d21] pb-28 pt-8 sm:pb-32">
        <JaggedDivider color="#ffffff" height={28} className="absolute inset-x-0 bottom-[-1px]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 pb-20 sm:px-10 lg:px-20 lg:pb-24">
        <div className="relative -mt-28 grid items-start gap-10 sm:-mt-36 z-100 lg:grid-cols-[0.48fr_0.52fr] lg:gap-16">
          <motion.figure initial={{ opacity: 0, y: 26, rotate: -2 }} whileInView={{ opacity: 1, y: 0, rotate: -2 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="relative mx-auto w-full max-w-[360px] bg-[#eef2f3] p-3 shadow-[0_12px_30px_rgba(30,20,15,0.08)]">
            <img src={community} alt="People being served food at a Devlon event" className="aspect-[0.69] w-full object-cover" />
            <span aria-hidden="true" className="absolute -top-7 left-1/2 size-16 -translate-x-1/2 rounded-full bg-[#dfceb7] shadow-[7px_7px_0_rgba(90,65,50,.2)]" />
          </motion.figure>
          <p className="self-center pt-4 font-display text-[clamp(2rem,4vw,3.65rem)] font-light leading-[1.02] tracking-[-0.055em] text-[#c7c7c9] lg:pt-44">
            “Bringing Passion,<br />Flavor, and Creativity<br />to Every Dish”.
          </p>
        </div>

        <Reveal className="mt-16 max-w-[1160px] sm:mt-20">
          <h2 className="font-display text-[clamp(3rem,5.5vw,4.9rem)] font-semibold leading-none tracking-[-0.06em] text-[#a91d21]">Who we are</h2>
          <div className="mt-8 max-w-[1110px] space-y-6 text-base leading-[1.55] text-[#171313] sm:text-[1.15rem]">
            <p>Devlon is a tech-enabled food company designed to solve the "what will I eat?" problem for the modern world.</p>
            <p>We believe that being busy shouldn't mean compromising on quality. By sitting at the intersection of culinary excellence and smart systems, we provide a reliable feeding ecosystem for people who value their time as much as their health.</p>
            <p>Our approach replaces the guesswork of mealtime with a lifestyle solution that prioritizes nutrition, consistency, and seamless convenience. We use technology as our enabler—not just to power ordering and delivery, but to personalize the experience and ensure that high-quality food fits effortlessly into your daily routine.</p>
            <p>Devlon is more than a meal; it is peace of mind designed for modern life.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
