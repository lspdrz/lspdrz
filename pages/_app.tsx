import "../styles/tailwind.css"; // import Tailwind globally
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-lspdrz-gray text-lspdrz-pink min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
