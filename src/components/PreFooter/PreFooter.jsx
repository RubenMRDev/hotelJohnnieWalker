
function PreFooter() {
	return (
			<div className="pre-footer bg-cover bg-center flex flex-col justify-center items-center h-80 text-white text-center relative z-2" style={{ backgroundImage: 'url("https://res.cloudinary.com/dd5hetwb8/image/upload/v1739955280/pre-footer-bg_da5lam.png")' }}>
				<div className="container-title">
					<h1 className="text-[clamp(20px,5vw,60px)] font-medium m-0 p-4 text-shadow-lg leading-tight">JOHNNIE WALKER HOTEL</h1>
				</div>
				<div className="container-conditions flex justify-center flex-wrap mt-8 gap-8">
					<a href="" className="no-underline font-medium text-white text-[clamp(12px,2vw,30px)] text-shadow-md">Condiciones de reserva</a>
					<a href="" className="no-underline font-medium text-white text-[clamp(12px,2vw,30px)] text-shadow-md">Aviso Legal</a>
					<a href="" className="no-underline font-medium text-white text-[clamp(12px,2vw,30px)] text-shadow-md">Política de uso</a>
				</div>
				<div className="container-gradient">
					<img
						className="gradient-img absolute bottom-0 left-0 w-full h-auto object-cover opacity-80 z-2"
						src="https://res.cloudinary.com/dd5hetwb8/image/upload/v1739955279/pre-footer-gradient-bg_jnhvs6.png"
						alt=""
					/>
				</div>
			</div>
		);
}

export default PreFooter;
