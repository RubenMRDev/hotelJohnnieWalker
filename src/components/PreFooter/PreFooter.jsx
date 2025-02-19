import "./PreFooter.css";

function PreFooter() {
	return (
		<div className="pre-footer">
			<div className="container-title">
				<h1>JOHNNIE WALKER HOTEL</h1>
			</div>
			<div className="container-conditions">
				<a href="">Condiciones de reserva</a>
				<a href="">Aviso Legal</a>
				<a href="">Política de uso</a>
			</div>
			<div className="container-gradient">
				<img
					className="gradient-img"
					src="https://res.cloudinary.com/dd5hetwb8/image/upload/v1739955279/pre-footer-gradient-bg_jnhvs6.png"
					alt=""
				/>
			</div>
		</div>
	);
}

export default PreFooter;
