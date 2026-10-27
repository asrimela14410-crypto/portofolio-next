export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-utama px-4 py-4 text-center text-sm text-white">
      &copy; {tahun} Asri Mela Aldian Syah. Dibuat dengan Next.js di Kelas Industri UBIG.
    </footer>
  );
}