import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustBadges from '@/components/TrustBadges';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div className="noise" />
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      
      <footer className="py-20 bg-navy text-white/60">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">M</div>
              <span className="text-white font-bold text-xl">Monarch Dentistry</span>
            </div>
            <p className="leading-relaxed max-w-xs">The pinnacle of dental luxury and clinical precision in Southern Ontario.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold mb-2">Clinic</span>
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">Locations</a>
              <a href="#" className="hover:text-primary transition-colors">Careers</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold mb-2">Patients</span>
              <a href="#" className="hover:text-primary transition-colors">CDCP Guide</a>
              <a href="#" className="hover:text-primary transition-colors">Billing</a>
              <a href="#" className="hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-sm mb-6">Join our elite patient circle for health insights.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-navy/50 border border-white/10 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-primary" />
              <button className="bg-primary text-white rounded-full p-2 hover:bg-primary/90 transition-colors">
                <span className="sr-only">Join</span>
                $\rightarrow$
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-sm">
          <p>© 2026 Monarch Dentistry. Masterfully Crafted for Excellence.</p>
        </div>
      </footer>
    </main>
  );
}
