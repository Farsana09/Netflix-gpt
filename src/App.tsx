import { Provider } from "react-redux";
import Browse from "./components/browse/Browse";
import Login from "./components/Login";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, // ✅ wrapper
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

function App() {
  const { i18n } = useTranslation(); // ✅ reactive i18n
  useEffect(() => {
    //i18n.dir(i18n.language) - this line internally handles the dir
    //Internally, i18next has a built-in list of RTL languages like ["ar", "he", "fa", "ur"]
    //for most cases, nothing extra needed.
    const dir = i18n.dir(i18n.language); // 'ltr' or 'rtl'
    document.documentElement.dir = dir;

    // optional: set lang attribute too
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);
  //i18n (object reference) → stable
  //i18n.language → changes when language changes
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
