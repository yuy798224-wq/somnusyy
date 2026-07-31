"use client";

import { useState } from "react";

export default function DigitalAvatar() {
  const [isHeart, setIsHeart] = useState(false);

  return (
    <button
      className={`digitalAvatar ${isHeart ? "isHeart" : ""}`}
      type="button"
      aria-label={isHeart ? "恢复数字于滢的默认表情" : "点击让数字于滢眨眼比心"}
      aria-pressed={isHeart}
      onClick={() => setIsHeart((value) => !value)}
    >
      <span className="avatarScreen">
        <img
          src={isHeart ? "/decor/avatar-heart.webp" : "/decor/avatar-default.webp"}
          alt="于滢的 Y2K 像素数字形象"
        />
        {!isHeart && <span className="pixelBlink" aria-hidden="true"><i /><i /></span>}
      </span>
      <span className="avatarPrompt">{isHeart ? "HEART MODE ON ♥" : "CLICK ME · 眨眼比心"}</span>
    </button>
  );
}
