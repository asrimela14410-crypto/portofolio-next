import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProyekCard({ proyek }) {
  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      className="block rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <Card className="h-full overflow-hidden">
        <Image
          src={proyek.gambar_url}
          alt={`Tangkapan layar ${proyek.judul}`}
          width={640}
          height={420}
          className="h-auto w-full object-cover"
        />

        <CardHeader>
          <Badge>{proyek.kategori}</Badge>

          <CardTitle className="text-lg text-primary">
            {proyek.judul}
          </CardTitle>

          <CardDescription>
            {proyek.deskripsi}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
