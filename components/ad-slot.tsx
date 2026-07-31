type Props = { label: string };

export function AdSlot({ label }: Props) {
  return (
    <div className="my-8 glass-card bg-black/20 border-cosmic-800/30 p-6 text-center relative overflow-hidden group">
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shimmer"></div>
      
      <div className="absolute top-2 right-2">
        <span className="text-[10px] uppercase tracking-widest bg-cosmic-800/50 text-cosmic-300 px-2 py-1 rounded">Ad</span>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100px]">
        <p className="font-display font-medium text-cosmic-200 tracking-wide mb-1">Discover the Cosmos</p>
        <p className="text-sm text-cosmic-400">{label}</p>
      </div>
    </div>
  );
}
