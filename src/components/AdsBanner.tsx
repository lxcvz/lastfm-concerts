"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function AdsBanner() {
  useEffect(() => {
    const loadAd = () => {
      if (typeof window !== "undefined") {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      }
    };

    loadAd();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "700px", height: "200px" }}
      data-ad-client="ca-pub-7818324760901109"
      data-ad-slot="8850223156"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
