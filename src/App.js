
import Dashboard from './screens/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './store/store';
function App() {
  return (
    <div className="wrapper">
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" caseSensitive={false} element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  </div>
  );
}

export default App;
