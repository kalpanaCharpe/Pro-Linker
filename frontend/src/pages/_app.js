import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/config/redux/store"; 
import { ToastContainer } from "react-toastify";    // <-- Import ToastContainer
import "react-toastify/dist/ReactToastify.css";      // <-- Import Toast styles

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"    // Toast ki position
          autoClose={2000}          // 2 second me khud close ho jaaye
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"             // Light ya dark theme
        />
      </>
    </Provider>
  );
}
