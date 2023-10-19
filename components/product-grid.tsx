"use client"

import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { XCircle } from "lucide-react"
import { formatCurrencyString } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"

interface Props {
  products: SanityProduct[]
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border border-dashed bg-slate-50 py-10 text-center dark:bg-zinc-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-orange-400 dark:text-orange-400" />
          <h1 className="mt-2 text-xl font-semibold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product) => (
        <Link
          key={product._id}
          href={`/products/${product.slug}`}
          className="group text-sm"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border border-slate-200 bg-gray-50 group-hover:opacity-75 dark:border-gray-800">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(225, 280)
              )}`}
              src={urlForImage(product.images[0]).url()}
              alt={product.name}
              width={225}
              height={280}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-4 font-medium">{product.name}</h3>
          <p className="mt-2 font-medium">
            {formatCurrencyString({
              currency: product.currency,
              value: product.price,
            })}
          </p>
        </Link>
      ))}
    </div>
  )
}
