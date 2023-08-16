import '../styles/global.css';
// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-1 flex-col">
      <Component {...pageProps}></Component>
    </div>
  );
}
