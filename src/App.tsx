import logo from "../src/assets/Logo2.svg";
import { Card } from "./components/Card";

export function App() {
	return (
		<div className="mx-auto my-12 max-w-6xl space-y-6 ">
			<img src={logo} alt="logo" />
			<form className="w-full">
				<input
					type="text"
					placeholder="Busque em suas notas..."
					className="font-semibold text-white outline-none font-Inter bg-transparent w-full text-3xl tracking-tight placeholder:text-slate-500"
				/>
			</form>
			<div className="h-px bg-slate-700"></div>
			<div className="grid grid-cols-3 auto-rows-[250px] gap-6">
				<Card time="" type="new" />
				<Card time="há 4 dias" type="old" />
				<Card time="há 4 dias" type="old" />
			</div>
		</div>
	);
}
