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
					src="src\assets\images\pre-footer-gradient-bg.png"
					alt=""
				/>
			</div>
		</div>
	);
}

export default PreFooter;
