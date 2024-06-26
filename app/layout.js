import Footer from '@/Components/Footer/Footer'
import './globals.css'
import Navbar from '@/Components/Navbar/Navbar'
import Whatsapp from '@/Components/Whatsapp/Whatsapp'

export const metadata = {
  title: 'Ripon M. - Developer portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body suppressHydrationWarning>
      <Navbar/>
      <div className='container mx-auto'>
      <Whatsapp/>
        {children}
        </div>
        
        <Footer/>
        </body>
    </html>
    </>
  )
}
 