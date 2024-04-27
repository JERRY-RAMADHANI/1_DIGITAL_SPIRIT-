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

// const invoices = [
// 	{
// 		id: 1,
// 		labaRugi: false,
// 		nominal: 10000,
// 		tanggal: "2022-11-17",
// 		user: "test abc"
// 	},
// 	{
// 		id: 2,
// 		labaRugi: true,
// 		nominal: 10000,
// 		tanggal: "2022-11-17",
// 		user: "test abc"
// 	}
// ];

export default function Tables({ data }) {
	return (
		<Table>
			<TableCaption>Daftar data terbaru.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Laba Rugi</TableHead>
					<TableHead>Nominal</TableHead>
					<TableHead>Tanggal</TableHead>
					<TableHead>User</TableHead>
					<TableHead>Action</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{data.length !== 0 ? (data.map((data) => (
					<TableRow key={data.id}>
						<TableCell className="font-medium">{data.labaRugi ? "Laba" : "Rugi"}</TableCell>
						<TableCell className="font-medium">{data.nominal} Kg</TableCell>
						<TableCell>{new Date(data.created_at).toLocaleDateString()}</TableCell>
						<TableCell>{data.author.nama}</TableCell>
						<TableCell className="flex gap-4">
							<Button variant="outline" size="icon" className="w-8 h-8 border-green-500">
								<EraserIcon />
							</Button>
						</TableCell>
					</TableRow>
				))) : (
					<TableRow key={data.id}>
						<TableCell>Kosong</TableCell>
						<TableCell>Kosong</TableCell>
						<TableCell>Kosong</TableCell>
						<TableCell>Kosong</TableCell>
						<TableCell className="flex gap-4">
							{/* <Button variant="outline" size="icon" className="w-8 h-8 border-green-500">
								<EraserIcon />
							</Button> */}
						</TableCell>
					</TableRow>
					
				)}
			</TableBody>
		</Table>
	);
}
