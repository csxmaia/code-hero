import { Provider } from "react-redux";

import Layout from './layout';
import HeroList from "./pages/Hero/List";
import store from './store';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <HeroList/>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
