import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "astromech_q_series",
    name: "Astromech Q Series",
    description: `Introducing The Astromech Q Series: your compact sound companion.   Designed for music enthusiasts on the go, this mini sleek and portable speaker delivers impressive audio performance in a tiny package. The Q series boasts powerful sound quality, rich bass, and clear trebles, making your favorite tunes come alive with vibrant energy.`,
    price: 9999, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716654/astromech-q-series_z946tc.webp",
    images: [
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716654/astromech-q-series_z946tc.webp",
    ],
    sizes: ["one-size"],
    categories: ["speaker"],
    colors: ["white"],
    currency: "USD",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "radio_trooper_7",
    name: "Radio Trooper 7",
    description: `More than just a small radio speaker, the Radio Trooper 7 is a gateway to a world of vibrant melodies and timeless tunes, all encapsulated in a sleek, pocket-sized device. Crafted for music aficionados who crave quality sound in a compact package, this portable radio speaker brings your favorite stations and playlists to life wherever you go.`,
    price: 14500,
    image:
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716699/radio-trooper-7_wex4by.webp",
    images: [
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716699/radio-trooper-7_wex4by.webp",
    ],
    sizes: ["one-size"],
    categories: ["radio"],
    colors: ["white"],
    currency: "USD",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "radio_trooper_8",
    name: "Radio Trooper 8",
    description: `Measuring just a few inches, the Radio Trooper 8 is designed with both style and functionality in mind. Its retro-inspired exterior encases cutting-edge technology, ensuring a seamless blend of classic charm and modern performance. With a powerful built-in antenna, it captures radio signals with remarkable clarity, offering you an array of stations to explore.`,
    price: 4999,
    image:
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716699/radio-trooper-8_bhywrh.webp",
    images: [
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716699/radio-trooper-8_bhywrh.webp",
    ],
    sizes: ["one-size"],
    categories: ["radio"],
    colors: ["transparent"],
    currency: "USD",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "wookie_talkie_bd_1",
    name: "Wookie Talkie BD-1",
    description: `The Wookie Talkie BD-1 is a compact marvel, redefining the art of capturing moments with crystal-clear sound precision. Designed to fit seamlessly in your pocket, this small voice recorder is your perfect companion for recording interviews, lectures, reminders, or even spontaneous musings on the go.`,
    price: 5599,
    image:
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716699/wookie-talkie-bd-1_xeldmz.webp",
    images: [
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716699/wookie-talkie-bd-1_xeldmz.webp",
    ],
    sizes: ["one-size"],
    categories: ["recorder"],
    colors: ["whitesmoke"],
    currency: "USD",
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "wookie_talkie_bd_2",
    name: "Wookie Talkie BD-2",
    description: `Measuring just a few inches in length, the Wookie Talkie BD-2 combines advanced technology with intuitive design. Its sensitive microphone captures every nano sound, ensuring your recordings are rich in detail. Whether you're in a bustling city square or a quiet library, this tiny wookie captures audio with remarkable clarity, making every playback feel like you're back in the moment.`,
    price: 6199,
    image:
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716699/wookie-talkie-bd-2_ohru7v.webp",
    images: [
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716699/wookie-talkie-bd-2_ohru7v.webp",
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716699/wookie-talkie-bd-2_ohru7v.webp",
    ],
    sizes: ["one-size"],
    categories: ["recorder"],
    colors: ["whitesmoke"],
    currency: "USD",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "game_droid_r2",
    name: "Game Droid R2",
    description: `Game Droid R2 is your gateway to infinite adventures. Whether you're a casual gamer seeking a quick escape or a dedicated enthusiast craving the next challenge, our handheld game console is the ultimate choice. From classic retro titles to the latest blockbusters, our handheld game console caters to every gaming taste.`,
    price: 9800,
    image:
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716698/game-droid-r2_fazz4s.webp",
    images: [
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716698/game-droid-r2_fazz4s.webp",
    ],
    sizes: ["one-size"],
    categories: ["gaming"],
    colors: ["transparent"],
    currency: "USD",
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "game_droid_d2",
    name: "Game Droid D2",
    description: `Step back in time with the Game Droid D2 and embrace the nostalgia of classic handheld game consoles while immersing yourself in a modern gaming experience. Designed for gamers of all ages and expertise, D2 is equipped with a high-resolution screen and long-lasting battery making it your reliable companion for gaming marathons. Slip it into your pocket, and you're ready to embark on adventures whenever inspiration strikes.`,
    price: 13999,
    image:
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716698/game-droid-d2_lfvfwk.webp",
    images: [
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716698/game-droid-d2_lfvfwk.webp",
    ],
    sizes: ["one-size"],
    categories: ["gaming"],
    colors: ["transparent"],
    currency: "USD",
  },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "proberoid_c3",
    name: "Proberoid C3",
    description: `Proberoid C3 isn’t just a camera; it’s passport to creativity. Experiment with different shooting modes, add filters, and watch as your photos transform into artistic masterpieces. Share the joy by handing your friends a physical photograph, a tangible memento in the age of digital imagery.`,
    price: 42000,
    image:
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716698/proberoid-c3_vbl8yt.webp",
    images: [
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716698/proberoid-c3_vbl8yt.webp",
    ],
    sizes: ["one-size"],
    categories: ["camera"],
    colors: ["white"],
    currency: "USD",
  },
  {
    id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
    sku: "proberoid_p0",
    name: "Proberoid P0",
    description: `Proberoid P0 brings back the thrill of watching your photos develop before your eyes. Its classic timeless design adds a touch of nostalgia to your photography experience. Equipped with high-quality lenses and a powerful flash, Proberoid P0 ensures your photos are not just instant but also vibrant and sharp, capturing the essence of every moment.`,
    price: 5599,
    image:
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716699/proberoid-p0_sskal4.webp",
    images: [
      "https://res.cloudinary.com/dpg2oougy/image/upload/v1697716699/proberoid-p0_sskal4.webp",
    ],
    sizes: ["one-size"],
    categories: ["camera"],
    colors: ["white"],
    currency: "USD",
  },
]
