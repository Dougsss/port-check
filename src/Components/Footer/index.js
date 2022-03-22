import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = ({ empresa }) => {
    const generateDateString = () => {
        const creationYear = '2021';
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
    }
    return (
        <footer className="fixed bottom-0 w-full" id="footer">
            <div className="bg-indigo-400 text-white p-4 pb-1 text-center">
                <ul className="flex flex-row">
                    <li>
                        <a href="https://www.facebook.com/douglas.araujo.921/" >
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/dougs.araujo/">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="linkedin.com/in/douglas-araujo-393998179">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
                <p className="italic font-extralight">
                    <span>{empresa}</span>
                    Todos os direitos reservados. &copy; Copyright {generateDateString()}
                </p>
            </div>
        </footer>
    )
}
export default Footer;