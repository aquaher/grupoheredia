import Header from "../components/Header";

export default function Contacto() {
    const style = {
        border: 0
    }
    return (
        <>
            <Header></Header>
            <div className="contacto">
                <div className="location">
                    <div className="content">
                        <div className="left-side">
                            <div className="address details">
                                <i className="fa fa-map"></i>
                                <div className="topic">Dirección</div>
                                <div className="text-one">Rocafuerte</div>
                                <div className="text-two">KM15 via a crucita</div>
                            </div>
                            <div className="phone details">
                                <i className="fa fa-phone"></i>
                                <div className="topic">Teléfono</div>
                                <div className="text-one">+593 99999999</div>
                                <div className="text-two">+593 99999999</div>
                            </div>
                            <div className="email details">
                                <i className="fa fa-envelope"></i>
                                <div className="topic">Correo</div>
                                <div className="text-one">info@aquaher.com</div>
                                <div className="text-two">dpto_comercial@aquaher.com</div>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="topic-text">Envianos un mensaje</div>
                            <p>Si tiene alguna pregunta, no dude en contactarnos.</p>
                            <form action="#">
                                <div className="input-box">
                                    <input type="text" placeholder="Ingresa tu nombre" />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Ingresa tu teléfono" />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Ingresa tu correo" />
                                </div>
                                <div className="input-box message-box">
                                </div>
                                <div className="button">
                                    <input type="button" value="Enviar ahora!" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3030111443004!2d-80.48212328524636!3d-0.920872899328236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902beae861c760b5%3A0xa5000195987be86b!2sAquaher%20S.A.!5e0!3m2!1ses-419!2sec!4v1647835729728!5m2!1ses-419!2sec" width="600" height="450" style={style} loading="lazy"></iframe>

            </div>
        </>
    );
}