import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-gray-100 font-sans selection:bg-purple-500/30">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-lg">A</div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">AutoWrite AI</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Dashboard</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Logs</a>
            <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-all">Sign Out</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">AI News Dashboard</h1>
          <p className="text-gray-400 text-lg">Theo dõi và quản lý hệ thống tự động hóa nội dung podcast của bạn.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Total Episodes', value: '452', change: '+12 today', color: 'purple' },
            { label: 'Uptime', value: '99.9%', change: 'Stable', color: 'green' },
            { label: 'AI Processed', value: '1.2M', change: 'Words', color: 'blue' },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
              <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">{stat.value}</p>
                <span className={`text-xs px-2 py-1 rounded-full bg-${stat.color}-500/10 text-${stat.color}-400`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Console / Last Run Area */}
        <div className="rounded-2xl bg-[#090915] border border-white/10 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <h2 className="font-semibold">Bản tin tóm tắt mới nhất (Last Run)</h2>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></span>
            </div>
          </div>
          <div className="p-8 font-mono text-sm leading-relaxed text-gray-300">
            <p className="mb-4 text-purple-400"># LOG: 2026-03-27 06:15:00 UTC</p>
            <p className="mb-6">[FETCH] news from VNExpress successful (3 items found)</p>
            <div className="p-6 rounded-xl bg-white/5 border border-white/5 italic">
              "Chào các bạn, đây là bản tin nhanh từ AutoWrite AI. Buổi sáng hôm nay chúng ta ghi nhận những chuyển biến quan trọng trong thị trường công nghệ và giáo dục. Từ những sự thay đổi của kỳ thi 2025 tới sự bùng nổ của các mô hình AI mới... Hãy cùng lắng nghe chi tiết trong tập Podcast hôm nay nhé!"
            </div>
            <p className="mt-6 text-green-400 font-bold tracking-widest text-xs">STATUS: IDLE</p>
          </div>
        </div>

        {/* Manual Control Section */}
        <section className="mt-12 text-center">
            <button className="relative group px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-white shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all active:scale-95">
                Chạy Cron Job Thủ Công ngay bây giờ
            </button>
            <p className="text-xs text-gray-500 mt-4 italic">Hệ thống sẽ tự động chạy lại sau 45 phút nữa theo lịch trình.</p>
        </section>
      </main>
    </div>
  );
}
