import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { SiWantedly } from "react-icons/si";

function C5() {
    return (
        <div className="grid-item c5">
            {/* SNS */}
            <div className="sns" >
                <a href="https://github.com/cyrusmanosa" ><FaGithub /></a>
                <a href="https://www.facebook.com/man.chun.779/" ><FaFacebook /></a>
                <a href="https://www.instagram.com/cyrus_mkc/" ><FaInstagram /></a>
                <a href="https://www.instagram.com/cyrus_mkc/" ><FaLinkedin /></a>
                <a href="https://www.wantedly.com/id/CyrusMan" ><SiWantedly /></a>
            </div>
        </div>
    )
}
export default C5;