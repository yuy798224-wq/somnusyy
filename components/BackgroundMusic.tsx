"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.62;

    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
        setBlocked(false);
      } catch {
        setBlocked(true);
      }
    };

    void tryPlay();

    const unlock = () => {
      if (audio.paused) void tryPlay();
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
        setBlocked(false);
      } catch {
        setBlocked(true);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`bgMusic ${playing ? "isPlaying" : ""}`}>
      <audio
        ref={audioRef}
        src="/audio/landing-theme.mp3"
        autoPlay
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button type="button" onClick={toggle} aria-label={playing ? "暂停背景音乐" : "播放背景音乐"}>
        <span className="musicEqualizer" aria-hidden="true"><i /><i /><i /></span>
        <span><b>{playing ? "NOW PLAYING" : blocked ? "TAP FOR SOUND" : "YUYING MIX"}</b><small>{playing ? "music on · 音乐播放中" : "click to play · 点击播放"}</small></span>
        <em>{playing ? "Ⅱ" : "▶"}</em>
      </button>
    </div>
  );
}
