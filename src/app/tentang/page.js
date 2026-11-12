import Kartu from "@/components/Kartu";

export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, cita-cita, dan jadwal belajar Asri Mela Aldian Syah.",
};

const hobi = ["Belajar lebih baik", "Beli rumah banyak", "Menghabiskan uang"];

const rencana = [
  "Menuntaskan Kelas Industri UBIG sampai Semester 4",
  "Umroh dan Haji bersama keluarga setiap minggu",
  "Tidak kekurangan uang",
  "Mendapatkan uang setiap detik",
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Selasa", waktu: "16.00 - 20.00", kegiatan: "Mengerjakan tugas dari sekolah" },
  { hari: "Rabu", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
  { hari: "Kamis", waktu: "18.30 - 20.30", kegiatan: "Meet dan live coding" },
  { hari: "Jumat", waktu: "19.30 - 20.30", kegiatan: "Mengerjakan tugas baru" },
];

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
        Tentang Saya
      </h1>

      <div className="mt-8 flex flex-col gap-6">
        <Kartu judul="Perkenalan">
          <p className="font-semibold text-utama dark:text-sky-200">
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
            <ul className="mt-2 list-disc pl-5">
              {hobi.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <ol className="mt-2 list-decimal pl-5">
              {rencana.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Kartu>
        </div>

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
                <tr
                  key={j.hari}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
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