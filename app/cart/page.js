'use client';

import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../components/SimilarProducts";
import CartItem from "../components/CartItem";
import { useCart } from "../context/cart";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useIsLoading from "../hooks/useIsLoading";
import ClientOnly from "../components/ClientOnly";

export default function Cart() {
  const router = useRouter();
  const cart = useCart();

  useEffect(() => { 
    useIsLoading(true);
    cart.getCart();
    cart.cartTotal();
    useIsLoading(false);
  }, [cart]);

  const goToCheckout = () => {
    if (!cart.cartTotal()) {
      alert("You don't have any items in the cart.");
      return;
    }
    router.push('/checkout');
  }

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
          <div className="text-3xl font-semibold my-6">Your Shopping Cart</div>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <ClientOnly>
              <div className="w-full md:w-[70%]">
                {cart.getCart().map(product => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
            </ClientOnly>

            <div id="GoToCheckout" className="w-full md:w-[30%]">
              <ClientOnly>
                <div className="bg-white p-4 border rounded-lg shadow-lg">
                  <button
                    onClick={goToCheckout}
                    className="bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4 hover:bg-blue-700 transition duration-300"
                  >
                    Proceed to Checkout
                  </button>

                  <div className="mt-6">
                    <div className="flex justify-between text-sm">
                      <span>Items ({cart.getCart().length})</span>
                      <span>£{(cart.cartTotal() / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span>Shipping:</span>
                      <span>Free</span>
                    </div>
                    <hr className="border-t border-gray-300 my-2"/>
                    <div className="flex justify-between mt-2 text-lg font-semibold">
                      <span>Subtotal</span>
                      <span>£{(cart.cartTotal() / 100).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </ClientOnly>
            </div>
          </div>
        </div>

        <SimilarProducts />
      </MainLayout>
    </>
  );
}
