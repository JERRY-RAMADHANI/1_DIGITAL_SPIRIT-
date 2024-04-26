import { Button } from "../ui/button";
import { useContext } from "react";
import { appStateContext } from "../../context/AppStateContext";
import Report from "@/components/molecules/Report";
import { Link } from "react-router-dom"; 

const sty = {
	container:
		"z-10 fixed top-0 w-screen border-b border-slate-500/50 divide-y divide-slate-500/75 bg-slate-800/50 backdrop-blur-sm grid grid-flow-row hover:backdrop-blur-md transition duration-1000 md:px-8 md:divide-none md:grid-flow-col md:justify-between",
	wrapperHead: "py-4 px-4 flex gap-4 justify-between items-center md:flex-row",
	wrapper: "py-4 px-4 flex gap-4 justify-center items-center md:flex-row",
	btn: "bg-transparent hover:bg-transparent border-2 border-slate-950",
	DialogContent: "flesx justify-center items-center bg-white"
};

export default function Navbar() {
	const { appState, setAppState } = useContext(appStateContext);

	const handleClick = () => setAppState({ ...appState, navIsOpen: !appState.navIsOpen });

	return (
		<div className={sty.container}>
			<div className={sty.wrapperHead}>
				<Link to="/" className="scroll-m-20 text-2xl font-semibold tracking-tight justify-self-start">Digital Compost</Link>
				<Button
					variant="outline"
					size="icon"
					onClick={() => handleClick()}
					className={`${sty.btn} ${appState.viewport > 768 && "hidden"}`}
				>
					{appState.viewport < 768 && appState.navIsOpen == false ? "☰" : "X"}
				</Button>
			</div>

			<div className={`${sty.wrapper} ${appState.viewport < 768 && appState.navIsOpen == false && "hidden"}`}>
				<h4 className="cursor-pointer scroll-m-20 text-xl font-semibold tracking-tight">Distribution</h4>
				<h4 className="cursor-pointer scroll-m-20 text-xl font-semibold tracking-tight">Insight</h4>
				<h4 className="cursor-pointer scroll-m-20 text-xl font-semibold tracking-tight">Report</h4>
				<h4 className="cursor-pointer scroll-m-20 text-xl font-semibold tracking-tight">Waste</h4>
			</div>

			<div className={`${sty.wrapper} ${appState.viewport < 768 && appState.navIsOpen == false && "hidden"}`}>
				<Button variant="outline" className={sty.btn}>
					Log out
				</Button>
			</div>
		</div>
	);
}
