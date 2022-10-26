import { Fragment } from "react";

export default function Description(props) {
	return (
		<Fragment>
			<p>{props.Description}</p>
			<a href={props.link} target="_blank">
				Link
			</a>
		</Fragment>
	);
}
