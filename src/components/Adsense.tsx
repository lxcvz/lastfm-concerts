import Script from "next/script";

export function Adsense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7818324760901109"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    ></Script>
  );
}
