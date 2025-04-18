import { Poppins } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/libs/redux/ReduxProvider';
import Header from '@/components/outlet/Header';
import Footer from '@/components/outlet/Footer';
import Bubble from '@/components/outlet/Bubble';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';

const poppinsFont = Poppins({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Tinn',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppinsFont.className} scroll-smooth antialiased`}>
        <ReduxProvider>
          <SmoothScrollWrapper>
            <Header />
            {children}
            <Bubble />
            <Footer />
          </SmoothScrollWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
