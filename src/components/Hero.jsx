import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero ({ nama, tagline }) {
  <div className="mt-5 flex justify-center gap-3 md:justify-start">
    <Link href="/proyek" className={buttonVariants({ size:"lg"})}>
    Lihat Proyek
    </Link>
    <Link href="/kontak" className={buttonVariants({ variant: "outline", size: "lg "})}>
    Hubungi Saya
    </Link>
  </div>
  return (
    <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
      <Image
        src="/foto-profil2.png"
        alt={ `Foto profil2 ${nama}` }
        width={180}
        height={180}
        loading="eager"
        className="rounded-full border-4 border-aksen"
      />
      <div>
        <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-5xl">Halo, saya {nama}!</h1>
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">{tagline}</p>
      </div>
    </section>
  );
}