import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import LaporanCard from "./LaporanCard";
import { Button } from "@/components/ui/button";

export default function Report() {
	return (
		<Sheet>
			<SheetTrigger>
				<Button variant="link">Report</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Laporan Kompos</SheetTitle>
				</SheetHeader>

				<Dialog>
					<DialogTrigger>
						<Button variant="outline">Buat Laporan</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Laporan Baru</DialogTitle>
						</DialogHeader>

						<LaporanCard />
					</DialogContent>
				</Dialog>
			</SheetContent>
		</Sheet>
	);
}
