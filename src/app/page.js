import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const hobi = ["Belajar lebih baik", "Edit vidio", "Menghabiskan uang"];

const rencana = [
  "Magang di perusahaan teknologi",
  "Bekerja sebagai Web Developer",
  "Mempunyai uang yang banyak",
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Selasa", waktu: "16.00 - 20.00", kegiatan: "Mengerjakan tugas dari sekolah" },
  { hari: "Rabu", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
  { hari: "Kamis", waktu: "18.30 - 20.30", kegiatan: "Meet dan live coding" },
  { hari: "Jum'at", waktu: "19.30 - 20.30", kegiatan: "Mengerjakan tugas baru" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Asri Mela Aldian Syah"
        tagline="Siswa kelas XI SMKN, calon Junior Web Developer di Kelas Industri UBIG."
      />

      <div className="mt-10 flex flex-col gap-6">
        <Kartu judul="Tentang Saya">
          <p className="font-semibold text-utama">
            Berawal dari rasa ingin tahu, berkembang melalui kode, dan terus
            berinovasi menciptakan solusi digital.
          </p>
          <p className="mt-3">
            Saya Asri Mela Aldian Syah, siswa kelas XI SMKN yang sedang belajar
            membuat website dengan HTML, CSS, JavaScript, dan Next.js di Kelas
            Industri UBIG. Saya ingin terus berkembang menjadi Web Developer
            yang bisa membuat karya bermanfaat.
          </p>
        </Kartu>

        <div className="grid gap-6 md:grid-cols-2">
          <Kartu judul="Hobi">
            <ul className="list-disc pl-5">
              {hobi.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <p>
              Menjadi <strong>Full Stack Web Developer</strong>. Langkah yang
              saya rencanakan:
            </p>
            <ol className="mt-2 list-decimal pl-5">
              {rencana.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Kartu>
        </div>

        <Kartu judul="Keahlian">
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </Kartu>

        <Kartu judul="Jadwal Belajar">
          <table className="w-full text-left">
            <thead className="bg-utama text-white">
              <tr>
                <th className="px-3 py-2">Hari</th>
                <th className="px-3 py-2">Waktu</th>
                <th className="px-3 py-2">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((j) => (
                <tr key={j.hari} className="border-b border-gray-200">
                  <td className="px-3 py-2">{j.hari}</td>
                  <td className="px-3 py-2">{j.waktu}</td>
                  <td className="px-3 py-2">{j.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Kartu>
      </div>
    </main>
  );
}