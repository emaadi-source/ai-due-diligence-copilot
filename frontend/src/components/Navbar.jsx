import { ShieldCheck } from "lucide-react";

export default function Navbar() {

  return (

    <header className="navbar">

      <div className="logo">

        <ShieldCheck
          size={28}
          color="#6C63FF"
        />

        <span>AI Due Diligence Copilot</span>

      </div>

      <div className="status">

        <div className="status-dot"></div>

        Local AI Running

      </div>

    </header>

  );

}