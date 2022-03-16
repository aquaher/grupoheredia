import Header from "../../components/Header";
import Logo from '../../public/assets/svg/logo.svg';
import Aquaher from '../../public/assets/svg/aquaher.svg';
import Image from "next/image";

export default function Blogs(){
    return(
        <>
            <Header></Header>
            <div className="blogger">
                <div className="logos">
                    <Logo/>
                    <Aquaher/>
                </div>
                <h1>Blogs</h1>
                <h2>Informe sobre la caracterización del Río portoviejo, contaminación y comparación con la norma tulsma</h2>
                <div className="grid">
                    <div className="valor-content">
                        <div className="resumen">
                            el resumen
                        </div>
                        <div className="imagenes">
                            <Image src='/assets/images/aqua_1.jpg' width={350} height={300}></Image>
                            <Image src='/assets/images/aqua_2.jpg' width={350} height={300}></Image>
                        </div>
                    </div>
                    <div className="enlaces">
                        <div className="content-buttons">
                            <div class="pushable">
                                <span class="shadow"></span>
                                <span class="edge"></span>
                                <span class="front">
                                Otra investigacion
                                </span>
                            </div>
                            <div class="pushable">
                                <span class="shadow"></span>
                                <span class="edge"></span>
                                <span class="front">
                                Otra investigacion
                                </span>
                            </div>
                            <div class="pushable">
                                <span class="shadow"></span>
                                <span class="edge"></span>
                                <span class="front">
                                Otra investigacion
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}