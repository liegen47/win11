"use client";
import {
  Add,
  ArrowBack,
  ArrowForward,
  ArrowUpward,
  CheckBoxOutlineBlank,
  Close,
  ExpandMore,
  Home,
  Minimize,
  NavigateNext,
  PushPin,
  Refresh,
  Search,
} from "@mui/icons-material";
import React, { useRef } from "react";
import Draggable from "react-draggable";

interface RecycleBinProps {
  isRecycleOpen: boolean;
  toggleRecycle: () => void;
  bounds: object;
}

const RecycleBin: React.FC<RecycleBinProps> = ({
  isRecycleOpen,
  toggleRecycle,
  bounds,
}) => {
  const explorerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${
        isRecycleOpen ? "" : "hidden"
      } z-30 w-full h-screen pointer-events-none absolute`}
    >
      <Draggable handle=".title-bar" nodeRef={explorerRef} bounds={bounds}>
        <div
          ref={explorerRef}
          className="window bg-black h-[39rem] w-[70.5rem] rounded-xl overflow-hidden border-neutral-700 border-[1.5px] pointer-events-auto"
        >
          <div className="title-bar">
            <div className="text-white h-9 w-full flex justify-end select-none">
              <div className="material-symbols-outlined hover:bg-neutral-800 mb-2 w-11 flex justify-center items-center text-xl">
                <Minimize fontSize="medium" />
              </div>
              <div className="material-symbols-outlined hover:bg-neutral-800 mb-2 w-11 flex justify-center items-center text-sm">
                <CheckBoxOutlineBlank fontSize="medium" />
              </div>
              <div
                className="material-symbols-outlined hover:bg-red-700 mb-2 w-12 flex justify-center items-center text-xl"
                onClick={toggleRecycle}
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
                    src={`/images/apps/recyclebin.png`}
                    alt="main icons"
                    className="w-5 h-5 mr-2"
                  />
                  Recycle Bin
                </div>
                <div className="material-symbols-outlined hover:bg-neutral-800 m-0.5 w-6 rounded-md flex justify-center items-center text-lg">
                  <Close fontSize="medium" />
                </div>
              </div>
              <div className="material-symbols-outlined absolute left-60 ml-0.5 h-7 w-8 flex justify-center hover:bg-neutral-800 rounded-md items-center text-xl">
                <Add fontSize="medium" />
              </div>
            </div>
            <div className="bg-neutral-800 w-full h-12 border-neutral-700 border-b-[1.5px] mt-1 flex">
              <div className="flex justify-around w-48 py-2">
                <div className="material-symbols-outlined font-extralight text-xl opacity-45">
                  <ArrowBack fontSize="medium" />
                </div>
                <div className="material-symbols-outlined font-extralight text-xl opacity-45">
                  <ArrowForward fontSize="medium" />
                </div>
                <div className="material-symbols-outlined font-extralight text-xl hover:bg-neutral-600 rounded-md hover:bg-opacity-50">
                  <ArrowUpward fontSize="medium" />
                </div>
                <div className="material-symbols-outlined font-extralight text-xl hover:bg-neutral-600 rounded-md hover:bg-opacity-50">
                  <Refresh fontSize="medium" />
                </div>
              </div>
              <div className="flex bg-neutral-700 bg-opacity-50 my-1.5 rounded-md items-center text-sm px-2 mx-2 flex-grow gap-2 font-extralight">
                <div className="material-symbols-outlined font-extralight">
                  <Home fontSize="medium" />
                </div>
                <div className="material-symbols-outlined font-extralight">
                  <NavigateNext fontSize="medium" />
                </div>
                <div>Recycle Bin</div>
                <div className="material-symbols-outlined font-extralight">
                  <NavigateNext fontSize="medium" />
                </div>
              </div>
              <div className="flex justify-between bg-neutral-700 bg-opacity-50 my-1.5 rounded-md items-center text-sm px-4 mr-3 w-[19.3em]">
                <div className="opacity-80">Search Recycle Bin</div>
                <div className="material-symbols-outlined font-extralight text-sm">
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
                  <div className="material-symbols-outlined text-sm">
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
                    <div className="material-symbols-outlined text-sm">
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
                    <div className="material-symbols-outlined text-sm">
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
                    <div className="material-symbols-outlined text-sm">
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
                    <div className="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                      <PushPin fontSize="small" />
                    </div>
                  </div>
                  <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                    <img
                      src="/images/folders/Documents.ico"
                      alt="documents"
                      className="w-5 h-5 mr-1"
                    />
                    Documents
                    <div className="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                      <PushPin fontSize="small" />
                    </div>
                  </div>
                  <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                    <img
                      src="/images/folders/Downloads.ico"
                      alt="downloads"
                      className="w-5 h-5 mr-1"
                    />
                    Downloads
                    <div className="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                      <PushPin fontSize="small" />
                    </div>
                  </div>
                  <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                    <img
                      src="/images/folders/Music.ico"
                      alt="music"
                      className="w-5 h-5 mr-1"
                    />
                    Music
                    <div className="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                      <PushPin fontSize="small" />
                    </div>
                  </div>
                  <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                    <img
                      src="/images/folders/Pictures.ico"
                      alt="pictures"
                      className="w-5 h-5 mr-1"
                    />
                    Pictures
                    <div className="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                      <PushPin fontSize="small" />
                    </div>
                  </div>
                  <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                    <img
                      src="/images/folders/Videos.ico"
                      alt="videos"
                      className="w-5 h-5 mr-1"
                    />
                    Videos
                    <div className="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                      <PushPin fontSize="small" />
                    </div>
                  </div>
                </div>
                <div className="mt-3.5 border-b-[1.5px] border-neutral-700 h-52">
                  <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                    <img
                      src="/images/folders/ThisPC.ico"
                      alt="this-pc"
                      className="w-5 h-5 mr-1"
                    />
                    This PC
                    <div className="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                      <PushPin fontSize="small" />
                    </div>
                  </div>
                  <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                    <img
                      src="/images/folders/Network.ico"
                      alt="network"
                      className="w-5 h-5 mr-1"
                    />
                    Network
                    <div className="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                      <PushPin fontSize="small" />
                    </div>
                  </div>
                  <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                    <img
                      src="/images/folders/RecycleBin.ico"
                      alt="recycle-bin"
                      className="w-5 h-5 mr-1"
                    />
                    Recycle Bin
                    <div className="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                      <PushPin fontSize="small" />
                    </div>
                  </div>
                </div>
                <div className="h-72 border-b-[1.5px] border-neutral-700"></div>
                <div className="mt-2 px-2 text-xs text-neutral-500">Other</div>
                <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                  <img
                    src="/images/folders/CDrive.ico"
                    alt="c-drive"
                    className="w-5 h-5 mr-1"
                  />
                  C:\
                </div>
                <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                  <img
                    src="/images/folders/DDrive.ico"
                    alt="d-drive"
                    className="w-5 h-5 mr-1"
                  />
                  D:\
                </div>
              </div>
              <div className="flex-grow bg-neutral-900">
                <div className="flex items-center justify-center h-full text-xs text-neutral-500">
                  <p>Select a folder or file to view its content</p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </Draggable>
    </div>
  );
};

export default RecycleBin;
