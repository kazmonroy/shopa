"use client"

import Link from "next/link"
import { Plus, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CartItemsEmpty() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-slate-300 dark:border-zinc-700">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <XCircle className="h-10 w-10  text-orange-400 dark:text-orange-400" />
        <h3 className="mt-4 text-lg font-semibold">No products added</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          Add products to your cart.
        </p>
        <Link href="/">
          <Button size="sm" className="relative">
            <Plus className="mr-2 h-4 w-4" />
            Add Products
          </Button>
        </Link>
      </div>
    </div>
  )
}
