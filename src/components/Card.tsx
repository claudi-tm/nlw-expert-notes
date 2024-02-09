interface CardProps {
	type: "new" | "old";
	time: string;
}

export const Card = ({ type, time }: CardProps) => {
	const text_color = type === "new" ? "text-slate-200" : "text-slate-300";
	const bg_color = type === "new" ? "bg-slate-700" : "bg-slate-800";
	return (
		<button
			className={`text-left rounded-md ${bg_color} p-5 space-y-3 overflow-hidden relative  hover:ring-2 hover:ring-slate-600 focus-visible:ring-lime-400 focus-visible:ring-2 outline-none`}
		>
			<p className={`${text_color} text-sm font-medium`}>
				{type === "new" ? "Adicionar nota" : time}
			</p>
			<p className="text-slate-400 leading-6 ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Corrupti, atque consequatur? Ab aspernatur temporibus, ullam
				quis doloremque quo! Ratione a voluptatem ullam aliquid est
				iusto quod incidunt aspernatur, fugit necessitatibus! Lorem
				ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
			</p>
			{type === "old" && (
				<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
			)}
		</button>
	);
};
