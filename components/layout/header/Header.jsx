import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
const Sidebar = dynamic(() => import("../sidebar/Sidebar"));
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export const topLinks = [
  {
    text: "Industries We Serve",
    url: "/global-outsourcing-industry-solutions/business-process-outsourcing",
  },
  {
    text: "Languages",
    links: [
      {
        text: "Spanish",
        url: "/spanish-language-new/spanish-business-services",
      },
      {
        text: "French",
        url: "/french-language/french-business-services",
      },
      {
        text: "German",
        url: "/german-language/german-business-services",
      },
    ],
  },
  {
    text: "About Us",
    url: "/about-multilingual-outsourcing-company",
  },
  {
    text: "Contact Us",
    url: "/multilingual-outsourcing-contact-us",
  },
];

export const bottomLinks = [
  {
    icon: "flaticon-house",
    url: "/",
  },
  {
    text: "FOREIGN LANGUAGE</br> SUPPORT",
    url: "foreign-language-services",
  },
  {
    text: "MARKET RESEARCH </br>& ANALYSIS",
    url: "outsource-market-research-services",
  },
  {
    text: "TRANSCRIPTION </br>SERVICES",
    url: "transcription-services",
  },
  {
    text: "MULTILINGUAL </br>CALL CENTER",
    url: "multilingual-call-center-outsourcing",
  },
  {
    text: "DATA ENTRY </br>SERVICES",
    url: "data-entry",
  },
  {
    text: "CREATIVE </br>SERVICES",
    url: "outsource-creative-services",
  },
  {
    text: "PHOTO EDITING </br>SERVICES",
    url: "outsource-photo-editing-services",
  },
  {
    text: "VIRTUAL ASSISTANT </br>SERVICES",
    url: "virtual-assistant-services",
  },
  {
    text: "FINANCE & </br>ACCOUNTING",
    url: "/",
  },
  {
    text: "WEB DESIGN & </br>DEVELOPMENT",
    url: "/",
  },
];

const Header = () => {
  const [active, setActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [nowactive, setNowactive] = useState(-1);
  const toggleBooleanAtIndex = (index) => {
    setActive((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };
  const dispatch = useDispatch();
  const { isVisible } = useSelector((state) => state.edit);
  const { headerData, statusHeader, errorHeader } = useSelector(
    (state) => state.header
  );

  useEffect(() => {
    const fetching = async () => {
      const { fetchHeaderData } = await import("@/Redux/actions/headerActions");
      dispatch(fetchHeaderData());
    };
    fetching();
  }, [dispatch]);
  return (
    <div
      className={styles.container}
      style={{ marginTop: isVisible ? "30px" : "0px" }}
    >
      <div className={styles.topBar}>
        <div className={styles.left}>
          <Link
            href="/"
            onClick={() => {
              if (nowactive != -1) {
                toggleBooleanAtIndex(nowactive);
              }
              setNowactive(-1);
            }}
          >
            <Image
              src="/imgs/logo.svg"
              width={280}
              height={55}
              className={styles.logoImg}
              alt="pie-multilingual"
              priority
            />
          </Link>
          <Sidebar links={bottomLinks} />
        </div>
        <div className={styles.right}>
          <div className={styles.menu}>
            <Link
              href="/multilingual-outsourcing-company-services"
              className={styles.menuLink}
              onClick={() => {
                if (nowactive != -1) {
                  toggleBooleanAtIndex(nowactive);
                }
                setNowactive(-1);
              }}
            >
              <i className="flaticon-gears" /> ALL SERVICES
            </Link>
            <span>
              {topLinks.map((item, i) => (
                <li key={i}>
                  {item.url ? (
                    <Link
                      className={styles.menuLink}
                      href={item.url}
                      onClick={() => {
                        if (nowactive != -1) {
                          toggleBooleanAtIndex(nowactive);
                        }
                        setNowactive(-1);
                      }}
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <button name="button" className={styles.menuLink}>
                      {item.text}
                    </button>
                  )}
                  {item.links && (
                    <nav>
                      {item.links.map((link, i) => (
                        <Link
                          href={link.url}
                          key={i}
                          onClick={() => {
                            if (nowactive != -1) {
                              toggleBooleanAtIndex(nowactive);
                            }
                            setNowactive(-1);
                          }}
                        >
                          {link.text}
                        </Link>
                      ))}
                    </nav>
                  )}
                </li>
              ))}
            </span>
          </div>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
            />
            <button name="button" className={styles.searchBtn}>
              <i className="flaticon-magnifying-glass text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        {headerData != null && headerData != undefined ? (
          <ul className={styles.bottomBarContainer} style={{ padding: 0 }}>
            {bottomLinks[0].icon && (
              <li
                className={styles.bottomBarLink}
                onClick={() => {
                  if (nowactive != -1) {
                    toggleBooleanAtIndex(nowactive);
                  }
                  setNowactive(-1);
                }}
              >
                <Link href="/" aria-label="home" className={styles.link}>
                  <i className={`${bottomLinks[0].icon} `} />
                </Link>
              </li>
            )}
            {headerData.menu.map((item, i) => (
              <li className={styles.bottomBarLink} key={i}>
                <Link
                  className={`${styles.link} hover:bg-[#f60]`}
                  href={`/${item.url}`}
                  onClick={() => {
                    toggleBooleanAtIndex(i);
                    if (nowactive != -1) {
                      toggleBooleanAtIndex(nowactive);
                    }
                    setNowactive(i);
                  }}
                  style={{ backgroundColor: active[i] ? "#F60" : "#43b8c5" }}
                >
                  {item.icon && <i className={item.icon} />}
                  {item.text && (
                    <span
                      className=""
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
