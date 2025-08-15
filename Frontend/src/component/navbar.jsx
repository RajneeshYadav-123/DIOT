export default function GlassNavbar() {
  return (
    <nav className="fixed z-30 top-0 left-0 w-full backdrop-blur-md bg-white/20 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-orange-500">
          {/* You can replace this emoji or with an image */}
          <span className="text-2xl">🚁</span> DroneX
        </div>

        {/* Nav Links */}
        <div className="flex gap-6 items-center text-base font-semibold text-white drop-shadow-sm">
          <a href="#event" className="hover:text-orange-400 transition">Event</a>
          <a href="#team" className="hover:text-orange-400 transition">Team</a>
          <a href="#verify" className="hover:text-orange-400 transition">Verify Certificate</a>
          <a href="#contact" className="hover:text-orange-400 transition">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}
