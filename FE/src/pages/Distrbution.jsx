import Navbar from "@/components/organism/Navbar";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import kbs from "@/assets/images/peta.png";
import kbsMapping from "@/assets/images/peta_mapping.png";

export default function Distribution() {
	const [isMapping, setIsMapping] = useState(false);
	const [data, setData] = useState(undefined);

	useEffect(() => {
		fetch("http://127.0.0.1:8000/api/sector/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((data) => data.json())
			.then((data) => setData([...data.data]));
	}, []);

	return (
		<>
			<Navbar />
			<main className="flex justify-center bg-slate-100">
				<Card className="mt-24 mb-12 w-[80%]">
					<CardHeader>
						<CardTitle>Distribution</CardTitle>
					</CardHeader>
					<CardContent>
						<div className=" px-8 flex flex-col gap-4 items-center">
							<Button
								className="w-fit h-8 hover:cursor-pointer text-slate-950 hover:text-white bg-white hover:bg-slate-950 border-2 border-slate-950 justify-self-end"
								asChild
								onClick={() => setIsMapping(!isMapping)}
							>
								<p>{isMapping ? "Lihat Map Asli" : "Lihat Sector"}</p>
							</Button>
							<img src={isMapping ? kbsMapping : kbs} alt="Map KBS" />
						</div>
					</CardContent>{" "}
					<CardFooter className="flex flex-row flex-wrap gap-4 justify-center">
						{data &&
							data.map((sector) => (
								<Link key={sector.id} to={`/distribution/${sector.id}`}>
									<Button className="z-10 w-fit h-8 hover:cursor-pointer hover:text-slate-950 text-white bg-slate-950 hover:bg-white border-2 border-slate-950">
										{sector.nama_sektor}
									</Button>
								</Link>
							))}
					</CardFooter>
				</Card>
			</main>
		</>
	);
}
