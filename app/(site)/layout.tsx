"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
import EndingModal from "@/components/Ending";
const inter = Inter({ subsets: ["latin"] });
import { useSession } from "next-auth/react";

import NextTopLoader from "nextjs-toploader";
import AuthProvider from "../context/AuthContext";
import ToasterContext from "../context/ToastContext";
import axios from "axios";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [updatedData, setupdatedData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [endTimes, setEndTimes] = useState(new Date("2025-01-17 00:08:00"));

  async function getEndTimes() {
    try {
      const response = await axios.get('https://api.pickthegold.co.kr/api/getEndTimes');
      return response.data;
    } catch (error) {
      // 에러 처리
      console.error('API 호출 중 오류 발생:', error);
      throw error;
    }
  }
  const [currentTime, setCurrentTime] = useState(new Date());

  async function getUpdatedBalance() {
    try {
      const response = await axios.get('https://api.pickthegold.co.kr/api/getEndResult');
      return response.data;
    } catch (error) {
      // 에러 처리
      console.error('API 호출 중 오류 발생:', error);
      throw error;
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      // console.log(currentTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  useEffect(() => {
    if (currentTime >= endTimes) {
      getUpdatedBalance().then((data) => {
        // console.log(data);
        setupdatedData(data);
      });
      setShowModal(true);
    }
  }, [currentTime, endTimes]);


  useEffect(() => {
    const updateScheduledTime = async () => {
      try {
        const data = await getEndTimes(); // 서버에서 종료 시간 가져오기
        const newEndTime = new Date(data[0].end_time);
        console.log("서버 시간 읽어오기");
        // console.log(newEndTime);
        setEndTimes(newEndTime); // 새로운 종료 시간으로 상태 업데이트
      } catch (error) {
        console.error("Scheduled time update failed:", error);
      }
    };

    const anotherIntervalId = setInterval(updateScheduledTime, 3000);

    return () => clearInterval(anotherIntervalId);
  }, [endTimes]);


  // useEffect(() => {
  //   const scheduledTime = "2024-01-17 00:08:00";
  //   console.log(scheduledTime);

  //   const checkScheduledTime = () => {
  //     const currentTime = new Date();
  //     const targetTime = new Date(scheduledTime);
  //     console.log(currentTime, targetTime);

  //     if (currentTime >= targetTime) {
  //       console.log("show modal");
  //       setShowModal(true);
  //       // 이후에는 이 함수가 실행되지 않도록 제거
  //       clearInterval(intervalId);
  //     }
  //   };

  //   const anotherFunction = () => {
  //     console.log("이 함수는 3초마다 호출됩니다.");
  //     // 추가 작업을 여기에 구현
  //     getEndTimes().then((data) => {
  //       console.log(data);
  //       console.log(data[0].end_time)
  //       const EndTimeFromServer = data[0].end_time;
  //       const EndTimeInDate = new Date(EndTimeFromServer);
  //       console.log(EndTimeInDate);
  //       setEndTimes(EndTimeInDate);
  //       console.log(endTimes);
  //     });
  //   };

  //   const intervalId = setInterval(checkScheduledTime, 1000);
  //   const anotherIntervalId = setInterval(anotherFunction, 3000);

  //   return () => {
  //     clearInterval(intervalId);
  //     clearInterval(anotherIntervalId); // 컴포넌트가 언마운트 될 때 인터벌 정리
  //   };
  // }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
        />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <AuthProvider>
            <Header />
            <ToasterContext />
            {children}
            <EndingModal
              updatedData={updatedData}
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            />
            <Footer />
            <ScrollToTop />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
