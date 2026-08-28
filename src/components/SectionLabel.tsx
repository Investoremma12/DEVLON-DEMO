type SectionLabelProps = { children: string; light?: boolean };

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return <p className={`text-xs font-medium uppercase tracking-[0.16em] ${light ? 'text-white/80' : 'text-[#a91d21]'}`}>{children}</p>;
}
