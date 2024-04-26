import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SignInCard from "../molecules/SignInCard";
import SignUpCard from "../molecules/SignUpCard";
import { Button } from "../ui/button";
import { useContext, useEffect } from "react";
import { appStateContext } from "../../context/AppStateContext";

const sty = {
	container:
		"z-10 fixed top-0 w-screen border-b border-slate-500/50 divide-y divide-slate-500/75 bg-slate-800/50 backdrop-blur-sm grid grid-flow-row hover:backdrop-blur-md transition duration-1000 lg:px-8 lg:divide-none lg:grid-flow-col lg:justify-between",
	wrapper: "py-4 px-4 flex gap-4 items-center justify-between lg:flex-row",
	authWrapper: "py-4 flex flex-col gap-4 items-center justify-between lg:flex-row",
	btn: "bg-transparent hover:bg-transparent border-2 border-slate-950",
	DialogContent: "flesx justify-center items-center bg-white"
};

export default function Navbar() {
	const { appState, setAppState } = useContext(appStateContext);
	const handleClick = () => setAppState({ ...appState, navIsOpen: !appState.navIsOpen });

	useEffect(() => {
		console.log(appState);
	}, [appState]);

	return (
		<div className={sty.container}>
			<div className={sty.wrapper}>
				<h1>Compost</h1>
				<Button
					variant="outline"
					size="icon"
					onClick={() => handleClick()}
					className={`${sty.btn} ${appState.viewport > 1024 && "hidden"}`}
				/>
			</div>
			<div className={`${sty.authWrapper} ${appState.viewport < 1024 && appState.navIsOpen == false && "hidden"}`}>
				<Dialog>
					<DialogTrigger>Sign In</DialogTrigger>
					<DialogContent className={sty.DialogContent}>
						<SignInCard />
					</DialogContent>
				</Dialog>
				<Dialog>
					<DialogTrigger>Sign Up</DialogTrigger>
					<DialogContent className={sty.DialogContent}>
						<SignUpCard />
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
