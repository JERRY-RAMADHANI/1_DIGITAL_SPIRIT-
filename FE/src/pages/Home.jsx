import { useState, useEffect, useContext } from "react";
import Navbar from "@/components/organism/Navbar";
import bg1 from "@/assets/images/bg1.jpg";
import bg2 from "@/assets/images/bg2.jpg";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { appStateContext } from "@/context/AppStateContext";

const sty = {
	container:
		"z-10 fixed top-0 w-screen border-b border-slate-300 divide-y divide-slate-500/75 bg-slate-300/75 backdrop-blur-sm grid grid-flow-row hover:backdrop-blur-md transition duration-1000 md:px-8 md:divide-none md:grid-flow-col md:justify-between",
	wrapperHead: "py-4 px-4 flex gap-4 justify-between items-center md:flex-row",
	wrapper: "py-4 px-4 flex flex-wrap justify-center items-center md:flex-row",
	btn: "bg-transparent hover:bg-slate-950 hover:text-slate-200 border-2 border-slate-950 justify-self-end",
	DialogContent: "flesx justify-center items-center bg-white",
	Link: "cursor-pointer scroll-m-20 text-xl font-semibold tracking-tight"
};

const collection = [bg1, bg2];

export default function Home() {
	const [images, setImages] = useState(collection);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const { appState, setAppState } = useContext(appStateContext);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsTransitioning(true);
			setTimeout(() => {
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
				setIsTransitioning(false);
			}, 200);
		}, 5000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<>
			<Navbar />
			<main>
				<div className="w-screen h-screen relative overflow-hidden flex justify-center items-center">
					<Card className="w-11/12 sm:w-8/12 lg:w-6/12 border border-slate-300 divide-y divide-slate-500/75 bg-slate-300/50 backdrop-blur-sm grid grid-flow-row hover:backdrop-blur-md transition duration-1000 md:px-8 md:divide-none md:grid-flow-col md:justify-between">
						<CardHeader>
							<CardTitle className="text-center p-2 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
								Digital Compost
							</CardTitle>
							<CardDescription className="text-lg  text-slate-900 leading-7 [&:not(:first-child)]:mt-6">
								Pupuk kompos, si penyelamat lingkungan yang kaya manfaat, hadir sebagai pengingat bahwa keseimbangan dan
								kelestarian adalah kunci untuk masa depan yang lebih cerah.
							</CardDescription>
							<CardFooter className="p-2 flex justify-center">
								<div className=" text-slate-100 flex justify-center bg-slate-800 rounded-md overflow-hidden">
									<Link to="/home">
										<Button variant="ghost">Home</Button>
									</Link>

									<Separator orientation="vertical" />

									<Link
										to="/distribution"
										onClick={() => setAppState({ ...appState, navIsOpen: false, activeLink: "distribution" })}
										className={sty.Link}
									>
										<Button variant="ghost">Distribution</Button>
									</Link>

									<Separator orientation="vertical" />

									<Link
										to="/insight"
										onClick={() => setAppState({ ...appState, navIsOpen: false, activeLink: "insight" })}
										className={`${sty.Link} `}
									>
										<Button variant="ghost">Insight</Button>
									</Link>
								</div>
							</CardFooter>
						</CardHeader>
					</Card>
					<img
						className={`-z-10 absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
							isTransitioning ? "opacity-0" : "opacity-100"
						}`}
						src={images[currentImageIndex]}
						alt="pupuk"
					/>
				</div>
			</main>
		</>
	);
}
