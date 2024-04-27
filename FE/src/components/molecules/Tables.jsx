import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableFooter
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil1Icon, EraserIcon } from "@radix-ui/react-icons";

const invoices = [
	{
		id: 1,
		labaRugi: false,
		nominal: 10000,
		tanggal: "2022-11-17",
		user: "test abc"
	},
	{
		id: 2,
		labaRugi: true,
		nominal: 10000,
		tanggal: "2022-11-17",
		user: "test abc"
	}
];

export default function Tables({}) {
	return (
		<Table>
			<TableCaption>Daftar data terbaru.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Laba Rugi</TableHead>
					<TableHead>Nominal</TableHead>
					<TableHead>Tanggal</TableHead>
					<TableHead>User</TableHead>
					{/* <TableHead>Action</TableHead> */}
				</TableRow>
			</TableHeader>

			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.id}>
						<TableCell className="font-medium">{invoice.labaRugi ? "Laba" : "Rugi"}</TableCell>
						<TableCell className="font-medium">{invoice.nominal}</TableCell>
						<TableCell>{invoice.tanggal}</TableCell>
						<TableCell>{invoice.user}</TableCell>
						{/* <TableCell className="flex gap-4">
							<Button variant="outline" size="icon" className="w-8 h-8 border-green-500">
								<Pencil1Icon />
							</Button>
							<Button variant="outline" size="icon" className="w-8 h-8 border-green-500">
								<EraserIcon />
							</Button>
						</TableCell> */}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
