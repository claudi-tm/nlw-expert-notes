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
				<Card />
				<div className="rounded-md bg-slate-800 p-5 space-y-3">
					<p className="text-slate-200 text-sm font-medium ">
						Adicionar nota
					</p>
					<p className="text-slate-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corrupti, atque consequatur? Ab aspernatur temporibus,
						ullam quis doloremque quo! Ratione a voluptatem ullam
						aliquid est iusto quod incidunt aspernatur, fugit
						necessitatibus!
					</p>
				</div>
				<div className="rounded-md bg-slate-800 p-5 space-y-3">
					<p className="text-slate-200">...</p>
					<p className="text-slate-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corrupti, atque consequatur? Ab aspernatur temporibus,
						ullam quis doloremque quo! Ratione a voluptatem ullam
						aliquid est iusto quod incidunt aspernatur, fugit
						necessitatibus!
					</p>
				</div>
			</div>
		</div>
	);
}
