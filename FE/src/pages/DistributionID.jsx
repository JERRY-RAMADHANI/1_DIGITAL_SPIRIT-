import Navbar from "@/components/organism/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const plants = [
  {
    id: 4,
    nama: "Mawar",
    species: "Rosa",
    konsumsi_kompos: "Sedang",
    deskripsi:
      "Mawar adalah tanaman berbunga indah yang dikenal dengan aroma harumnya.",
  },
  {
    id: 5,
    nama: "Pisang",
    species: "Musa",
    konsumsi_kompos: "Tinggi",
    deskripsi:
      "Pisang adalah tumbuhan berbuah yang tumbuh di daerah tropis dan subtropis.",
  },
  {
    id: 6,
    nama: "Anggrek",
    species: "Orchidaceae",
    konsumsi_kompos: "Rendah",
    deskripsi:
      "Anggrek adalah salah satu jenis tanaman hias yang memiliki bunga yang indah dan unik.",
  },
  {
    id: 7,
    nama: "Tulip",
    species: "Tulipa",
    konsumsi_kompos: "Sedang",
    deskripsi:
      "Tulip adalah tanaman berbunga asli dari wilayah Iran, Afghanistan, Pakistan, dan Asia Tengah.",
  },
  {
    id: 8,
    nama: "Srikaya",
    species: "Annona squamosa",
    konsumsi_kompos: "Tinggi",
    deskripsi:
      "Srikaya adalah buah tropis yang tumbuh di daerah tropis dan subtropis.",
  },
  {
    id: 10,
    nama: "Bougenville",
    species: "Bougainvillea",
    konsumsi_kompos: "Sedang",
    deskripsi:
      "Bougenville adalah tanaman merambat yang memiliki bunga berwarna cerah dan tahan panas.",
  },
];

const DistributionID = () => {
  const { id } = useParams(); // Dapatkan id dari URL menggunakan useParams

  // Cari tanaman dengan id yang sesuai
  const plant = plants.find((plant) => plant.id === parseInt(id));

  return (
    <>
      <Navbar />
      <main className="flex justify-center bg-slate-100 items-center h-[100vh]">
        <Card className="mt-24 w-[80%]">
          <CardHeader>
            <CardTitle>Distribution ID: {id}</CardTitle>
          </CardHeader>
          <CardContent>
            {plant && (
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Species</TableHead>
                    <TableHead>KonsumsiKompos</TableHead>
                    <TableHead className="w-[250px]">Deskripsi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">{plant.nama}</TableCell>
                    <TableCell>{plant.species}</TableCell>
                    <TableCell>{plant.konsumsi_kompos}</TableCell>
                    <TableCell>{plant.deskripsi}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default DistributionID;
