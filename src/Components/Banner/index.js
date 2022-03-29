import perfil from './img/perfil.jpg'

const Banner = () => {

    return (
        <section id="banner">
            <div className="flex flex-row justify-center m-8 pt-8 text-white">
                <div className="">
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-56 rounded-full" src={perfil} alt="perfil" />
                    </div>
                    <h2 className="py-5 text-center font-semibold text-2xl ">Olá, eu sou o Doug!</h2>
                    <p className="p-4 xl:px-32 text-center italic">
                        Estudante de Desenvolvimento Web Full Stack na Digital House.
                        Atualmente, autônomo em Manutenções e venda de Smartphones ajudando
                        as pessoas a estarem mais conectadas as tecnologias que nos cercam.
                        Tenho como objetivo aprimorar meus conhecimentos melhor desempenhar os
                        desafios propostos pelo mercado de trabalho assim como aprender FrameWoks
                        e ferramentas que contribuam para entregar o melhor e superar as expectativas
                        do mercado que está cada vez mais exigente! Tenho também como proposito
                        aprender e desenvolver Apps para mobile.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Banner;