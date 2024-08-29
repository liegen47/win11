import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import AboutMe from "../apps/AboutMe";
import {
  Add,
  ArrowBack,
  ArrowForward,
  ArrowUpward,
  CheckBoxOutlineBlank,
  ChevronRight,
  Close,
  ExpandMore,
  Favorite,
  Home,
  Lightbulb,
  Minimize,
  NavigateNext,
  PushPin,
  Refresh,
  Search,
} from "@mui/icons-material";

interface ExplorerProps {
  isExplorerOpen: boolean;
  toggleExplorer: (input: any) => void;
  aboutMe: boolean | null;
  bounds: string | object;
}

const Explorer: React.FC<ExplorerProps> = ({
  isExplorerOpen,
  toggleExplorer,
  aboutMe,
  bounds,
}) => {
  const [page, setPage] = useState<string>("About Me");
  const [icon, setIcon] = useState<string | null>(null);
  const explorerRef = useRef<HTMLDivElement | null>(null);
  const [expandedDiv, setExpandedDiv] = useState<number>(0);
  const [isBold, setIsBold] = useState(false);

  const handleDivClick = (divNumber: number) => {
    setExpandedDiv(divNumber === expandedDiv ? 0 : divNumber);
  };

  useEffect(() => {
    if (aboutMe === true) setIcon("home");
    else if (page === "Education") setIcon("edu");
    else if (page === "Skills") setIcon("skills");
    else if (page === "My Stuffs") setIcon("projects");
    else if (page === "Resume") setIcon("resume");
    else setIcon("me");
  }, [page, aboutMe]);

  return (
    <div
      className={`${
        isExplorerOpen ? "" : "hidden"
      } z-30 w-full h-screen pointer-events-none absolute`}
    >
      <Draggable handle=".title-bar" nodeRef={explorerRef} bounds={bounds}>
        <div
          ref={explorerRef}
          className="window bg-black h-[39rem] w-[70.5rem] rounded-xl overflow-hidden border-neutral-700 border-[1.5px] pointer-events-auto"
        >
          <div className="title-bar">
            <div className="text-white h-9 w-full flex justify-end select-none">
              <div className=" hover:bg-neutral-800 mb-2 w-11 flex justify-center items-center text-xl">
                <Minimize fontSize="medium" />
              </div>
              <div className=" hover:bg-neutral-800 mb-2 w-11 flex justify-center items-center text-sm">
                <CheckBoxOutlineBlank fontSize="medium" />
              </div>
              <div
                className=" hover:bg-red-700 mb-2 w-12 flex justify-center items-center text-xl"
                onClick={toggleExplorer}
              >
                <Close fontSize="medium" />
              </div>
            </div>
          </div>
          <div className="content text-white select-none">
            <div className="absolute bg-neutral-800 top-[6.5px] h-[2em] left-[6px] w-60 rounded-t-lg flex">
              <div className="flex justify-between items-center w-full">
                <div className="pl-2 text-xs flex">
                  <img
                    src={`/images/folders/${icon}.png`}
                    alt="main icons"
                    className="w-5 h-5 mr-2"
                  />
                  {aboutMe === true ? "Home" : page}
                </div>
                <div className=" hover:bg-neutral-800 m-0.5 w-6 rounded-md flex justify-center items-center text-lg">
                  <Close fontSize="medium" />
                </div>
              </div>
              <div className=" absolute left-60 ml-0.5 h-7 w-8 flex justify-center hover:bg-neutral-800 rounded-md items-center text-xl">
                <Add fontSize="medium" />
              </div>
            </div>
            <div className="bg-neutral-800 w-full h-12 border-neutral-700 border-b-[1.5px] mt-1 flex">
              <div className="flex justify-around w-48 py-2">
                <button
                  className={` font-extralight text-xl hover:bg-neutral-600 rounded-md hover:bg-opacity-50 ${
                    isBold ? "opacity-45" : "font-bold"
                  }`}
                  onClick={() => handleDivClick(0)}
                >
                  <ArrowBack fontSize="medium" />
                </button>
                <div className=" font-extralight text-xl opacity-45">
                  <ArrowForward fontSize="medium" />
                </div>
                <div className=" font-extralight text-xl hover:bg-neutral-600 rounded-md hover:bg-opacity-50">
                  <ArrowUpward fontSize="medium" />
                </div>
                <div className=" font-extralight text-xl hover:bg-neutral-600 rounded-md hover:bg-opacity-50">
                  <Refresh fontSize="medium" />
                </div>
              </div>
              <div className="flex bg-neutral-700 bg-opacity-50 my-1.5 rounded-md items-center text-sm px-2 mx-2 flex-grow gap-2 font-extralight">
                <div className=" font-extralight">
                  <Home fontSize="medium" />
                </div>
                <div className=" font-extralight">
                  <NavigateNext fontSize="medium" />
                </div>
                <div> {aboutMe === true ? "Home" : page}</div>
                <div className=" font-extralight">
                  <NavigateNext fontSize="medium" />
                </div>
                <div>
                  {expandedDiv === 1 && "Technical Skills"}
                  {expandedDiv === 2 && "Soft Skills"}
                  {expandedDiv === 3 && "Design Skills"}
                </div>
              </div>
              <div className="flex justify-between bg-neutral-700 bg-opacity-50 my-1.5 rounded-md items-center text-sm px-4 mr-3 w-[19.3em]">
                <div className="opacity-80">
                  Search {aboutMe === true ? "Home" : page}
                </div>
                <div className=" font-extralight text-sm">
                  <Search fontSize="medium" />
                </div>
              </div>
            </div>
            <div className="bg-neutral-900 w-full h-[3.4rem] border-neutral-700 border-b-[1.5px] flex justify-between">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-24 h-full text-xs gap-1 border-neutral-700 border-r-[1.5px] opacity-45">
                  <img
                    src="/images/options/new.png"
                    alt="new"
                    className="w-5 h-5"
                  />
                  New
                  <div className=" text-sm">
                    <ExpandMore fontSize="medium" />
                  </div>
                </div>
                <div className="flex h-full w-72 justify-around items-center border-neutral-700 border-r-[1.5px] opacity-45">
                  <img
                    src="/images/options/cut.png"
                    alt="cut"
                    className="h-5 w-5"
                  />
                  <img
                    src="/images/options/copy.png"
                    alt="copy"
                    className="h-5 w-5"
                  />
                  <img
                    src="/images/options/paste.png"
                    alt="paste"
                    className="h-7 w-7"
                  />
                  <img
                    src="/images/options/rename.png"
                    alt="rename"
                    className="h-5 w-5"
                  />
                  <img
                    src="/images/options/share.png"
                    alt="share"
                    className="h-5 w-5"
                  />
                  <img
                    src="/images/options/delete.png"
                    alt="delete"
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex h-full items-center w-72 justify-around border-neutral-700 border-r-[1.5px]">
                  <div className="flex items-center justify-center h-full text-xs gap-1 opacity-45">
                    <img
                      src="/images/options/sort.png"
                      alt="sort"
                      className="w-5 h-5"
                    />
                    Sort
                    <div className=" text-sm">
                      <ExpandMore fontSize="medium" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-full text-xs gap-1 opacity-80">
                    <img
                      src="/images/options/view.png"
                      alt="view"
                      className="w-5 h-5"
                    />
                    View
                    <div className=" text-sm">
                      <ExpandMore fontSize="medium" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-full text-xs gap-1 opacity-80">
                    <img
                      src="/images/options/filter.png"
                      alt="filter"
                      className="w-5 h-5"
                    />
                    Filter
                    <div className=" text-sm">
                      <ExpandMore fontSize="medium" />
                    </div>
                  </div>
                </div>
                <img
                  src="/images/options/dots.png"
                  alt="dots"
                  className="w-3.5 h-3.5 ml-4"
                />
              </div>
              <div className="flex items-center mr-8 text-xs">
                <img
                  src="/images/options/details.png"
                  alt="details"
                  className="w-5 h-5 mr-1"
                />
                Details
              </div>
            </div>
            {aboutMe === true ? (
              <>
                <div className="flex flex-row h-full bg-neutral-900">
                  <div className="w-40 h-[100vh] pt-2 border-neutral-700 border-r-[1.5px] px-[2px]">
                    <div className="border-b-[1.5px] border-neutral-700 h-20">
                      <div className="flex items-center justify-center mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/folders/home.png"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Home
                      </div>
                      <div className="flex items-center justify-center mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/folders/gallery.png"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Gallery
                      </div>
                    </div>
                    <div className="mt-3.5 border-b-[1.5px] border-neutral-700 h-52">
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/folders/Desktop.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Desktop
                        <div className=" absolute right-1 text-sm opacity-40 rotate-45">
                          <PushPin fontSize="small" />
                        </div>
                      </div>
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/folders/Downloads.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Downloads
                        <div className=" absolute right-1 text-sm opacity-40 rotate-45">
                          <PushPin fontSize="small" />
                        </div>
                      </div>
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/folders/Documents.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        <div className=" absolute right-1 text-sm opacity-40 rotate-45">
                          <PushPin fontSize="small" />
                        </div>
                        Documents
                      </div>
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/folders/Photos.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Pictures
                        <div className=" absolute right-1 text-sm opacity-40 rotate-45">
                          <PushPin fontSize="small" />
                        </div>
                      </div>
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/folders/Music.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Music
                        <div className=" absolute right-1 text-sm opacity-40 rotate-45">
                          <PushPin fontSize="small" />
                        </div>
                      </div>
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/folders/Videos.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Videos
                        <div className=" absolute right-1 text-sm opacity-40 rotate-45">
                          <PushPin fontSize="small" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3.5 border-b-[1.5px] border-neutral-700 h-52">
                      <div className="flex items-center pl-12 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm relative">
                        <img
                          src="/images/folders/Computer.ico"
                          alt="details"
                          className="w-4 h-4 mr-1"
                        />
                        This PC
                        <div className=" absolute left-2 text-lg opacity-30">
                          <ChevronRight fontSize="medium" />
                        </div>
                      </div>
                      <div className="flex items-center pl-12 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm relative">
                        <img
                          src="/images/folders/Network.ico"
                          alt="details"
                          className="w-4 h-4 mr-1"
                        />
                        Network
                        <div className=" absolute left-2 text-lg opacity-30">
                          <ChevronRight fontSize="medium" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-0 ml-5 mt-2">
                    <div className="flex items-center hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                      <div className=" text-2xl font-extralight">
                        <ExpandMore fontSize="medium" />
                      </div>
                      <div className="text-xs ml-3 mr-4">Quick access</div>
                    </div>
                    <div className="h-32 w-[87vh] mr-32 grid grid-cols-3 grid-rows-2">
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/folders/Desktop.ico"
                          alt="Desktop"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Desktop
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>
                            <PushPin
                              fontSize="inherit"
                              className="text-sm opacity-40 rotate-45"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/folders/Downloads.ico"
                          alt="Downloads"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Downloads
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>
                            <PushPin
                              fontSize="inherit"
                              className="text-sm opacity-40 rotate-45"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/folders/Documents.ico"
                          alt="Documents"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Documents
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>
                            <PushPin
                              fontSize="inherit"
                              className="text-sm opacity-40 rotate-45"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/folders/Photos.ico"
                          alt="Pictures"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Pictures
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>
                            <PushPin
                              fontSize="inherit"
                              className="text-sm opacity-40 rotate-45"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/folders/Music.ico"
                          alt="Music"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Music
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>
                            <PushPin
                              fontSize="inherit"
                              className="text-sm opacity-40 rotate-45"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/folders/Videos.ico"
                          alt="Videos"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Videos
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>

                            <PushPin
                              fontSize="inherit"
                              className="text-sm opacity-40 rotate-45"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                      <div className=" text-2xl font-extralight">
                        <ExpandMore fontSize="medium" />
                      </div>
                      <div className="text-xs ml-3 mr-4">Favourites</div>
                    </div>
                    <div className="text-xs m-2 ml-9 opacity-50 font-light">
                      After you&#39;ve favourited some files, we&#39;ll show
                      theme here.
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 h-5 bg-neutral-900 w-full text-xs py-1 pl-2">
                  <div className="flex items-center justify-center w-16 border-r-[1.5px] h-full text-xs font-extralight">
                    6 items
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-row h-full bg-neutral-900">
                <div className="w-40 h-[100vh] pt-2 border-neutral-700 border-r-[1.5px] px-[2px]">
                  <div
                    className={`flex items-center pl-2.5 mr-8 text-xs w-full h-8 rounded-sm ${
                      page === "About Me"
                        ? "bg-gray-200 bg-opacity-80 text-neutral-900"
                        : "hover:bg-neutral-700 text-white"
                    }`}
                    onClick={() => {
                      setPage("About Me");
                    }}
                  >
                    <img
                      src="/images/folders/me.png"
                      alt="me"
                      className="w-5 h-5 mr-2.5"
                    />
                    About Me
                  </div>
                  <div
                    className={`flex items-center pl-2.5 mr-8 text-xs w-full h-8 rounded-sm ${
                      page === "Education"
                        ? "bg-gray-200 bg-opacity-80 text-neutral-900"
                        : "hover:bg-neutral-700 text-white"
                    }`}
                    onClick={() => {
                      setPage("Education");
                    }}
                  >
                    <img
                      src="/images/folders/edu.png"
                      alt="edu"
                      className="w-5 h-5 mr-2.5"
                    />
                    Education
                  </div>
                  <div
                    className={`flex items-center pl-2.5 mr-8 text-xs w-full h-8 rounded-sm ${
                      page === "Skills"
                        ? "bg-gray-200 bg-opacity-80 text-neutral-900"
                        : "hover:bg-neutral-700 text-white"
                    }`}
                    onClick={() => {
                      setPage("Skills");
                    }}
                  >
                    <img
                      src="/images/folders/skills.png"
                      alt="skills"
                      className="w-5 h-5 mr-2.5"
                    />
                    Skills
                  </div>
                  <div
                    className={`flex items-center pl-2.5 mr-8 text-xs w-full h-8 rounded-sm ${
                      page === "My Stuffs"
                        ? "bg-gray-200 bg-opacity-80 text-neutral-900"
                        : "hover:bg-neutral-700 text-white"
                    }`}
                    onClick={() => {
                      setPage("My Stuffs");
                    }}
                  >
                    <img
                      src="/images/folders/projects.png"
                      alt="My Stuffs"
                      className="w-5 h-5 mr-2.5"
                    />
                    My Stuffs
                  </div>
                  <div
                    className={`flex items-center pl-2.5 mr-8 text-xs w-full h-8 rounded-sm ${
                      page === "Resume"
                        ? "bg-gray-200 bg-opacity-80 text-neutral-900"
                        : "hover:bg-neutral-700 text-white"
                    }`}
                    onClick={() => {
                      setPage("Resume");
                    }}
                  >
                    <img
                      src="/images/folders/resume.png"
                      alt="Resume"
                      className="w-5 h-5 mr-2.5"
                    />
                    Resume
                  </div>
                </div>
                <AboutMe
                  page={page}
                  expandedDiv={expandedDiv}
                  handleDivClick={handleDivClick}
                />
              </div>
            )}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Explorer;
