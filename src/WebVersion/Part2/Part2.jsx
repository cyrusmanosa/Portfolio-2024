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
import { Part2, C3, ImgBtn, ItWord, C2, InformationTitle, Horizontal, DataPart, DataItem, ItemLogo, ItemH4a, ItemH4b, Pfimg, DataPartB, IntroduceData } from "./Emotion";

function WPart2() {
  const { t, i18n } = useTranslation();
  const [c2switch, setC2Switch] = useState(false);
  const [checkC3, setCheckC3] = useState(false);
  const ratio = Math.round((window.outerWidth / window.innerWidth) * 100);

  let S1PxSize = {};
  if (ratio < 125) {
    S1PxSize = {
      en: { 1650: "1400px", 1350: "1200px", 850: "1250px"},
      zh: { 1650: "1300px", 1350: "1100px", 850: "1000px"},
      ja: { 1650: "2300px", 1350: "2000px", 850: "2100px"},
    };
  } else {
    S1PxSize = {
      en: { 1650: "1450px", 1350: "1250px", 850: "1300px"},
      zh: { 1650: "1350px", 1350: "1150px", 850: "1050px"},
      ja: { 1650: "2250px", 1350: "2050px", 850: "2150px"},
    };
  }

  // JS c2
  const C2OnMouseEnter = () => {
    HandelPxSize(document.getElementById("pc2"), i18n.language, S1PxSize);
    setC2Switch(true);
  };

  // JS c3
  const C3OnMouseEnter = () => {
    setTimeout(() => {
      const pc3Element = document.getElementById("pc3");
      const pc3ImgElement = document.getElementById("pc3-img");
      // pc3Element.style.gridColumn = "1 / span 6";
      pc3ImgElement.style.width = "100%";
      setCheckC3(true);
      setC2Switch(false);
    }, 300);
  };

  const C3OnMouseLeave = () => {
    setTimeout(() => {
      HandelPxSize(document.getElementById("pc2"), i18n.language, S1PxSize);
      const pc3Element = document.getElementById("pc3");
      const pc3ImgElement = document.getElementById("pc3-img");
      HandelPxSize(pc3Element, i18n.language, S1PxSize);
      // pc3Element.style.gridColumn = "5 / span 2";
      pc3ImgElement.style.height = "100%";
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

  //----------------------------------------------------------------
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      const pc2Element = document.getElementById("pc2");
      const pc3Element = document.getElementById("pc3");
      HandelPxSize(pc2Element, lng, S1PxSize);
      HandelPxSize(pc3Element, lng, S1PxSize);
    };
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);
  //----------------------------------------------------------------

  return (
    <Part2>
      {/* C2 */}
      <C2 className="grid-item" id="pc2" onMouseEnter={C2OnMouseEnter}>

        <InformationTitle className={ i18n.language === "zh" || i18n.language === "ja" ? "TcAndJaFon700" : "" }>
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
              <ItemH4a>cyrusman1207@gmail.com</ItemH4a>
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
          <Pfimg src={PortfoiloImg} alt="Img" className="PortfoiloImg" onMouseEnter={C2OnMouseEnter}/>
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
            <TimeLine />
        ) : (
          <div></div>
        )}
      </C2>

      {/* C3 */}
      <C3 className="grid-item" id="pc3" onMouseEnter={C3OnMouseEnter} onMouseLeave={C3OnMouseLeave}>
        <ImgBtn id="pc3-img">
          <ItWord id="it-btn">
            IT
          </ItWord>
        </ImgBtn>

        {/* {checkC3 ? (
          <div id="pc3-part2">
            <It />
          </div>
        ) : (
          <div id="pc3-part2"></div>
        )} */}
      </C3>
    </Part2>
  );
}


export default WPart2;
