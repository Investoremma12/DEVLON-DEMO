import { Music2, X } from 'lucide-react';
import type { ReactNode } from 'react';
import catering from '../assets/images/catering.jpeg';
import qr from '../assets/images/qr-code.png';
import JaggedDivider from '../components/JaggedDivider';
import Reveal from '../components/Reveal';

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#a91d21] text-white">
      <div className="relative h-[72vw] min-h-[380px] max-h-[720px] overflow-hidden">
        <img src={catering} alt="Devlon catering service and buffet" className="h-full w-full object-cover object-center" />
        <JaggedDivider color="#a91d21" height={24} className="absolute bottom-[-1px] left-0" />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-10 sm:px-10 sm:pb-20 lg:px-20">
        <Reveal>
          <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-start">
            <div>
              <p className="font-display text-xl text-[#fff200] sm:text-2xl">Personalized. Data-Driven. Delightful.</p>
              <h2 className="mt-3 font-display text-[clamp(3.5rem,7vw,6rem)] font-light leading-none tracking-[-0.07em]">Taste Home Again.</h2>
            </div>
            <img src={qr} alt="QR code for Devlon" className="size-28 bg-white p-1 sm:size-32" />
          </div>
          <div className="mt-12 h-px bg-white/75" />

          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            <div>
              <h3 className="text-xl">Contact Details</h3>
              <a href="tel:+2349135259178" className="mt-5 block min-h-11 text-base leading-[1.5] transition-colors hover:text-[#fff200] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff200]">+234 913 525 9178, +234 905 168 5719</a>
              <a href="mailto:mrdevlonofficial@gmail.com" className="block min-h-11 text-base leading-[1.5] transition-colors hover:text-[#fff200] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff200]">•mrdevlonofficial@gmail.com</a>
            </div>
            <div className="space-y-2 sm:justify-self-end sm:min-w-60">
              <SocialLink href="https://instagram.com/MrDevlon_Foods" icon={<InstagramIcon />} label="@MrDevlon_Foods" />
              <SocialLink href="https://tiktok.com/@MrDevlon_Foods" icon={<Music2 size={16} />} label="MrDevlon_Foods" />
              <SocialLink href="https://x.com/MrDevlon_Foods" icon={<X size={16} />} label="@MrDevlon_Foods" />
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-4 rounded-xl px-1 transition-colors hover:text-[#fff200] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff200]">
      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-[#a91d21]">{icon}</span>
      {label}
    </a>
  );
}
