// import { AnimatePresence, motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import logo from '../assets/logos/devlon-outline.jpeg';

// const links = [
//   ['Who we are', '#about'],
//   ["What we've achieved", '#achievements'],
//   ['The USA', '#usa'],
//   ['Why this works', '#why'],
// ] as const;

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const closeOnResize = () => {
//       if (window.innerWidth >= 1024) setOpen(false);
//     };
//     window.addEventListener('resize', closeOnResize);
//     return () => window.removeEventListener('resize', closeOnResize);
//   }, []);

//   const close = () => setOpen(false);

//   return (
//     <header className="absolute inset-x-0 top-0 z-50" aria-label="Primary navigation">
//       <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-7 sm:pt-6 lg:px-10 lg:pt-7">
//         <div className="flex items-center justify-between gap-4">
//           <a
//             href="#top"
//             aria-label="Devlon home"
//             onClick={close}
//             className="group rounded-full bg-white/90 p-2 shadow-[0_10px_35px_rgba(0,0,0,0.10)] backdrop-blur-md outline-none transition-transform duration-200 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#a91d21] focus-visible:ring-offset-2"
//           >
//             <img src={logo} alt="Devlon" className="h-9 w-auto sm:h-10" />
//           </a>

//           <nav className="hidden items-center gap-1 rounded-full border border-black/8 bg-white/90 p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.10)] backdrop-blur-md lg:flex" aria-label="Page sections">
//             {links.map(([label, href]) => (
//               <a
//                 key={href}
//                 href={href}
//                 className="rounded-full px-4 py-2.5 text-[13px] font-semibold text-[#282321] transition-colors duration-200 hover:bg-[#a91d21] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a91d21]"
//               >
//                 {label}
//               </a>
//             ))}
//           </nav>

//           <div className="flex items-center gap-2">
//             <a
//               href="#contact"
//               className="hidden min-h-11 items-center rounded-full bg-[#a91d21] px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(169,29,33,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#8f171b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a91d21] focus-visible:ring-offset-2 sm:flex"
//             >
//               Contact
//             </a>
//             <button
//               type="button"
//               onClick={() => setOpen((value) => !value)}
//               className="grid size-11 place-items-center rounded-full border border-black/10 bg-white/95 text-[#a91d21] shadow-[0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a91d21] lg:hidden"
//               aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
//               aria-expanded={open}
//               aria-controls="mobile-navigation"
//             >
//               {open ? <X size={21} /> : <Menu size={21} />}
//             </button>
//           </div>
//         </div>

//         <AnimatePresence initial={false}>
//           {open && (
//             <motion.nav
//               id="mobile-navigation"
//               initial={{ opacity: 0, y: -8, scale: 0.98 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -8, scale: 0.98 }}
//               transition={{ duration: 0.2 }}
//               className="ml-auto mt-3 max-w-sm rounded-3xl border border-black/8 bg-white p-2 shadow-[0_18px_55px_rgba(0,0,0,0.16)] lg:hidden"
//               aria-label="Mobile page sections"
//             >
//               {links.map(([label, href]) => (
//                 <a key={href} href={href} onClick={close} className="flex min-h-11 items-center rounded-2xl px-4 py-3 text-sm font-semibold text-[#282321] transition-colors hover:bg-[#a91d21] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a91d21]">
//                   {label}
//                 </a>
//               ))}
//               <a href="#contact" onClick={close} className="mt-1 flex min-h-11 items-center justify-center rounded-2xl bg-[#a91d21] px-4 py-3 text-sm font-semibold text-white">
//                 Contact Devlon
//               </a>
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// }
