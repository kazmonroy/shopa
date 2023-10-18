"use client"

import { useEffect } from "react"
import { CheckCheck, XCircle } from "lucide-react"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"

interface Props {
  customerDetails: Stripe.Checkout.Session.CustomerDetails | null
}

export function CheckoutSession({ customerDetails }: Props) {
  const { clearCart } = useShoppingCart()
  useEffect(() => {
    if (customerDetails) {
      clearCart()
    }
  })
  if (!customerDetails) {
    return (
      <>
        <XCircle className="mx-auto h-10 w-10 text-red-400" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-400 sm:text-5xl">
          No checkout session found
        </h1>
      </>
    )
  }

  return (
    <>
      <CheckCheck className="mx-auto h-10 w-10 text-emerald-500 dark:text-emerald-400" />
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-emerald-500 dark:text-emerald-400 sm:text-4xl">
        Order Successful!
      </h1>
      <h3 className="mt-8 text-2xl leading-7 sm:text-4xl">
        Thank you,{" "}
        <span className="font-extrabold">{customerDetails.name}</span>!
      </h3>
      <p className="mt-8  sm:text-3xl">
        Check your purchase email{" "}
        <span className="mx-1 font-extrabold text-orange-400">
          {customerDetails.email}
        </span>{" "}
        for your invoice.
      </p>
    </>
  )
}
