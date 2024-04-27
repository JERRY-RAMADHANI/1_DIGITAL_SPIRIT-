import Navbar from "@/components/organism/Navbar";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tables from "@/components/molecules/Tables";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InsightCard from "@/components/molecules/InsightCard";

const sty = {
	Card: "mb-4 md:mx-20 lg:mx-40",
	Button: "w-8 h-8 border-2 border-green-700 hover:bg-green-700 hover:text-slate-200"
};

export default function Insight() {
	fetch("http://127.0.0.1:8000/api/history", { method: "GET" }).then((res) => console.log(res));

	return (
		<>
			<Navbar />

			<div className="w-screen min-h-screen pt-24 pb-8 px-8 bg-slate-200">
				<Tabs defaultValue="kompos" className="">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="kompos">Kompos</TabsTrigger>
						<TabsTrigger value="organik">Organik</TabsTrigger>
						<TabsTrigger value="anorganik">Anorganik</TabsTrigger>
					</TabsList>

					{/* KOMPOS */}
					<TabsContent value="kompos">
						<Card className={sty.Card}>
							<CardHeader className="grid grid-cols-2">
								<div>
									<CardTitle>Kompos</CardTitle>
									<CardDescription>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, labore.
									</CardDescription>
								</div>
								<div className="flex justify-end gap-4">
									<Button variant="outline" size="icon" className={sty.Button}>
										<Dialog>
											<DialogTrigger asChild>
												<PlusIcon />
											</DialogTrigger>
											<DialogContent className="sm:max-w-[425px]">
												<InsightCard>Kompos</InsightCard>
											</DialogContent>
										</Dialog>
									</Button>
								</div>
							</CardHeader>
							<CardContent>
								<Tables />
							</CardContent>
						</Card>
					</TabsContent>

					{/* ORGANIK */}
					<TabsContent value="organik">
						<Card className={sty.Card}>
							<CardHeader className="grid grid-cols-2">
								<div>
									<CardTitle>Organik</CardTitle>
									<CardDescription>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, labore.
									</CardDescription>
								</div>
								<div className="flex justify-end gap-4">
									<Button variant="outline" size="icon" className={sty.Button}>
										<Dialog>
											<DialogTrigger asChild>
												<PlusIcon />
											</DialogTrigger>
											<DialogContent className="sm:max-w-[425px]">
												<InsightCard>Organik</InsightCard>
											</DialogContent>
										</Dialog>
									</Button>
								</div>
							</CardHeader>
							<CardContent>
								<Tables />
							</CardContent>
						</Card>
					</TabsContent>

					{/* ANORGANIK */}
					<TabsContent value="anorganik">
						<Card className={sty.Card}>
							<CardHeader className="grid grid-cols-2">
								<div>
									<CardTitle>Anorganik</CardTitle>
									<CardDescription>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, labore.
									</CardDescription>
								</div>
								<div className="flex justify-end gap-4">
									<Button variant="outline" size="icon" className={sty.Button}>
										<Dialog>
											<DialogTrigger asChild>
												<PlusIcon />
											</DialogTrigger>
											<DialogContent className="sm:max-w-[425px]">
												<InsightCard>Anorganik</InsightCard>
											</DialogContent>
										</Dialog>
									</Button>
								</div>
							</CardHeader>
							<CardContent>
								<Tables />
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</>
	);
}
