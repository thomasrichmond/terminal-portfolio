/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react'

import { useEffect, useState } from "react";
import "./Terminal.css";
import Draggable from "react-draggable";

function Terminal(this: any) {
  // const [count, setCount] = useState(0);

  const [inputResult, setInputResult] = useState<string>();
  const [terminalHistory, setTerminalHistory] = useState<any[]>([]);
  const [terminalLocation] = useState<string>(
    "Thomas Richmond:~/terminal-portfolio"
  );
  const [isCentered, setIsCentered] = useState<boolean>(true);
  let ctrlClicked = false;
  let pClicked = false;
  const [terminalPath, setTerminalPath] = useState<string>("");
  const terminalLocationHeading = terminalPath
    ? `${terminalLocation}/${terminalPath}$`
    : `${terminalLocation}$`;

  useEffect(() => {
    document.getElementById("text-input")!.focus();
  }, []);

  const notFoundMarkup = (
    <div className="not__found">
      <p>{inputResult}: command not found.</p>
      <p>
        Type <span>'help'</span> to see available commands
      </p>
    </div>
  );

  const displayOptions = () => {
    switch (inputResult) {
      case "help":
        setTerminalPath("help");
        return (
          <ul className="result__list">
            <li>
              <span>about-me</span>: a little bit about me
            </li>
            <li>
              <span>linkedin</span>: link to my linkedin profile
            </li>
            <li>
              <span>github</span>: link to my github
            </li>
            <li>
              <span>cv</span>: download my cv
            </li>
            <li>
              <span>personal-projects</span>: my personal projects
            </li>
            <li>
              <span>skills</span>: my professional skills
            </li>
            <li>
              <span>contact</span>: lets connect
            </li>
            <li>
              <span>clear</span>: clear the terminal
            </li>
            <li>
              <span>cd .. </span>: navigate to parent directory
            </li>
          </ul>
        );

      case "cd ..":
        setTerminalPath("");
        break;

      case "ls":
        if (terminalPath === "help" || terminalPath === "") {
          return (
            <table className="ls__table">
              <td>
                <tr>help</tr>
                <tr>about-me</tr>
                <tr>linkedin</tr>
                <tr>github</tr>
                <tr>cv</tr>
                <tr>personal-projects</tr>
              </td>
              <td>
                <tr>skills</tr>
                <tr>contact</tr>
                <tr>clear</tr>
                <tr>cd ..</tr>
                <tr>show-me[0]</tr>
                <tr>show-me[1]</tr>
              </td>
            </table>
          );
        } else {
          return notFoundMarkup;
        }

      case "about-me":
        setTerminalPath("about-me");
        return (
          <p>
            Hello 👋 I'm Tom! I am a software developer, based on the east coast
            of Australia. I am a computer science graduate who majored in
            software engineering and have been building websites and digital
            experiences for the last 2 years. I am currently working at Deloitte
            Digital, as a frontend software engineer, and in my time here have
            delivered a number of greenfield and legacy uplift projects,
            primarily using Next.js, Typescript, React and Vercel. Outside of
            work, I absolutely love football ⚽, listening to music 📻 and
            keeping up to date with the wonderful world of tech 💻. I love to
            tinker in my own time, and spend my spare time learning new ways to
            become a better engineer, through creating projects like this
            terminal portfolio you are looking at now.{" "}
          </p>
        );

      case "linkedin":
        window.open("https://www.linkedin.com/in/t-ri/", "_blank");
        break;

      case "github":
        window.open("https://github.com/thomasrichmond", "_blank");
        break;

      case "cv":
        window.open("../cv.pdf", "_blank");
        break;

      case "personal-projects":
        setTerminalPath("personal-projects");
        return (
          <ol className="result__list">
            <ul>
              <li>
                {"{"}
                <ul>
                  <li>"Index" : "0"</li>
                  <li>"Name" : "FreshBeerNearMe"</li>
                  <li>"Stack" : "MERN - React Native"</li>
                  <li>
                    "Description" : "Mobile app which displays what beer is on
                    tap at a pub, and how fresh the beer is, using IoT
                    technology"
                  </li>
                  <li>
                    "Link" : "
                    <a
                      href="https://www.youtube.com/watch?v=BI6ZvcNYbB4"
                      target="_blank">
                      Marketing Video
                    </a>
                    "
                  </li>
                </ul>
                {"}"},
              </li>

              <li>
                {"{"}
                <ul>
                  <li>"Index" : "1"</li>
                  <li>"Name" : "Terminal Portfolio"</li>
                  <li>"Stack" : "React, TS, Vercel"</li>
                  <li>
                    "Description" : "My personal portfolio in the format of a
                    command line terminal."
                  </li>
                  <li>
                    "Link" : "
                    <a
                      href="https://github.com/thomasrichmond/terminal-portfolio"
                      target="_blank">
                      Github
                    </a>
                    "
                  </li>
                </ul>
                {"}"}
              </li>
            </ul>
            <p className="show__index">
              To see the project, type <span>show-me[index]</span>
            </p>
          </ol>
        );

      case "show-me[0]":
        window.open("https://www.youtube.com/watch?v=BI6ZvcNYbB4", "_blank");
        break;

      case "show-me[1]":
        window.open(
          "https://github.com/thomasrichmond/terminal-portfolio",
          "_blank"
        );
        break;

      case "skills":
        setTerminalPath("skills");
        return (
          <ol className="result__list">
            <ul>
              <li>
                {"{"}
                <ul>
                  <li>"Typescript" : "⭐⭐⭐⭐"</li>
                  <li>"React" : "⭐⭐⭐⭐"</li>
                  <li>"NextJS" : "⭐⭐⭐"</li>
                  <li>"React Native" : "⭐⭐⭐"</li>
                  <li>"GraphQL" : "⭐⭐⭐"</li>
                  <li>"API's / Axios" : "⭐⭐⭐"</li>
                  <li>"Vercel / Deployments" : "⭐⭐⭐"</li>
                  <li>"Git" : "⭐⭐⭐⭐"</li>
                </ul>
                {"}"}
              </li>
            </ul>
          </ol>
        );

      case "contact":
        window.open("mailto:tomrichmond.dev@gmail.com", "_blank");
        break;

      default:
        setTerminalPath("");
        return notFoundMarkup;
    }
  };

  const addTerminalItem = (terminalLocation: string, query: string) => {
    const terminalResult = (
      <div className="terminal__item">
        <div className="terminal__query">
          <p>{terminalLocation}</p>
          <span>{query}</span>
        </div>
        {inputResult && (
          <div className="results__container">{displayOptions()}</div>
        )}
      </div>
    );

    setTerminalHistory((previousHistory) => [
      ...previousHistory,
      terminalResult,
    ]);
  };

  const renderResults = terminalHistory.map((terminalItem, terminalIndex) => {
    return <div key={`terminal-result-${terminalIndex}`}>{terminalItem}</div>;
  });

  const centerContainerKeyUp = (event: any) => {
    if (event.key === "Control") {
      ctrlClicked = false;
    }

    if (event.key === "p") {
      pClicked = false;
    }
  };

  const centerContainerKeyDown = (event: any) => {
    if (event.key === "Control") {
      ctrlClicked = true;
    }

    if (event.key === "p") {
      pClicked = true;
    }

    if (ctrlClicked && pClicked) {
      setIsCentered(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", centerContainerKeyDown);
    document.addEventListener("keyup", centerContainerKeyUp);
    return () => {
      document.removeEventListener("keydown", centerContainerKeyDown);
      document.addEventListener("keyup", centerContainerKeyUp);
    };
  }, []);

  return (
    <Draggable
      axis="both"
      handle=".terminal__toolbar"
      defaultPosition={{ x: 0, y: 0 }}
      grid={[0.5, 0.5]}
      scale={1}
      onMouseDown={(event) => {
        console.log(event);
      }}
      onDrag={() => {
        setIsCentered(false);
      }}>
      <div className={`terminal__container ${isCentered ? "-centered" : ""}`}>
        <div className="terminal__toolbar">
          <div className="toolbar__buttons">
            <button className="close__terminal">
              <img src="../cross.svg" />
            </button>
            <button className="minimise__terminal">
              <img src="../minus.svg" />
            </button>
            <button className="maximise__terminal">
              <img src="../square.svg" />
            </button>
          </div>
          <>
            <img className="home__icon" src="../mac-home-directory.jpeg"></img>
            <h1>{terminalLocationHeading}</h1>
          </>
        </div>

        <div id="terminal__id" className="terminal__render">
          <div className="editor__input">
            <p>{terminalLocationHeading}</p>
            <input
              id="text-input"
              type="text"
              value={inputResult}
              onKeyDown={(event) => {
                if (event.key === "Enter" && inputResult) {
                  if (inputResult === "clear") {
                    setTerminalHistory([]);
                    setInputResult("");
                  } else {
                    addTerminalItem(`${terminalLocation}$`, inputResult!);
                    setInputResult("");
                  }
                }
              }}
              onChange={(event) => {
                setInputResult(event.target.value);
              }}
            />
          </div>
          <div className="terminal__history">{renderResults}</div>
        </div>
      </div>
    </Draggable>
  );
}

export default Terminal;
