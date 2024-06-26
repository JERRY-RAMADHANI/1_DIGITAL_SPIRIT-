import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReportCard from "./ReportCard";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useGet } from "@/hooks/useFetch";

export default function Report() {
	const { data } = useGet("http://127.0.0.1:8000/api/message/chatHistory");
	
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="link" className="text-white">
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
						<ReportCard />
					</DialogContent>
				</Dialog>

				<div className="flex flex-col gap-4 overflow-scroll overflow-x-hidden">
					{data.map((data) => (
						<BubbleChat key={data.id} data={data} />
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}

function BubbleChat({ data }) {
	return (
		<Card>
			<CardHeader>
				{/* <CardDescription>From {data.reporter.nama}</CardDescription> */}

				<CardTitle>{data.title}</CardTitle>

				<CardDescription>{data.message}</CardDescription>

				<CardDescription className="text-green-500/50 flex pt-5 justify-between">
					<p>{new Date(data.updated_at).toLocaleDateString()}</p>
					<p>{new Date(data.updated_at).toLocaleTimeString()}</p>
				</CardDescription>
			</CardHeader>
		</Card>
	);
}
