
const Header = () => {
    return (
        <header className="fixed inset-x-0 opacity-80 top-0">
            <nav className="bg-indigo-400 text-white p-4 flex justify-between">
                <h1 className="first-letter:text-red-600 first-letter:font-bold">Doug's</h1>
                <ul className="flex flex-row-reverse space-x-5 space-x-reverse">
                    <li><a href="#footer">Contatos</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#">Inicio</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;