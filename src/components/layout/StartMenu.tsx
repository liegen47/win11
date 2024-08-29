import React from "react";
import { generateInitials } from "../users/UserProfile";
import Power from "../utilities/Power";

interface StartMenuProps {
  toggleStart: () => void;
  isStartOpen: boolean;
  setInput: (input: string) => void;
  setIsSleeping: (isSleeping: boolean) => void;
  setActionType: (actionType: string) => void;
  name: string;
}

const StartMenu: React.FC<StartMenuProps> = ({
  toggleStart,
  isStartOpen,
  setInput,
  setIsSleeping,
  setActionType,
  name,
}) => {
  return (
    <section
      id="w11-start-section"
      className={`z-50 bg-neutral-800 ${
        isStartOpen ? "bottom-16" : "bottom-[-800px]"
      }`}
    >
      <div className="input-div-start">
        <input
          type="text"
          id="cerca-input-start"
          placeholder="Search for apps, settings, and documents"
          disabled={!isStartOpen}
        />
      </div>
      <div className="padding-start">
        <div id="apps-container">
          <div className="app-container-header">
            <span>Pinned</span>
            <div>
              <span>All apps</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="rgba(0, 0, 0, 1)"
              >
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            </div>
          </div>
          <div id="second-app-container">
            {/* Repeated app-icon divs */}
            {[
              {
                src: "https://laaouatni.github.io/w11CSS/images/edge-icon.png",
                alt: "edge icon",
                text: "Edge",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/word-icon.png",
                alt: "word icon",
                text: "Word",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/excel-icon.png",
                alt: "excel icon",
                text: "Excel",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/powerpoint-icon.png",
                alt: "powerpoint icon",
                text: "Powerpoint",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/ms-office.ico",
                alt: "office icon microsoft",
                text: "Office",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/calendar-icon.png",
                alt: "calendar icon",
                text: "Calendar",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/ms-store-icon.png",
                alt: "microsoft store icon",
                text: "Microsoft Store",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/ms-foto-icon.ico",
                alt: "galleria icon by microsoft 11",
                text: "Photos",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/ms-video-icon.ico",
                alt: "microsoft video icon by microsoft",
                text: "Film & TV",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/Paint-2D.ico",
                alt: "paint 2d icon by microsoft",
                text: "Paint",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/Paint-3D.ico",
                alt: "paint 3d icon by microsoft",
                text: "Paint 3D",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/Whiteboard.ico",
                alt: "whiteboard icon by microsoft",
                text: "WhiteBoard",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/ms-impostazioni-icon.ico",
                alt: "impostazioni icon by microsoft",
                text: "Settings",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/ms-skype.ico",
                alt: "skype icon by microsoft",
                text: "Skype",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/vs-code.ico",
                alt: "vs code icon by microsoft",
                text: "VS code",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/vs-normal.ico",
                alt: "visual Studio normal icon by microsoft",
                text: "Visual Studio",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/ms-file-explorer.ico",
                alt: "file Explorer icon by microsoft",
                text: "File Explorer",
              },
            ].map(({ src, alt, text }) => (
              <div className="app-icon" key={text}>
                <img src={src} alt={alt} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div id="article-div">
          <div className="app-container-header">
            <span>Recommended</span>
            <div>
              <span>More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="rgba(0, 0, 0, 1)"
              >
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            </div>
          </div>
          <div id="article-container">
            {/* Repeated recent divs */}
            {[
              {
                src: "https://laaouatni.github.io/w11CSS/images/vs-code.ico",
                alt: "VS code icon",
                text1: "VS Code",
                text2: "Recently added",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/vs-normal.ico",
                alt: "visual studio icon",
                text1: "Visual Studio",
                text2: "Recently added",
              },
              {
                src: "https://laaouatni.github.io/w11CSS/images/Photos-folder.ico",
                alt: "folder microsoft",
                text1: "Study Materials",
                text2: "30 minutes ago",
              },
            ].map(({ src, alt, text1, text2 }) => (
              <div className="recent" key={text1}>
                <div>
                  <img src={src} alt={alt} />
                </div>
                <div>
                  <div>{text1}</div>
                  <div>{text2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="footer-start-section">
        <div className="nome-utente-start-section">
          <div className="avatar placeholder">
            <div className="bg-blue-500 text-white rounded-full w-8">
              {name && (
                <div className="text-white text-xl font-normal">
                  {generateInitials(name)}
                </div>
              )}
            </div>
          </div>
          <div>{name ? <div className="capitalize">{name}</div> : "User"}</div>
        </div>
        <div className="spegni-pc-start-section">
          <Power
            toggleStart={toggleStart}
            setInput={setInput}
            setIsSleeping={setIsSleeping}
            setActionType={setActionType}
          />
        </div>
      </div>
    </section>
  );
};

export default StartMenu;
