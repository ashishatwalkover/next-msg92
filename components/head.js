import Head from "next/head";
import Script from "next/script";
import metaData from "@/data/metadata.json";

const Headcomp = (brawserPath) => {
  const meta = metaData[brawserPath.brawserPath];
  //console.log("meta", meta, brawserPath.brawserPath, metaData[brawserPath.brawserPath])
  let contry = brawserPath;
  return (
    <>
      <Head>
        <script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var helloConfig = {
              widgetToken: "1d31e",
              hide_launcher: false
            };`,
          }}
        />
        <script
          type="text/javascript"
          onload="initChatWidget(helloConfig, 5000)"
          src="https://control.msg91.com/app/assets/widget/chat-widget.js"
        >
          {" "}
        </script>
        <script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NWZKLRJ');`,
          }}
        />
        <title>{meta?.title}</title>
        <meta name="discription" content={meta?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="RfcBy_Lv1Ao1j0eP8UlMjJ44ik5_1YDKsRQSNFr9jEQ" />
        <link rel="icon" href="/fav.svg" />


        { brawserPath.brawserPath == '/in' &&
          <>
          <script type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "MSG91",
              "url": "https://msg91.com${brawserPath.brawserPath}",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://msg91.com/in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }`,
          }}
          />
          
          <script type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MSG91",
              "url": "https://msg91.com/in",
              "logo": "https://msg91.com/img/logo.svg",
              "sameAs": [
                "https://www.facebook.com/msg91",
                "https://twitter.com/msg91",
                "https://www.youtube.com/@WalkoverWS"
              ]
            }`,
          }}
          />
          </>
        }
        <link rel="canonical" href={`https://msg91.com${brawserPath.brawserPath}`} />
      </Head>
    </>
  );
};
export default Headcomp;
