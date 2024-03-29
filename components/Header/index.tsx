"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import "./dropdown.css";
import axios from "axios";

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

function deleteCookie(name) {
  // 쿠키의 만료 날짜를 과거로 설정하여 삭제
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const toggleDropdown = () => {
    setDropdownToggler(!dropdownToggler);
  };

  const { data: session } = useSession();
  console.log(session);
  const pathUrl = usePathname();

  const controlAdmin = () => {
    const now = new Date();
    const paramData = {
      time: now
    }
    axios.post(`https://api.pickthegold.co.kr/api/betResult`, paramData)
      .then(response => {
        // 성공적인 응답 처리
        console.log("결과 처리가 완료되었습니다.");
        console.log(response.data);

      })
      .catch(error => {
        // 오류 처리
        console.error('There was an error!', error);
      });
  };

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 30) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  let userClass = getCookie("userClass");
  let currentBalance = getCookie("currentBalance");

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${stickyMenu
        ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
        : ""
        }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/logo-dark.png"
              alt="logo"
              width={119.03}
              height={30}
              className="hidden w-full dark:block"
            />
            <Image
              src="/images/logo/logo-light.png"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-300" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 !w-full" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-500" : "w-0"
                    }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"
                    }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <ThemeToggler />
            {/* 
            <Link
              href="https://github.com/NextJSTemplates/solid-nextjs"
              className="text-regular font-medium text-waterloo hover:text-primary"
            >
              GitHub Repo 🌟
            </Link> */}
            {session ? (
              <>
                <button
                  className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
                  onClick={toggleDropdown}>
                  내 정보
                </button>
                {dropdownToggler && (
                  <div className="dropdown-profile">
                    {/* 드롭다운 메뉴 내용 */}
                    <h2 className="text-black text-xl"><b>{session?.user?.name}</b>님,</h2>
                    <h3 className="text-black">안녕하세요</h3>
                    <p>[3주차] {userClass}분반</p>
                    <p>남은 자산: {currentBalance}원</p>
                    <button
                      aria-label="SignOut"
                      onClick={() => { signOut(); deleteCookie("userClass"); deleteCookie("currentBalance"); deleteCookie("proj_ids"); }}
                      className="flex w-30 items-center justify-center border border-gray rounded-full bg-transparent px-7.5 py-2.5 text-regular text-red-500 duration-300 ease-in-out hover:bg-primaryho hover:text-white"
                    >
                      로그아웃
                    </button>

                    {(session?.user?.name === "naco0406" && userClass === '0') && (
                      <button
                        onClick={controlAdmin}
                        className="mt-4 flex items-center justify-center border border-gray rounded-full bg-primary px-7.5 py-2.5 text-regular text-white hover:bg-primary-dark"
                      >
                        결과 정산하기
                      </button>
                    )}

                  </div>
                )}
                {/* <button
                  aria-label="SignOut"
                  onClick={() => { signOut(); deleteCookie("userClass"); }}
                  className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
                >
                  로그아웃
                </button> */}
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
                >
                  로그인
                </Link>
              </>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
