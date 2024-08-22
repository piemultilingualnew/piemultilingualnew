import styles from "./industries.module.scss";
import Image from "next/image";

export const industriesData = {
  heading: "Industries We Serve To",
  description:
    "We provide our services to multiple industries and verticals. Here is a break-up of the industries that we offer our services -",
  idustries: [
    {
      icon: "/imgs/industries/plane.svg",
      title: "Aerospace",
    },
    {
      icon: "/imgs/industries/agriculture.svg",
      title: "Agriculture",
    },
    {
      icon: "/imgs/industries/car.svg",
      title: "Automotive",
    },
    {
      icon: "/imgs/industries/chemical.svg",
      title: "Chemical",
    },
    {
      icon: "/imgs/industries/brokerage.svg",
      title: "Custom Brokerage",
    },
    {
      icon: "/imgs/industries/defense.svg",
      title: "Defense/Arm",
    },
    {
      icon: "/imgs/industries/energy.svg",
      title: "Energy",
    },
    {
      icon: "/imgs/industries/education.svg",
      title: "Education",
    },
    {
      icon: "/imgs/industries/entertainment.svg",
      title: "Entertainment",
    },
    {
      icon: "/imgs/industries/finance.svg",
      title: "Finance",
    },
    {
      icon: "/imgs/industries/forestry.svg",
      title: "Forestry",
    },
    {
      icon: "/imgs/industries/food.svg",
      title: "Food",
    },
    {
      icon: "/imgs/industries/health.svg",
      title: "Healthcare",
    },
    {
      icon: "/imgs/industries/hospital.svg",
      title: "Hospitality",
    },
    {
      icon: "/imgs/industries/it.svg",
      title: "Information Technology",
    },
    {
      icon: "/imgs/industries/Logistics.svg",
      title: "Logistics",
    },
    {
      icon: "/imgs/industries/Manufacturing.svg",
      title: "Manufacturing",
    },
    {
      icon: "/imgs/industries/Mass.svg",
      title: "Mass",
    },
    {
      icon: "/imgs/industries/Multimedia.svg",
      title: "Multimedia",
    },
    {
      icon: "/imgs/industries/PublicSector.svg",
      title: "Public Sector/Government",
    },
    {
      icon: "/imgs/industries/Pharmaceutical.svg",
      title: "Pharmaceutical",
    },
    {
      icon: "/imgs/industries/Retail.svg",
      title: "Retail & e-Commerce",
    },
    {
      icon: "/imgs/industries/Telecommunications.svg",
      title: "Telecommunications",
    },
    {
      icon: "/imgs/industries/Transport.svg",
      title: "Transport",
    },
  ],
};

const Industries = (props) => {
  return props.data == null || props.data == undefined ? (
    <div
      className={styles.container}
      style={{
        paddingTop: "42px",
        backgroundColor: "#e8f3fe",
        position: "relative",
      }}
    >
      <Image
        src="/imgs/industries_1-cropped.svg"
        alt=""
        width={300}
        height={400}
        className="absolute -left-0 bottom-0 h-[375px]"
      />
      <Image
        src="/imgs/industries_2-cropped.svg"
        alt=""
        width={300}
        height={400}
        className="absolute -right-0 -top-3 h-[375px]"
      />
      <div
        className={styles.content}
        style={{
          marginBottom: "25px",
          maxWidth: "1210px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          className={styles.left}
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          <h2 className={styles.heading} style={{ fontSize: "27px" }}>
            {industriesData.heading}
          </h2>
          <p
            className={styles.description}
            style={{ zIndex: 10, position: "relative" }}
          >
            {industriesData.description}
          </p>
          <ul className={styles.list}>
            {industriesData.idustries.map((item, i) => (
              <li key={i} className={styles.itemWrapper}>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <Image
                      src={item.icon}
                      width={30}
                      height={30}
                      alt=""
                      className="h-auto w-auto"
                      loading="lazy"
                    />
                  </div>
                  <p>{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    props.data && (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2
              className="font-acme inline-block text-[22px]  uppercase font-normal mb-[2px] mt-[]  text-[#30B1C0]"
              style={{ wordSpacing: "0.25rem" }}
            >
              {industriesData.heading}
            </h2>
            <p className={`text-[14px] font-normal leading-[25px]`}>
              {industriesData.description}
            </p>
            <ul className={styles.list} style={{ backgroundColor: "white" }}>
              {industriesData.idustries.map((item, i) => (
                <li key={i} className={styles.itemWrapper}>
                  <div
                    className={styles.item}
                    style={{ backgroundColor: "white" }}
                  >
                    <div className={styles.icon}>
                      <Image
                        src={item.icon}
                        width={30}
                        height={30}
                        alt=""
                        className="h-auto w-auto"
                        loading="lazy"
                      />
                    </div>
                    <p>{item.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default Industries;
