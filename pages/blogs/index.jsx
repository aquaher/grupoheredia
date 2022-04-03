import Header from "../../components/Header";
import Logo from '../../public/assets/svg/logo.svg';
import Aquaher from '../../public/assets/svg/aquaher.svg';
import Image from "next/image";
import Card from "../../components/blogs/Card";

export default function Blogs(){
    /*const data = [
        {
            title:'Prueba',
            body:'otra prueba',
            img:'/assets/images/rio_p.jpg'
        },
        {
            title:'Prueba 1',
            body:'otra prueba 2',
            img:'/assets/images/rio_p2.jpg'
        },
        {
            title:'Prueba 2',
            body:'otra prueba 3',
            img:'/assets/images/rio_p.jpg'
        }
    ]*/
    const data =null
    const Cards =()=> data?data.map((content,i)=>{
        return <Card key={i} title={content.title} body={content.body} img={content.img}></Card>
    }):null;

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
                            <p>El Río Portoviejo tiene 123 km, nace en el Cantón Santa Ana y desemboca en la Parroquia Crucita. Los cantones de Santa Ana, Portoviejo, Rocafuerte y Manta utilizan el agua del Río Portoviejo. El problema es que a medida que el Río Portoviejo se aleja de Poza Honda, la contaminación aumenta porque incluso se hacen descargas de aguas residuales. Los niveles microbiológicos de coliformes totales estuvieron hasta en 1 330 NMP/100mL y coliformes fecales en 229 NMP/100mL. En cuanto al análisis químico se encontró cobre (0.21 ppm), hierro (0.24 ppm), boro (2.2 ppm), manganeso (0.4 ppm), aluminio (0.03 ppm), fósforo (0.34 ppm), nitritos (0.02 ppm) y tensoactivos (0.03 ppm). Además, se encontró trazas de Alfa-BHC (Alfa-hexaclorociclohexano) que es un pesticida proveniente del lindano. La presencia de coliformes totales, y fecales como la Escherichia coli, puede causar afecciones intestinales, pero sobre todo sirve para deducir la presencia de bacterias más agresivas como Salmonella y Pseudomonas. La alta dureza promueve la formación de oxalatos de calcio, principales precursores de problemas renales. La cantidad de aluminio en el Río cumple el límite máximo, pero a largo plazo tiende a bioacumularse en el cuerpo, sobre todo torrente sanguíneo, corazón y cerebro. Se ha asociado al aluminio como posible precursor de enfermedades neurológicas como Parkinson, Alzehimer, esclerosis lateral amiotrófica, encefalopatías, entre otras. La presencia del Alfa-BHC puede provocar enfermedades neurodegenerativas, demenciales, renales, cardiacas y cancerígenas. La turbidez del Río es alta y puede llegar a un valor de 10,000 NTU, el coagulante que se usa para remover turbidez generalmente contiene aluminio por lo que el agua queda con aluminio residual. Las plantas de tratamiento utilizan cloro para eliminar la gran cantidad de microorganismos, sin embargo, el cloro residual se reduce a cloruro y puede reaccionar con otros contaminantes del agua. Se podrían formar trihalometanos que favorece a enfermedades como cáncer de piel, colon, estómago y vejiga. El cloro también reacciona con amoníaco para formar cloraminas. Las cloraminas pueden promover problemas mutagénicos de nacimiento, afecciones pulmonares, enfermedades renales, problemas de la glándula tiroidea y descontrol de funciones normales del cuerpo.</p>
                        </div>
                        <div className="imagenes">
                            <Image src='/assets/images/rio_p.jpg' width={350} height={300} alt='rio_portoviejo'></Image>
                            <Image src='/assets/images/rio_p2.jpg' width={350} height={300} alt='rio portoviejo'></Image>
                        </div>
                    </div>
                    {data?<div className="enlaces">
                    <Cards/>
                    </div>:null}
                    
                </div>
            </div>
        </>
    );
}