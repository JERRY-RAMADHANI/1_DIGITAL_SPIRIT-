import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import LaporanCard from "./LaporanCard";
import { Button } from "@/components/ui/button";
import TransactionHistory from "./Tables";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function Report() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="link" className="text-green-700">
					Report
				</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-col align-top">
				<SheetHeader>
					<SheetTitle>Laporan</SheetTitle>
				</SheetHeader>

				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" className="border-green-700">
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

				<div className="flex flex-col gap-4 overflow-scroll overflow-x-hidden">
					<BubbleChat />
					<BubbleChat />
					<BubbleChat />
					<BubbleChat />
					<BubbleChat />
					<BubbleChat />
				</div>
			</SheetContent>
		</Sheet>
	);
}

function BubbleChat() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Sampah Menunpuk</CardTitle>
				<CardDescription>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente iusto voluptates ipsam eum nulla?
				</CardDescription>

				<CardDescription className="mt-2 text-green-700"></CardDescription>
				<CardDescription className="text-green-500 flex justify-between">
					<span>12-1-2022</span>
					<span>08.20 PM</span>
				</CardDescription>
			</CardHeader>
		</Card>
	);
}
