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
import plants from "@/data/data";

const DistributionID = () => {
  const { id } = useParams(); // Dapatkan id dari URL menggunakan useParams
  const plantData = plants[id]; // Ambil data tanaman sesuai dengan id

  return (
    <>
      <Navbar />
      <main className="flex justify-center bg-slate-100 items-center h-[100vh]">
        <Card className="mt-24 w-[80%]">
          <CardHeader>
            <CardTitle>Distribution ID: {id}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Cek apakah data tanaman tersedia */}
            {plantData ? (
              <Table>
                <TableCaption>A list of plants with ID {id}.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Species</TableHead>
                    <TableHead>Konsumsi Kompos</TableHead>
                    <TableHead className="w-[250px]">Deskripsi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plantData.map((plant, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{plant.nama}</TableCell>
                      <TableCell>{plant.species}</TableCell>
                      <TableCell>{plant.konsumsi_kompos}</TableCell>
                      <TableCell>{plant.deskripsi}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <h2>Data tanaman Kosong.</h2>
            )}
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default DistributionID;
