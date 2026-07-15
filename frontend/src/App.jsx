import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UploadBox from "./components/UploadBox";
import ChatBox from "./components/ChatBox";
import SummaryCard from "./components/SummaryCard";

function App() {

  const [summary, setSummary] = useState("");

  const [documentInfo, setDocumentInfo] = useState({
    filename: "",
    pages: 0,
    chunks: 0,
    uploaded: false,
  });

  return (

    <div className="app">

      <Navbar />

      <div className="layout">

        <Sidebar
          documentInfo={documentInfo}
        />

        <main className="main-content">

          <section id="upload">
            <UploadBox
              setSummary={setSummary}
              setDocumentInfo={setDocumentInfo}
            />
          </section>

          <section id="summary">
            <SummaryCard
              summary={summary}
            />
          </section>

          <section id="chat">
            <ChatBox />
          </section>

        </main>

      </div>

    </div>

  );

}

export default App;