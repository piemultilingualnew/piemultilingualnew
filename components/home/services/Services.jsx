import styles from "./services.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Services = ({ apiData }) => {
  const [content, setContent] = useState();
  const dataa = apiData;
  useEffect(() => {
    if (dataa != null && dataa != undefined) {
      setContent(dataa.services.squarebox);
    }
  }, [dataa]);

  return (
    <div className={styles.container}>
      <div className={styles.animation}>
        <Image
          src="/imgs/fun-facts-shape.png"
          alt=""
          width={146}
          height={102}
        />
      </div>
      <div className={styles.animation2}>
        <Image
          src="/imgs/fun-facts-shape.png"
          alt=""
          width={146}
          height={102}
        />
      </div>
      <h2
        className={styles.heading}
        style={{ fontSize: "27px", marginBottom: "5px" }}
      >
        SERVICE WE PROVIDE
      </h2>

      <div className={styles.services}>
        <div className={styles.rotate}>
          <Image src="/imgs/rotatingcircle.png" alt="" width={70} height={70} />
        </div>
        {content ? (
          content.map((item, i) => (
            <div key={i}>
              <Link href={`/${item.url}`}>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <i className={item.icon_name}></i>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>{item.heading}</div>
                    <div className={styles.desc}>
                      <p className="h-[96px] overflow-hidden">{item.text}</p>
                    </div>
                    <div className={styles.link}>
                      <i className="flaticon-send-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Services;
