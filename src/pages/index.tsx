import { type NextPage } from "next";
import { useState, useRef } from "react";
import { FadeIn } from "../components/tailwind/animations";
import { Paper, Screen } from "../components/tailwind/containers";

const allowedNames = ["Andy"];

const Home: NextPage = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if (allowedNames.indexOf(inputEl?.current?.value || "") > -1) {
      setShowLinks(true);
    }
  };

  return (
    <FadeIn show>
      <Screen>
        <FadeIn show>
          <Paper className="w-96 bg-white">
            <div className="flex flex-col gap-2 p-2">
              <FadeIn wait={2000}>
                <p>Hello World!</p>
              </FadeIn>
              <FadeIn wait={4000}>
                <p>Welcome to my website.</p>
              </FadeIn>
              <FadeIn wait={6000}>
                <input
                  className="input focus:shadow-outline focus:outline-none"
                  ref={inputEl}
                  type="text"
                  placeholder="What is your name?"
                />
              </FadeIn>
              <FadeIn wait={10000}>
                <button className="btn btn-primary" onClick={onButtonClick}>
                  Check Access
                </button>
              </FadeIn>
              {showLinks && (
                <>
                  <FadeIn show>
                    <h4>
                      It Worked! You got past my security. You are a true hacker
                      now.
                    </h4>
                  </FadeIn>
                  <FadeIn wait={5000}>
                    <div className="flex flex-col gap-2">
                      <a
                        className="btn btn-primary"
                        target="_blank"
                        href="/resume"
                      >
                        Resume
                      </a>
                      <a
                        className="btn btn-primary"
                        target="_blank"
                        href="/music"
                      >
                        Music
                      </a>
                      <a
                        className="btn btn-primary"
                        target="_blank"
                        href="/beta-access"
                      >
                        Beta Access
                      </a>
                      {/* <a
                        className="btn btn-primary"
                        target="_blank"
                        href="/startup"
                      >
                        Startup
                      </a> */}
                      <a
                        className="btn btn-primary"
                        target="_blank"
                        href="/swapi"
                      >
                        Swapi
                      </a>
                      {/* <a
                        className="btn btn-primary"
                        target="_blank"
                        href="/memories"
                      >
                        Memories
                      </a> */}
                      {/* <a
                        className="btn btn-primary"
                        target="_blank"
                        href="/bid-calculator"
                      >
                        Bid Calculator
                      </a> */}
                      <a
                        className="btn btn-primary"
                        target="_blank"
                        href="/login"
                      >
                        Login
                      </a>
                      {/* <a
                        className="btn btn-primary"
                        target="_blank"
                        href="/marketing"
                      >
                        Marketing
                      </a> */}
                    </div>
                  </FadeIn>
                </>
              )}
            </div>
          </Paper>
        </FadeIn>
      </Screen>
    </FadeIn>
  );
};

export default Home;
