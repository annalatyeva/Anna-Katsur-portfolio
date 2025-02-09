import "./Project.scss";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import videoAttributes from "../../components/constants/videoAttributes.js";

import galleryItem from "../../assets/images/project2-pic1.jpg";
import galleryItem2 from "../../assets/images/project2-pic2.jpg";
import galleryItem3 from "../../assets/images/project2-pic3.jpg";
import galleryItem5 from "../../assets/images/project2-pic5.png";
import galleryItem6 from "../../assets/images/project2-pic6.png";
import galleryItem7 from "../../assets/images/project2-pic7.png";
import galleryItem8 from "../../assets/images/project2-pic8.png";
import galleryItem9 from "../../assets/images/project2-pic9.png";

import video1 from "../../assets/video/seasons.mp4";
import video2 from "../../assets/video/project2-v2.mp4";
import video3 from "../../assets/video/project2-v3.mp4";
import video4 from "../../assets/video/project2-v4.mp4";

import poster1 from "../../assets/images/posters/b8.png";
import poster2 from "../../assets/images/posters/b9.png";
import poster3 from "../../assets/images/posters/b10.png";
import poster4 from "../../assets/images/posters/b11.png";

const team = [
	{role: "Design Director", name: "Anna Katsur"},
	{role: "Creative Director", name: "Ivan Velichko"},
	{role: "Art Director", name: "Dasha Zudina"},
	{role: "Designer", name: "Evgeny Drozhzhev"},
	{role: "Designer", name: "Maria Larionova"},
	{role: "Logo", name: "Ekaterina Sedunova"},
	{role: "Lead Motion Designer", name: "Dmitry Kozlyaev"},
	{role: "Motion Designer", name: "Daniil Svetlov"},
	{role: "Manager", name: "Anna Kuzyutina"},
];

const Project2 = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="project-container">
			<div className="project-header">
				<h2 className="project2-header__title">CONCEPT OF THE EVENT AND CREATIVE DIRECTION FOR SEASONS BRAND IDENTITY</h2>
				<p className="project-header__number">/ 02</p>
			</div>
			<div className="project-gallery2">
				<div className="item_horizontal">
					<video
						{...videoAttributes}
						poster={poster1}>
						<source
							src={video1}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="project-article">
				<section className="project-article__item1">Seasons is a joint IT series by Epic Growth and Yandex. Every week, a group of experts analyse cases of the growth of digital products – the 10-15-minute-long videos are published on the showrunners’ personal platform and are available with an Epic Growth Premium subscription.</section>
				<section className="project-article__item2">The series' visual identity is built around the idea of an elusive technological landscape and the people who are best able to perceive it, manipulate it, measure it and benefit from it. The Seasons experts are like the chosen ones of dystopian fiction who have been summoned to take part in a TV show to share their knowledge, but without making speculative predictions.</section>
			</div>
			<div className="project-gallery2">
				<div className="item_horizontal">
					<img
						className="project-gallery__item"
						src={galleryItem}
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
				<div className="item_horizontal">
					<img
						className="project-gallery__item"
						src={galleryItem2}
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
				<div>
					<video
						{...videoAttributes}
						poster={poster2}>
						<source
							src={video2}
							type="video/mp4"
						/>
					</video>
				</div>
				<div>
					<img
						className="project-gallery__item"
						src={galleryItem3}
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
			</div>
			<div className="project-article">
				<section className="project-article__item2">
					<p>Graphically, the motif is expressed in the image of a constantly changing abstract figure, a heroic logo and a fantastic combination of colours.</p>
					<p>All communications materials for the series are composed of elements from the visual language, particularly the design of the episodes – the intro, studio scenery, credits and cut-in scenes.</p>
				</section>
			</div>
			<div className="project-gallery2">
				<div className="item_horizontal">
					<video
						{...videoAttributes}
						poster={poster3}>
						<source
							src={video3}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="item_horizontal">
					<video
						{...videoAttributes}
						poster={poster4}>
						<source
							src={video4}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="project-gallery4">
				<div className="item_vertical">
					<img
						className="project-gallery4__item"
						src={galleryItem9}
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
				<div className="item_vertical">
					<img
						className="project-gallery4__item"
						src={galleryItem5}
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
				<div className="item_vertical">
					<img
						className="project-gallery4__item"
						src={galleryItem6}
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
				<div className="item_vertical">
					<img
						className="project-gallery4__item"
						src={galleryItem7}
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
				<div className="item_horizontal ">
					<img
						className="project-gallery4__item"
						src={galleryItem8}
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
			</div>
			<div className="project-team">
				<h5 className="project-team__title">TEAM</h5>
				<div className="project-team__container">
					<div className="project-team__item">
						{team.map((item) => (
							<>
								<p className="project-team__item_job">{item.role}</p>
								<p className="project-team__item_name">{item.name}</p>
							</>
						))}
					</div>
				</div>
			</div>

			<Link
				to="/project03"
				className="project-switch__link">
				<div className="project-switch">
					<h4 className="project-switch__title">DEVELOPMENT OF SBER'S CORPORATE TYPEFACE SYSTEM</h4>
					<p className="project-switch__number">/ 03</p>
				</div>
			</Link>
		</div>
	);
};

export default Project2;
