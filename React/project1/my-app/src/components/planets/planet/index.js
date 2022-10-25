import "./index.sass";
import GrayImg from "../../shared/gray-img";
export default function Planet(props) {
	return (
		<div className="planet_container">
			<div className="planet">
				<h4>{props.name}</h4>
				<p>{props.description}</p>
				<GrayImg img_url={props.img_url} />
			</div>
		</div>
	);
}
