
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { sudahMasuk } from "@/lib/pin";

export async function kirimPesan(stateSebelum, formData) {
  const nama = formData.get("nama").trim();
  const pesan = formData.get("pesan").trim();

  if (nama === "" || pesan === "") {
    return {
      error: "Nama dan pesan wajib diisi.",
      nama,
      pesan,
    };
  }

  const { error } = await supabase
    .from("buku_tamu")
    .insert({ nama, pesan });

  if (error) {
    return {
      error: `Pesan gagal disimpan: ${error.message}`,
      nama,
      pesan,
    };
  }

  revalidatePath("/buku-tamu");

  return {
    berhasil: `Terima kasih, ${nama}! Pesanmu sudah tersimpan.`,
  };
}

function ambilDataProyek(formData) {
  return {
    judul: String(formData.get("judul") || "").trim(),
    slug: String(formData.get("slug") || "").trim(),
    kategori: String(formData.get("kategori") || "").trim(),
    minggu: String(formData.get("minggu") || "").trim(),
    deskripsi: String(formData.get("deskripsi") || "").trim(),
    fitur: String(formData.get("fitur") || "")
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean),
    gambar_url: String(formData.get("gambar_url") || "").trim(),
  };
}

function validasiProyek(proyek) {
  if (
    !proyek.judul ||
    !proyek.slug ||
    !proyek.kategori ||
    !proyek.deskripsi
  ) {
    return "Judul, slug, kategori, dan deskripsi wajib diisi.";
  }

  return null;
}

export async function tambahProyek(stateSebelum, formData) {
  if (!(await sudahMasuk())) {
    return {
      error: "Kamu harus masuk sebagai admin terlebih dahulu.",
      proyek: stateSebelum.proyek,
    };
  }

  const proyek = ambilDataProyek(formData);
  const errorValidasi = validasiProyek(proyek);

  if (errorValidasi) {
    return {
      error: errorValidasi,
      proyek,
    };
  }

  const { error } = await supabaseAdmin
    .from("projects")
    .insert(proyek);

  if (error) {
    return {
      error: `Proyek gagal ditambahkan: ${error.message}`,
      proyek,
    };
  }

  revalidatePath("/");
  revalidatePath("/proyek");
  revalidatePath("/kelola");

  redirect("/kelola");
}

export async function ubahProyek(stateSebelum, formData) {
  if (!(await sudahMasuk())) {
    return {
      error: "Kamu harus masuk sebagai admin terlebih dahulu.",
      proyek: stateSebelum.proyek,
    };
  }

  const id = String(formData.get("id") || "").trim();
  const proyek = ambilDataProyek(formData);
  const errorValidasi = validasiProyek(proyek);

  if (!id) {
    return {
      error: "ID proyek tidak ditemukan.",
      proyek,
    };
  }

  if (errorValidasi) {
    return {
      error: errorValidasi,
      proyek,
    };
  }

  const { error } = await supabaseAdmin
    .from("projects")
    .update(proyek)
    .eq("id", id);

  if (error) {
    return {
      error: `Proyek gagal diubah: ${error.message}`,
      proyek,
    };
  }

  revalidatePath("/");
  revalidatePath("/proyek");
  revalidatePath("/kelola");

  redirect("/kelola");
}
