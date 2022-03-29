import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = ({ empresa }) => {
    const generateDateString = () => {
        const creationYear = '2021';
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
    }
    return (
        <footer className="bottom-0 w-full" id="footer">
            <div className="bg-indigo-400 text-white p-4 text-center h-20 flex flex-col space-y-5">
                <ul className="px-60 flex flex-row justify-evenly items-center ">
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
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
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