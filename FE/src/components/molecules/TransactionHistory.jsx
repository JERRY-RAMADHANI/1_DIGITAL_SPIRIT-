import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TransactionHistory = () => {
  return (
    <>
      <Table className="text-xs">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >UserID</TableHead>
            <TableHead>Tipe</TableHead>
            <TableHead>Nominal</TableHead>
            <TableHead className="w-[100px]">Jumlah Akhir</TableHead>
            <TableHead>Tanggal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Organik</TableCell>
            <TableCell>10kg</TableCell>
            <TableCell>Rp. 100.000</TableCell>
            <TableCell>01-01-2024</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default TransactionHistory;
