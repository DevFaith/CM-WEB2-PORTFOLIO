export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-800 to-pink-700" />
      <div className="absolute inset-0 bg-purple-900/40" />

      {/* Subtle moving cloud/fog layers */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-cloud1" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-cloud2" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-cloud3" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-cloud4" />
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-cloud1" />
    </div>
  );
}