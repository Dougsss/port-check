import perfil from './img/perfil.jpg'

const Banner = () => {

    return (
        <section id="banner">
            <div className="flex flex-row m-8 pt-8 text-white">
                <div className="">
                    <div className="w-1/4">
                        <img className="w-56 rounded-full" src={perfil} alt="perfil" />
                    </div>
                    <h2 className="py-5 text-center font-semibold text-xl ">Olá, eu sou o Doug!</h2>
                    <p className="p-4 px-28 text-center italic">
                        Estudante de Desenvolvimento Web Full Stack na Digital House.
                        Atualmente, autônomo em Manutenções e venda de Smartphones ajudando
                        as pessoas a estarem mais conectadas as tecnologias que nos cercam.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Banner;