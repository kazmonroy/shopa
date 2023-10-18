import {
  LucideProps,
  Moon,
  SunMedium,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.00526 12.5297L29.1234 4.18091L10.4813 21.9244L3.00526 12.5297Z"
        fill="#EA580C"
        stroke="#EA580C"
        strokeWidth="0.386933"
      />
      <path
        d="M29.86 22.2929L4.27086 30.5188L22.5531 12.8678L29.86 22.2929Z"
        fill="#EA580C"
        stroke="#EA580C"
        strokeWidth="0.386933"
      />
    </svg>
  ),
}
