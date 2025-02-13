import React from "react";
import "./Reviews.css";
import star from "../../assets/images/star-reviews.png";

const Reviews = ({ name, date, rating, text }) => {
	return (
		<div className="review-container">
			{/* Header with line - star - line */}
			<div className="review-header">
				<span className="line"></span>
				<div className="star-wrapper">
					<img src={star} alt="Star" className="star-img" />
				</div>
				<span className="line"></span>
			</div>

			{/* Content in column for mobile */}
			<div className="review-content">
				<div className="review-info">
					<h3 className="name">{name}</h3>
					<p className="date">{date}</p>
					<p className="rating">
						{rating}{" "}
						<span className="stars">{generateStars(rating)}</span>
					</p>
				</div>

				<p className="review-text">{text}</p>
			</div>

			{/* Pagination */}
			<div className="review-pagination">
				<span className="dot active"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
			</div>
		</div>
	);
};

const generateStars = (rating) => {
	const fullStars = Math.floor(rating);
	const halfStar = rating % 1 !== 0 ? "☆" : "";
	return (
		"★".repeat(fullStars) +
		halfStar +
		"☆".repeat(5 - fullStars - (halfStar ? 1 : 0))
	);
};

export default Reviews;
