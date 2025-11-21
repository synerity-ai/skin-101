import { Helmet } from 'react-helmet-async';

const Analytics = () => {
  const gtmId = import.meta.env.VITE_GTM_ID;
  const gaId = import.meta.env.VITE_GA_ID;

  if (!gtmId && !gaId) {
    return null;
  }

  return (
    <>
      {gtmId ? (
        <Helmet>
          <script>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </script>
          <noscript>{`<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}</noscript>
        </Helmet>
      ) : null}
      {gaId ? (
        <Helmet>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </script>
        </Helmet>
      ) : null}
    </>
  );
};

export default Analytics;


