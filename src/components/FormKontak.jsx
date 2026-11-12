
"use client";

import { useState } from "react";

const kelasInput =
  "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-100";

export default function FormKontak() {
  // State form
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  function kirim(e) {
    e.preventDefault();

    const errorBaru = {};

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }

    if (!email.includes("@")) {
      errorBaru.email =
        "Email harus memuat tanda @, contoh nama@gmail.com.";
    }

    if (hp.length < 10) {
      errorBaru.hp = "Nomor HP minimal 10 angka.";
    }

    if (keperluan === "") {
      errorBaru.keperluan = "Pilih salah satu keperluan.";
    }

    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);
    setBerhasil(Object.keys(errorBaru).length === 0);
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4">
      {/* Nama Lengkap */}
      <div>
        <label htmlFor="nama" className="block font-semibold">
          Nama lengkap
        </label>

        <input
          type="text"
          id="nama"
          name="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Na Jaemin"
          className={kelasInput}
        />

        {error.nama && (
          <p className="mt-1 text-sm text-red-600">
            {error.nama}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-semibold">
          Email
        </label>

        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nama@gmail.com"
          className={kelasInput}
        />

        {error.email && (
          <p className="mt-1 text-sm text-red-600">
            {error.email}
          </p>
        )}
      </div>

      {/* Nomor HP */}
      <div>
        <label htmlFor="hp" className="block font-semibold">
          Nomor HP
        </label>

        <input
          type="tel"
          id="hp"
          name="hp"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          placeholder="081234567890"
          className={kelasInput}
        />

        {error.hp && (
          <p className="mt-1 text-sm text-red-600">
            {error.hp}
          </p>
        )}
      </div>

      {/* Keperluan */}
      <div>
        <label htmlFor="keperluan" className="block font-semibold">
          Keperluan
        </label>

        <select
          id="keperluan"
          name="keperluan"
          value={keperluan}
          onChange={(e) => setKeperluan(e.target.value)}
          className={kelasInput}
        >
          <option value="">-- Pilih keperluan --</option>
          <option value="bertanya">Bertanya</option>
          <option value="kerja-sama">Kerja sama proyek</option>
          <option value="lainnya">Lainnya</option>
        </select>

        {error.keperluan && (
          <p className="mt-1 text-sm text-red-600">
            {error.keperluan}
          </p>
        )}
      </div>

      {/* Pesan */}
      <div>
        <label htmlFor="pesan" className="block font-semibold">
          Pesan
        </label>

        <textarea
          id="pesan"
          name="pesan"
          rows={5}
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pesanmu di sini"
          className={kelasInput}
        />

        {error.pesan && (
          <p className="mt-1 text-sm text-red-600">
            {error.pesan}
          </p>
        )}
      </div>

      {/* Tombol Kirim */}
      <button
        type="submit"
        className="rounded-lg bg-[#c51e32] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a81729]"
      >
        Kirim Pesan
      </button>

      <p className="text-xs leading-relaxed text-gray-500">
        Form ini belum mengirim pesan. Pengiriman pesan
        diaktifkan di Minggu 15.
      </p>

      {/* Pesan Berhasil */}
      {berhasil && (
        <p className="rounded-lg bg-green-100 p-3 text-green-800">
          Terima kasih, {nama}! Pesanmu sudah lolos pemeriksaan.
        </p>
      )}
    </form>
  );
}
