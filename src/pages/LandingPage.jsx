import RestaurantCard from "../components/RestaurantCard/RestaurantCard.jsx";
import Review from "../components/Review/Review.jsx";
import PreFooter from "../components/PreFooter/PreFooter.jsx";

function LandingPage() {
	return (
		<div>
			<RestaurantCard />
			<Review
				nombre="John Doe"
				fecha="2023-10-12"
				calificacion={4.5}
				texto="Great experience, highly recommended!"
			/>
			<PreFooter />
		</div>
	);
}

export default LandingPage;
