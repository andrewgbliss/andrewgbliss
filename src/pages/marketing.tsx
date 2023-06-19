import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "../components/icons/Menu";

const Marketing: NextPage = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <header className="fixed z-50 w-full bg-primary">
        <div className="lud-container p-2 xl:px-4">
          <div className="flex items-center justify-between">
            <div className="flex-grow">
              <div>
                <Link legacyBehavior href="/">
                  <a>
                    <Image
                      src="/img/marketing/brand.png"
                      width={37}
                      height={37}
                      alt=""
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="px-4">
              <input
                className="rounded-xl p-2 text-black"
                type="text"
                placeholder="Search ..."
              />
            </div>
            <div>
              <nav>
                <div className="hidden sm:flex">
                  <div className="flex flex-wrap text-white">
                    <a className="block pr-4" href={"/login"}>
                      Login
                    </a>
                    <a className="block pr-2" href={"/register"}>
                      Sign Up
                    </a>
                  </div>
                </div>
                <div className="relative sm:hidden">
                  <div className="text-white">
                    <button
                      className="btn-icon"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      <MenuIcon />
                    </button>
                  </div>
                  {showMenu && (
                    <div className="absolute right-0 top-10 z-50 rounded bg-black p-2 shadow-xl">
                      <div className="flex flex-wrap text-white">
                        <a className="block pr-4" href={"/login"}>
                          Login
                        </a>
                        <a className="block pr-2" href={"/register"}>
                          Sign Up
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-marketing overflow-y-hidden text-white">
          <div className="mx-auto py-10 md:w-2/4 md:py-24">
            <div className="h-8" />
            <div>
              <p className="px-4 pb-6 pt-12 text-center text-4xl uppercase leading-normal md:px-0 md:py-6">
                Please login
              </p>
              <p className="px-4 py-6 text-center text-xl md:px-0">
                Please Login
              </p>
              <div className="pt-6 text-center">
                <Link legacyBehavior href="/login">
                  <a className="btn btn-primary expand w-64 cursor-pointer text-white">
                    Login
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black text-white">
        <div className="h-8 sm:h-16" />
        <div className="lud-container">
          {/* <div className="px-2 md:px-6 xl:p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <Card title="Help">
              <a className="block link" href={'/about'}>
                About
              </a>
              <a className="block link" href={'/contact'}>
                Contact
              </a>
              <a className="block link" href={'/mentor'}>
                Mentoring
              </a>
              <a className="block link" href={'/support'}>
                Support
              </a>
            </Card>
            <Card title="Browse">
              <a className="block link" href={'/articles'}>
                Articles
              </a>
              <a className="block link" href={'/courses'}>
                Courses
              </a>
              <a className="block link" href={'/app-jams'}>
                App Jams
              </a>
            </Card>
            <Card title="Terms">
              <a className="block link" href={'/terms-of-use'}>
                Terms of Use
              </a>
              <a className="block link" href={'/privacy-policy'}>
                Privacy Policy
              </a>
            </Card>
          </div>
        </div> */}
          <div className="flex justify-center">
            <div className="py-4 text-center">
              <div>Marketing Site</div>
              <div>Copyright &copy; {new Date().getFullYear()}</div>
            </div>
          </div>
        </div>
        <div className="h-8 sm:h-16" />
      </footer>
    </>
  );
};

export default Marketing;
