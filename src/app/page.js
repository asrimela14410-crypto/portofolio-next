import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default async function Home() {
  const { data: proyekTerbaru, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error("Gagal mengambil data proyek:", error);
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">

      {/* Bagian Hero */}
      <Hero
        nama="Asri Mela Aldian Syah"
        tagline="Siswa kelas XI SMKN, calon Junior Web Developer di Kelas Industri UBIG."
      />

      {/* Bagian Keahlian */}
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary">
          Keahlian
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      {/* Bagian Proyek Terbaru */}
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary">
          Proyek Terbaru
        </h2>

        {proyekTerbaru && proyekTerbaru.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard
                key={item.slug}
                proyek={item}
              />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            Belum ada proyek yang tersedia.
          </p>
        )}

        <Link
          href="/proyek"
          className={buttonVariants({
            size: "lg",
            className: "mt-6",
          })}
        >
          Lihat semua proyek
        </Link>
      </section>

    </main>
  );
}
