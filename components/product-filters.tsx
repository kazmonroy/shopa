"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "radio", label: "Radio" },
      { value: "camera", label: "Camera" },
      { value: "gaming", label: "Gaming" },
      { value: "recorder", label: "Recorder" },
      { value: "speaker", label: "Speaker" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      // { value: "xs", label: "X-Small" },
      // { value: "s", label: "Small" },
      // { value: "m", label: "Medium" },
      // { value: "l", label: "Large" },
      // { value: "xl", label: "X-Large" },
      { value: "one-size", label: "One Size" },
      { value: "mini", label: "Mini" },
      { value: "s", label: "Small" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "whitesmoke", label: "Whitesmoke" },
      { value: "transparent", label: "Transparent" },
    ],
  },
]

export function ProductFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchValues = Array.from(searchParams.entries())
  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id)
                    ? `(${searchParams.get(section.id)})`
                    : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIndex) => (
                  <div
                    key={option.value}
                    className={`flex items-center space-x-2 rounded-full p-4 ${
                      option.value === searchParams.get(section.id)
                        ? "bg-orange-500 text-white"
                        : "border border-slate-200 hover:bg-slate-50 dark:border-zinc-700 dark:hover:bg-zinc-700/20"
                    } `}
                  >
                    <Checkbox
                      className="opacity-0"
                      id={`filter-${section.id}-${optionIndex}`}
                      checked={searchValues.some(
                        ([key, value]) =>
                          key === section.id && value === option.value
                      )}
                      onClick={(event) => {
                        const params = new URLSearchParams(searchParams)
                        const checked =
                          event.currentTarget.dataset.state === "checked"

                        checked
                          ? params.delete(section.id)
                          : params.set(section.id, option.value)

                        router.replace(`/?${params.toString()}`)
                      }}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIndex}`}
                      className="flex-1 cursor-pointer text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
