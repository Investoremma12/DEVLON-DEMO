import { motion } from 'framer-motion';
import hero from '../assets/images/hero-food.jpeg';
import logo from '../assets/logos/devlon-white.png';
import JaggedDivider from '../components/JaggedDivider';

export default function Hero() {
  return (
    <section id="top" className="bg-white mb-5">
      <div className="mx-auto max-w-[1440px] px-5 pb-9 pt-24 sm:px-10 sm:pb-11 sm:pt-28 lg:px-20 lg:pt-32">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <h1 className="font-display text-[clamp(3rem,6vw,5.6rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#a91d21]">
            Company Profile
          </h1>
          <p className="mt-2 text-[clamp(1.2rem,2vw,1.75rem)] leading-none tracking-[-0.04em] text-[#171313]">
            www.devlon.com
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden bg-[#e8e7e2]">
        <JaggedDivider color="#ffffff" height={30} className="left-0 -top-3 rotate-180" />
        <motion.img
          initial={{ scale: 1.025, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src={hero}
          alt="Traditional African food prepared by Devlon"
          className="h-[58vw] min-h-[380px] max-h-[720px] w-full object-cover object-center"
        />
      </div>

      <div className="relative overflow-hidden bg-[#a91d21] px-5 pb-20 pt-12 text-white sm:px-10 sm:pb-24 sm:pt-16 lg:px-20">
        <JaggedDivider color="#ffffff" height={28} className="left-0 -top-2 rotate-180 " />
        <div className="mx-auto max-w-[1280px] pt-5">
          <motion.img src={logo} alt="Devlon" className="mb-8 h-12 w-auto sm:h-14" initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} />
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="max-w-[1100px] font-display text-[clamp(3.8rem,9.2vw,9.5rem)] font-medium leading-[0.84] tracking-[-0.075em]">
            Your Daily<br />food, solved.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.12, duration: 0.4 }} className="mt-9 font-display text-[clamp(1.35rem,2.5vw,2.35rem)] leading-none tracking-[-0.045em] text-[#fff200]">
            Personalized. Data-Driven. Delightful.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
