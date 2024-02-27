import "./App2.css";

import Footer from "./components/Footer";
import Bubbleslist from "./components/Bubblelist";
import Header from "./components/Header";
import { ChatProvider } from "./ChatProvider.jsx";

function App() {
  return (
    <ChatProvider>
      <div className="background">
        <Header />

        <Bubbleslist></Bubbleslist>
        <Footer></Footer>
      </div>
    </ChatProvider>
  );
}

export default App;
