"use client";

import { useState } from "react";
import ProyekCard from "@/components/ProyekCard";
import { Button } from "@/components/ui/button";

const daftarKategori = [
  "Semua",
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
];

export default function FilterProyek({ proyek }) {
  const [kategori, setKategori] = useState("Semua");
  const [kata, setKata] = useState("");

  // Nama proyek yang ingin disembunyikan
  const proyekDisembunyikan = [
    "Kalkulator Nilai Rapor",
    "Lima Soal Logika",
  ];

  // Mengambil proyek selain dua proyek di atas
  const proyekTersedia = (proyek || []).filter(
    (p) =>
      !proyekDisembunyikan.includes(
        (p.judul || "").trim()
      )
  );

  // Filter kategori dan pencarian
  const hasil = proyekTersedia.filter((p) => {
    const cocokKategori =
      kategori === "Semua" || p.kategori === kategori;

    const judul = (p.judul || "").toLowerCase();
    const deskripsi = (p.deskripsi || "").toLowerCase();
    const pencarian = kata.toLowerCase();

    const cocokKata =
      judul.includes(pencarian) ||
      deskripsi.includes(pencarian);

    return cocokKategori && cocokKata;
  });

  return (
    <div>
      {/* Tombol kategori */}
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((k) => (
          <Button
            key={k}
            variant={kategori === k ? "default" : "outline"}
            onClick={() => setKategori(k)}
          >
            {k}
          </Button>
        ))}
      </div>

      {/* Pencarian proyek */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Cari proyek..."
          value={kata}
          onChange={(e) => setKata(e.target.value)}
          className="w-full rounded-lg border bg-background px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-primary"
        />

        {kata && (
          <Button
            variant="link"
            onClick={() => setKata("")}
            className="mt-2 px-0 text-aksen"
          >
            Hapus pencarian
          </Button>
        )}
      </div>

      {/* Hasil proyek */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hasil.length > 0 ? (
          hasil.map((p) => (
            <ProyekCard
              key={p.id || p.slug}
              proyek={p}
            />
          ))
        ) : (
          <p className="col-span-full py-8 text-center text-muted-foreground">
            Proyek tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}
