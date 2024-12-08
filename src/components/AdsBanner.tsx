import { useEffect, useRef } from "react";
import Script from "next/script";

export function AdsBanner() {
  const adsLoaded = useRef(false);

  useEffect(() => {
    // Verifique se o script foi carregado
    const loadAd = () => {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        // Garante que o array adsbygoogle esteja inicializado
        window.adsbygoogle = window.adsbygoogle || [];

        // Tente empurrar um novo anúncio
        window.adsbygoogle.push({});
        adsLoaded.current = true;
      }
    };

    if (!adsLoaded.current) {
      setTimeout(loadAd, 500); // Atraso de 500ms para garantir que o script esteja carregado
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "700px", height: "200px" }}
        data-ad-client="ca-pub-7818324760901109"
        data-ad-slot="8850223156"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
