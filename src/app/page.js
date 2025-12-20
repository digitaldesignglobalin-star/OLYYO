import Hero from '@/components/home/Hero';
import Restaurants from '@/components/home/Restaurants';
import Foods from '@/components/home/Foods';
import Features from '@/components/home/Features';
import AppDownload from '@/components/home/AppDownload';
import Footer from '@/components/home/Footer';
import Navbar from '@/components/home/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <Navbar />
      <Hero />
      <Restaurants />
      <Foods />
      <Features />
      <AppDownload />
      <Footer />
    </div>
  );
}