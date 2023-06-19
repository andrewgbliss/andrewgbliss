import { useState } from "react";
import type { NextPage } from "next";
import { Paper } from "../components/tailwind/containers";
import Image from "next/image";

const songs = new Map();
songs.set("intro", "Intro");
songs.set("just-go", "Just Go");
songs.set("the-most-important-thing", "The Most Important Thing");
songs.set("to-a-tragedy", "To A Tragedy");
songs.set("be-alright", "Alright");
songs.set("red-tied-blood", "Red Tied Blood");
songs.set("fight-back", "Fight Back");
songs.set("two-face", "Two Face");
songs.set("push", "Push");
songs.set("wasteland", "Wasteland");
songs.set("line-of", "Line Of");
songs.set("destruction", "Destruction");

const Music: NextPage = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>("intro");
  const handleClick = (key: string) => {
    setSelectedTrack(key);
    const audio = document.getElementById("audio") as HTMLAudioElement;
    const source = document.getElementById("audioSource") as HTMLSourceElement;
    if (source) {
      source.src = `/audio/${key}.mp3`;
      audio.load();
      void audio.play();
    }
  };
  return (
    <div className="flex h-screen flex-col flex-wrap font-mono">
      <div className="flex flex-grow items-center justify-center bg-black bg-[url('/img/andrewguitar.jpg')] bg-center bg-no-repeat pb-12">
        <Paper className="p-2">
          <h1 className="p-2 text-center text-3xl text-white">Latest Album</h1>
          <div className="flex justify-center gap-5 p-5">
            <div className="rounded-xl bg-white p-2">
              <ol>
                {[...songs.keys()].map((k: string) => {
                  return (
                    <li
                      key={k}
                      className={
                        selectedTrack === k
                          ? "cursor-pointer bg-black px-2 text-white"
                          : "cursor-pointer px-2 hover:bg-black hover:text-white"
                      }
                      onClick={() => handleClick(k)}
                    >
                      {songs.get(k)}
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="hidden flex-col justify-center rounded-xl bg-black  sm:flex">
              <Image src={"/img/album.jpg"} alt="" width={312} height={256} />
            </div>
          </div>
          <div className="flex justify-center p-2">
            <audio id="audio" controls>
              <source
                id="audioSource"
                src={`/audio/intro.mp3`}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Music;
