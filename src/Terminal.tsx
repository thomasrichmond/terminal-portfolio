/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react'

import { useEffect, useState } from "react";
import "./Terminal.css";
import Draggable from "react-draggable";

function Terminal(this: any) {
  // const [count, setCount] = useState(0);

  const [inputResult, setInputResult] = useState<string>();
  const [terminalHistory, setTerminalHistory] = useState<any[]>([]);
  const [terminalLocation, setTerminalLocation] = useState<string>(
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
              <span>personal projects</span>: my personal projects
            </li>
            <li>
              <span>skills</span>: my professional skills
            </li>
            <li>
              <span>interests</span>: my interests
            </li>
            <li>
              <span>experience</span>: my professional experience
            </li>
            <li>
              <span>contact</span>: lets connect
            </li>
            <li>
              <span>clear</span>: clear the terminal
            </li>
            <li>
              <span>cd .. </span>: navigate to previous directory
            </li>
          </ul>
        );

      case "cd ..":
        setTerminalPath("");
        break;

      case "about-me":
        return <p>about me</p>;

      case "linkedin":
        window.open("https://www.linkedin.com/in/t-ri/", "_blank");
        break;

      case "github":
        window.open("https://github.com/thomasrichmond", "_blank");
        break;

      case "cv":
        window.open(
          "../src/assets/Thomas Richmond December 2023.pdf",
          "_blank"
        );
        break;

      default:
        setTerminalPath("");
        return (
          <div className="not__found">
            <p>{inputResult}: command not found.</p>
            <p>
              Type <span>'help'</span> to see available commands
            </p>
          </div>
        );
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
              <img src="../src/assets/cross.svg" />
            </button>
            <button className="minimise__terminal">
              <img src="../src/assets/minus.svg" />
            </button>
            <button className="maximise__terminal">
              <img src="../src/assets/square.svg" />
            </button>
          </div>
          <>
            <img
              className="home__icon"
              src="../src/assets/mac-home-directory.jpeg"></img>
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
