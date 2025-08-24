import { BsFillFilePersonFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaBirthdayCake } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import PortfoiloImg from "../../assets/Portfoilo.jpeg";
import TimeLine from "./timeline";
import It from "./IT/WIt";
import { C3, ImgBtn, ItBtn, C2, InformationTitle, Horizontal, DataPart, DataItem, ItemLogo, ItemH4a, ItemH4b, Pfimg, DataPartB, IntroduceData } from "./Emotion";

function WPart2() {
  const { t, i18n } = useTranslation();
  const [c2switch, setC2Switch] = useState(false);
  const [checkC3, setCheckC3] = useState(false);
  const ratio = Math.round((window.outerWidth / window.innerWidth) * 100);

  let S1PxSize = {};
  if (ratio < 125) {
    S1PxSize = {
      en: { 1650: "1400px", 1350: "1200px", 850: "1250px", under: "1350px" },
      zh: { 1650: "1300px", 1350: "1100px", 850: "1000px", under: "1100px" },
      ja: { 1650: "2150px", 1350: "1850px", 850: "1950px", under: "2100px" },
    };
  } else {
    S1PxSize = {
      en: { 1650: "1450px", 1350: "1250px", 850: "1300px", under: "1400px" },
      zh: { 1650: "1350px", 1350: "1150px", 850: "1050px", under: "1250px" },
      ja: { 1650: "2100px", 1350: "1900px", 850: "2000px", under: "2150px" },
    };
  }

  // JS c2
  const C2HandleOnMouseEnter = () => {
    HandelPxSize(document.getElementById("pc2"), i18n.language, S1PxSize);
    setC2Switch(true);

    const pc3Element = document.getElementById("pc3");
    pc3Element.addEventListener("mouseenter", C3OnMouseEnter);
    pc3Element.addEventListener("mouseleave", C3OnMouseLeave);
  };

  // JS c3
  const C3OnMouseEnter = () => {
    setTimeout(() => {
      const pc3Element = document.getElementById("pc3");
      const pc3Img = document.getElementById("pc3-img");
      pc3Element.style.height = "100%";
      pc3Element.style.gridColumn = "1 / span 6";
      pc3Img.style.width = "100%";
      pc3Img.style.height = "200px";
      document.getElementById("it-btn").style.margin = "0 0 3% 0";
      setCheckC3(true);
      setC2Switch(false);
    }, 300);
  };

  const C3OnMouseLeave = () => {
    setTimeout(() => {
      const pc3Element = document.getElementById("pc3");
      const pc3Img = document.getElementById("pc3-img");

      HandelPxSize(document.getElementById("pc2"), i18n.language, S1PxSize);
      HandelPxSize(pc3Element, i18n.language, S1PxSize);
      pc3Element.style.gridColumn = "5 / span 2";
      pc3Img.style.width = "300px";
      pc3Img.style.height = "100%";
      document.getElementById("it-btn").style.margin = "auto";
      setC2Switch(true);
      setCheckC3(false);
    }, 300);
  };

  const HandelPxSize = (Element, lng, PxSize) => {
    if (window.matchMedia("(min-width: 1650px)").matches) {
      Element.style.height = PxSize[lng][1650];
    } else if (window.matchMedia("(min-width: 1350px)").matches) {
      Element.style.height = PxSize[lng][1350];
    } else if (window.matchMedia("(min-width: 850px)").matches) {
      Element.style.height = PxSize[lng][850];
    }
  };

  const CalculateAge = () => {
    const today = new Date();
    const birth = new Date("1994-12-07");
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      HandelPxSize(document.getElementById("pc2"), lng, S1PxSize);
      HandelPxSize(document.getElementById("pc3"), lng, S1PxSize);
    };
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <>
      {/* C2 */}
      <C2 className="grid-item" id="pc2" onMouseEnter={C2HandleOnMouseEnter}>

        <InformationTitle className={i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : ""}>
          {t("title")}
        </InformationTitle>

        <Horizontal>
          <DataPart>
            {/* Birthday */}
            <DataItem>
              <ItemLogo>
                <FaBirthdayCake />
              </ItemLogo>
              <ItemH4a>1994-12-07 ({CalculateAge()})</ItemH4a>
            </DataItem>

            {/* Country */}
            <DataItem>
              <ItemLogo>
                <TbWorld />
              </ItemLogo>
              <ItemH4a
                className={
                  i18n.language === "zh" || i18n.language === "ja"
                    ? "TcAndJaFon700"
                    : ""
                }
              >
                {t("country")}
              </ItemH4a>
            </DataItem>

            {/* Location */}
            <DataItem>
              <ItemLogo>
                <MdLocationPin />
              </ItemLogo>
              <ItemH4a
                className={
                  i18n.language === "zh" || i18n.language === "ja"
                    ? "TcAndJaFon700"
                    : ""
                }
              >
                {t("location")}
              </ItemH4a>
            </DataItem>

            {/* Email */}
            <DataItem>
              <ItemLogo>
                <MdEmail />
              </ItemLogo>
              <ItemH4a alt="mailto:cyrusman2025@gmail.com">cyrusman2025@gmail.com</ItemH4a>
            </DataItem>

            {/* Hobby */}
            <DataItem>
              <ItemLogo>
                <IoHeart />
              </ItemLogo>
              <ItemH4a
                className={
                  i18n.language === "zh" || i18n.language === "ja"
                    ? "TcAndJaFon700"
                    : ""
                }
              >
                {t("hobby")}
              </ItemH4a>
            </DataItem>
          </DataPart>

          {/* pic */}
          <Pfimg src={PortfoiloImg} alt="Img" className="PortfoiloImg" onMouseEnter={C2HandleOnMouseEnter} />
        </Horizontal>

        {/* Introduce */}
        <DataPartB>
          <ItemLogo>
            <BsFillFilePersonFill />
          </ItemLogo>
          <ItemH4b
            className={
              i18n.language === "zh" || i18n.language === "ja"
                ? "TcAndJaFon700 intro-TcAndJa-line-height "
                : "intro-Eng-line-height"
            }
          >
            {t("itemIntro")} :
          </ItemH4b>
        </DataPartB>

        <IntroduceData
          className={
            i18n.language === "zh" || i18n.language === "ja"
              ? "TcAndJaFon700 intro-TcAndJa-line-height "
              : "intro-Eng-line-height"
          }
        >
          {t("intro")}
        </IntroduceData>

        {/* Extend */}
        {c2switch ? (
          <div id="extend">
            <TimeLine />
          </div>
        ) : (
          <div id="extend"></div>
        )}
      </C2>

      {/* C3 */}
      <C3 className="grid-item" id="pc3">
        <ImgBtn id="pc3-img">
          <ItBtn id="it-btn">
            <p>IT</p>
          </ItBtn>
        </ImgBtn>
        {checkC3 ? (
          <div id="pc3-part2">
            <It />
          </div>
        ) : (
          <div id="pc3-part2"></div>
        )}
      </C3>
    </>
  );
}


export default WPart2;
