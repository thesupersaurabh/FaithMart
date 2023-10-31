import "./globals.css"
import UserProvider from './context/user'
import CartProvider from './context/cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'FaithMart - Unity in Faith, Variety in Choices',
  description: 'Faith Mart: Your destination for spiritual treasures from diverse traditions. Explore and celebrate the richness of faith through a wide range of sacred products and meaningful finds.',
}
 
export default function RootLayout({ children }) {

 return (
    <html lang="en">
      <body>
        <div>
          <ToastContainer />

          <UserProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </UserProvider>
        </div>
      </body>
    </html>
  )
}
