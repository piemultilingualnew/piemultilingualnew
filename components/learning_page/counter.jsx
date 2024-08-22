"use client";
import { useState, useEffect } from "react";
import { useSprings, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Counters(props) {
  const values = props.data;
  const nums = values.map((val) => /(\d+)|([a-zA-Z]+)/g.exec(val.heading)[1]);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });
  const [animatedValues, setAnimatedValues] = useState(
    Array(values.length).fill(0)
  );
  const springs = useSprings(
    values.length,
    values.map((val, index) => ({
      from: { value: 0 },
      to: { value: inView ? Number(nums[index]) : 0 },
      config: { tension: 120, friction: 14, precision: 0.1, duration: 2000 },
      onRest: () => {
        if (
          index === values.length - 1 &&
          !animatedValues.every((value) => value !== 0)
        ) {
          setAnimatedValues(values);
        }
      },
    }))
  );

  useEffect(() => {
    if (inView) {
      setAnimatedValues(values);
    }
  }, [inView]);
  return (
    <div
      ref={inViewRef}
      className=" flex sm:flex-row flex-col w-full mt-[20px] justify-center items-center"
    >
      {springs.map((spring, index) => (
        <div
          key={index}
          className=" hover:border-[1.5px] dura counterbox  hover:border-[#43c5bf] flex p-[10px] flex-col justify-center items-center w-[295px] h-[125px] border-solid border-r-[0.7px] border-[#43b8c5]"
        >
          <p className="text-[50px] font-roboto font-bold flex justify-center items-center">
            <animated.span>
              {/* {spring.value.interpolate((val) => val.toFixed(0))} */}
            </animated.span>
            {values[index].heading?.match(/[a-zA-Z]/) || ""}+
          </p>
          <p className="text-[18px] font-roboto font-normal">
            {props.data[index] != null ? props.data[index].content : ""}
          </p>
        </div>
      ))}
    </div>
  );
}
