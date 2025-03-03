import RestaurantCard from "../components/RestaurantCard/RestaurantCard.jsx";
import Review from "../components/Review/Review.jsx";
import PreFooter from "../components/PreFooter/PreFooter.jsx";
import InteriorViewCard from "../components/InteriorViewCard/InteriorViewCard.jsx";
import ExteriorViewCard from "../components/ExteriorViewCard/ExteriorViewCard.jsx";
import Landing from "../components/Landing/Landing.jsx";

function LandingPage() {
	const resenyas = [
		{
		  name: "Juan Pérez",
		  date: "2021-08-01",
		  rating: 4.5,
		  text: "Excelente servicio, la comida muy rica y el lugar muy agradable. Sin duda volveré.",
		},
		{
		  name: "María López",
		  date: "2022-02-15",
		  rating: 5,
		  text: "Un lugar increíble, la atención de primera y la comida espectacular.",
		},
		{
		  name: "Carlos Gómez",
		  date: "2023-07-10",
		  rating: 4,
		  text: "Buena experiencia en general, aunque el servicio fue un poco lento.",
		},
	  ];
	return (
		<div>
      		<Landing />
			<InteriorViewCard />
			<ExteriorViewCard />
			<RestaurantCard />
			<Review resenyas={resenyas}/>
			
			<PreFooter />
		</div>
	);
}

export default LandingPage;
