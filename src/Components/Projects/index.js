
const data = [
    {
        id: "1",
        name: "Simulador Financeiro",
        link: "https://financial-simulator-4r03biohw-dougsss.vercel.app/",
        image: "https://www.engenhodeimagens.com.br/tpl/img/bg-quem-somos-txt.jpg"
    },
    {
        id: "2",
        name: "Podcastream",
        link: "https://pod-castream.vercel.app/index.html",
        image: "https://www.engenhodeimagens.com.br/tpl/img/bg-atualidades-txt.jpg"
    },
    {
        id: "3",
        name: "Check Notes",
        link: "https://front2-delta.vercel.app/#",
        image: "https://www.engenhodeimagens.com.br/tpl/img/bg-servicos-txt.jpg"
    },
    {
        id: "4",
        name: "Portifolio",
        link: "https://amazing-snyder-f20eec.netlify.app/",
        image: "https://www.engenhodeimagens.com.br/tpl/img/bg-portfolio-txt.jpg"
    }
]

const Projects = () => {
    return (
        <section className="bg-violet-100 h-auto mx-10 rounded-lg" id="projects">
            <div className="font-semibold text-center py-8">
                <h1 className="font-bold text-2xl text-violet-600">Alguns de meus Projetos realizados!</h1>
                <div className="py-8 m-5">
                    <ul className=" flex flex-wrap justify-center">
                        {
                            data.map(({ image, name, link }) => (
                                <li className="flex flex-col justify-center m-10">
                                    <a href={link}>
                                        <img className="rounded-2xl shadow-lg" src={image} />
                                    </a>
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