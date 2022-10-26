import "./index.sass";
import GrayImg from "../../shared/gray-img";
import Description from "../../shared/descriptionwlink";
export default function Planet(props) {
	return (
		<div className="planet_container">
			<div className="planet">
				<h4>{props.name}</h4>
				<Description Description={props.description} link={props.link} />
				<GrayImg img_url={props.img_url} />
			</div>
		</div>
	);
}
