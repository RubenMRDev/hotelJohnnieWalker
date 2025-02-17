import Review from "../components/Review/Review.jsx";


function LandingPage() {
  return (
    <div>
      <Review nombre="John Doe" fecha="2023-10-12" calificacion={4.5} texto="Great experience, highly recommended!" />
    </div>
  );
}

export default LandingPage;
