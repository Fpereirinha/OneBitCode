import { Fragment } from "react";
import Planet from "./planet";
export default function Planets() {
	return (
		<Fragment>
			<h3>Planet List</h3>
			<hr />
			<Planet
				img_url="https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg"
				name="Olho"
				description="Descrição"
				link="https://www.google.com/"
			/>
			<Planet
				img_url="https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg"
				name="Olho2"
				description="Descrição2"
				link="https://www.google.com"
			/>
		</Fragment>
	);
}
