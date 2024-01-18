"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import PricingSingleItem from "./pricingItem";
import { PricingItem } from "@/types/pricingItem";
import PricingClient from "./pricingClient";

function getCookie(name) {
  if (typeof window === 'undefined') {
    // 서버 사이드에서는 document 객체가 없으므로 바로 null 반환
    return null;
  }
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const Pricing = () => {
  const [remainingTime, setRemainingTime] = useState('');
  let userClass = getCookie("userClass");
  let userClassText;
  if (userClass === null) {
    userClassText = ``;
  } else {
    userClassText = ` ${userClass}분반`;
  }

  useEffect(() => {
    // 목표 시간 설정 (예: 3주차 수업 시간)
    const targetTime = new Date('2024-01-18T15:30:00'); // YYYY-MM-DDTHH:MM:SS 형식

    const timer = setInterval(() => {
      const now = new Date();
      const difference = Number(targetTime) - Number(now);

      // 남은 시간이 없으면 타이머 정지
      if (difference <= 0) {
        clearInterval(timer);
        setRemainingTime('00:00:00');
        return;
      }

      // 남은 시간 계산
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');

      // 남은 일 수와 시간을 합쳐서 표시
      const remainingTimeString = `남은시간 - ${days}일 ${hours}:${minutes}:${seconds}`;
      setRemainingTime(remainingTimeString);
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []);


  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `[3주차]${userClassText}`,
                subtitle: `배당률`,
                description: remainingTime,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            {/* <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            /> */}
          </div>
            <PricingClient />
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
