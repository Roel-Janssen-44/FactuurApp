import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of service',
};

export default function Terms() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="min-h-screen"></div>
      <Footer />
    </main>
  );
}
