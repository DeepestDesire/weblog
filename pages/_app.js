import '../styles/global.css';
// eslint-disable-next-line react/prop-types
export default function App({Component, pageProps}) {
  return  <div id="app-container">
    <Component {...pageProps}></Component>
  </div>;
}
