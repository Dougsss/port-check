
const data = [
    {
        id: "1",
        name: "Simulador Financeiro",
        link: "https://financial-simulator-4r03biohw-dougsss.vercel.app/",
        image: "https://blog.financiatudo.com.br/wp-content/uploads/2017/11/simulador-de-financiamento-imobiliario-para-as-menores-taxas-de-juros-do-mercado.png"
    },
    {
        id: "2",
        name: "Podcastream",
        link: "https://pod-castream.vercel.app/index.html",
        image: "https://media.istockphoto.com/photos/flat-lay-studio-microphone-with-professional-headphones-on-a-pc-on-picture-id1203056288?k=20&m=1203056288&s=612x612&w=0&h=5z1Ia6_UJ3C_uDRnG9Xm7LfPvH4DXP-A5rzCKBBk6L8="
    },
    {
        id: "3",
        name: "Check Notes",
        link: "https://front2-delta.vercel.app/#",
        image: "https://img-21.ccm2.net/Y_Gn7ccGkxJ9dT-ILIhkXPFKyY4=/500x/c726c8cd35994ca3ae964a3ddb68d3eb/ccm-faq/Mike_Tinnion_Unsplash.jpg"
    },
    {
        id: "4",
        name: "Portifolio",
        link: "https://amazing-snyder-f20eec.netlify.app/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHpdhaVYcFfejvWfvxr-LD6mUxSHw6pEa2w&usqp=CAU"
    }
]

const Projects = () => {
    return (
        <section className="bg-violet-100 h-auto mx-10 rounded-lg" id="projects">
            <div className="font-semibold text-center py-8">
                <h1>Alguns de meus Projetos realizados!</h1>
                <div className="py-8 m-5">
                    <ul className=" flex flex-wrap justify-center">
                        {
                            data.map(({ image, name }) => (
                                <li className="flex flex-col justify-center m-10">
                                    <img src={image} width={350} />
                                    <h3 className="m-5">{name}</h3>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects