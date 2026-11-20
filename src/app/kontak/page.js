import FormKontak from "@/components/FormKontak";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description:
    "Hubungi Asri Mela Aldian Syah melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Hubungi Saya
      </h1>

      <p className="mt-2 text-sm text-muted-foreground">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Form Kontak */}
        <Card className="md:col-span-2">
          <CardContent>
            <FormKontak />
          </CardContent>
        </Card>

        {/* Temukan Saya */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Temukan Saya di
            </CardTitle>
          </CardHeader>

          <CardContent>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/asrimela14410-crypto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aksen hover:underline"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/asrimela14410-crypto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aksen hover:underline"
                >
                  asrimela14410-crypto
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
