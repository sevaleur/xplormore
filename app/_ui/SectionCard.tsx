const SectionCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full bg-white/40 rounded-lg backdrop-blur-lg px-8 py-4 relative">
      {children}
    </div>
  );
};

export default SectionCard;
