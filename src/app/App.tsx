import { Provider } from "react-redux";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import { Store } from "./redux/store";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <Provider store={Store}>
      <AuthProvider>
        <Layout>
          <Routes />
        </Layout>
      </AuthProvider>
    </Provider>
  );
};

export default App;
