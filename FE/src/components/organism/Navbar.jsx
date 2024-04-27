import { Button } from "../ui/button";
import { useContext, useEffect } from "react";
import { appStateContext } from "../../context/AppStateContext";
import { Link } from "react-router-dom";
import Report from "@/components/molecules/Report";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const sty = {
	container:
		"z-10 fixed top-0 w-screen border-b border-slate-300 divide-y divide-slate-500/75 bg-slate-300/75 backdrop-blur-sm grid grid-flow-row hover:backdrop-blur-md transition duration-1000 md:px-8 md:divide-none md:grid-flow-col md:justify-between",
	wrapperHead: "py-4 px-4 flex gap-4 justify-between items-center md:flex-row",
	wrapper: "py-4 px-4 flex flex-wrap justify-center items-center md:flex-row",
	btn: "bg-transparent hover:bg-slate-950 hover:text-slate-200 border-2 border-slate-950 justify-self-end",
	DialogContent: "flesx justify-center items-center bg-white",
	Link: "cursor-pointer scroll-m-20 text-xl font-semibold tracking-tight"
};

export default function Navbar() {
	const { appState, setAppState } = useContext(appStateContext);

	return (
		<div className={sty.container}>
			<div className={sty.wrapperHead}>
				<Link to="/" className="scroll-m-20 text-2xl font-semibold tracking-wide justify-self-start">
					Digital Compost
				</Link>
				<Button
					variant="outline"
					size="icon"
					onClick={() => setAppState({ ...appState, navIsOpen: !appState.navIsOpen })}
					className={`${sty.btn} ${appState.viewport > 768 && "hidden"}`}
				>
					{appState.viewport < 768 && appState.navIsOpen == false ? <HamburgerMenuIcon /> : <Cross1Icon />}
				</Button>
			</div>

			<div className={`${sty.wrapper} ${appState.viewport < 768 && appState.navIsOpen == false && "hidden"}`}>
				<Link
					to="/home"
					onClick={() => setAppState({ ...appState, navIsOpen: false, activeLink: "home" })}
					className={sty.Link}
				>
					<Button variant="link" className={`${appState.activeLink == "home" && "underline"} text-green-700`}>
						Home
					</Button>
				</Link>

				<Link
					to="/distribution"
					onClick={() => setAppState({ ...appState, navIsOpen: false, activeLink: "distribution" })}
					className={sty.Link}
				>
					<Button variant="link" className={`${appState.activeLink == "distribution" && "underline"} text-green-700`}>
						Distribution
					</Button>
				</Link>

				<Link
					to="/insight"
					onClick={() => setAppState({ ...appState, navIsOpen: false, activeLink: "insight" })}
					className={`${sty.Link} `}
				>
					<Button variant="link" className={`${appState.activeLink == "insight" && "underline"} text-green-700`}>
						Insight
					</Button>
				</Link>

				<Report />
			</div>

			<div className={`${sty.wrapper} ${appState.viewport < 768 && appState.navIsOpen == false && "hidden"}`}>
				<Button variant="outline" className={sty.btn}>
					Log out
				</Button>
			</div>
		</div>
	);
}
