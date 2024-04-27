import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import LaporanCard from "./LaporanCard";
import { Button } from "@/components/ui/button";
import TransactionHistory from "./TransactionHistory";

export default function Report() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="link" className="text-green-700">Report</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-col align-top">
				<SheetHeader>
					<SheetTitle>Laporan Kompos</SheetTitle>
				</SheetHeader>

				<Dialog>
					<DialogTrigger>
						<Button asChild variant="outline">
							Buat Laporan
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Laporan Baru</DialogTitle>
						</DialogHeader>
						<LaporanCard />
					</DialogContent>
				</Dialog>
				<TransactionHistory />
			</SheetContent>
		</Sheet>
	);
}
