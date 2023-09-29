import React, { useState } from "react";
import Board from "./components/Board";
import Drink from "./components/Drink";

export default function App() {
	const [isDrink, setIsDrink] = useState();

	return (
		<div className="bg-slate-800 min-h-screen w-full flex justify-center items-center">
			<div className="w-full">
				{/* {isDrink ? (
					<Drink setIsDrink={setIsDrink} />
				) : (
					<Board setIsDrink={setIsDrink} />
				)} */}

				<h2 style={{textAlign:"center", color:"white", fontSize:"2rem"}}>React PWA Starter & Tailwind</h2>


			</div>
		</div>
	);
}


