import Navbar from "@/components/organism/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const sty = {
	Card: "mb-4 md:mx-20 lg:mx-40"
};

export default function Insight() {
	return (
		<>
			<Navbar />
			<div className="pt-24 pb-8 px-4 bg-slate-200">
				<Card className={sty.Card}>
					<CardHeader>
						<CardTitle>Kompos</CardTitle>
						<CardDescription>Card Description</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Card Content</p>
					</CardContent>
					<CardFooter>
						<p>Card Footer</p>
					</CardFooter>
				</Card>

				<Card className={sty.Card}>
					<CardHeader>
						<CardTitle>Organik</CardTitle>
						<CardDescription>Card Description</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Card Content</p>
					</CardContent>
					<CardFooter>
						<p>Card Footer</p>
					</CardFooter>
				</Card>

				<Card className={sty.Card}>
					<CardHeader>
						<CardTitle>Anorganik</CardTitle>
						<CardDescription>Card Description</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Card Content</p>
					</CardContent>
					<CardFooter>
						<p>Card Footer</p>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}
