import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { SiWantedly } from "react-icons/si";
import PropTypes from 'prop-types';
import EngCv from '../public/Cv_ManKaChun.pdf';

function C3({ language }) {
    C3.propTypes = {
        language: PropTypes.string.isRequired,
    };

    const userData = {
        tc: {},
        en: { cv: EngCv },
        ja: {},
    };

    const handleOpenNewTab = () => {
        window.open("https://profile-ce15f.web.app/", "_blank");
    };

    return (
        <>
            {/* C4 */}
            <div className="grid-item c4" onClick={handleOpenNewTab}>
                <button className='img2-btn'>
                    <div className="ver1-btn">
                        <p className="title-1">Video Creator</p>
                        <p className="title-2">&#123;Portfolio Ver.1 &#125;</p>
                    </div>
                </button>
            </div>

            {/* C5 */}
            <div className="grid-item c5">
                {/* SNS */}
                <div className="sns">
                    <a href="https://github.com/cyrusmanosa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.facebook.com/man.chun.779/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.instagram.com/cyrus_mkc/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/cyrus_mkc/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.wantedly.com/id/CyrusMan" target="_blank" rel="noopener noreferrer"><SiWantedly /></a>
                    <a href={userData[language].cv} target="_blank"><IoDocumentText /></a>
                </div>
            </div>
        </>
    );
}
export default C3;
