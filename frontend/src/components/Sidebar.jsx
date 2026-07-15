import {
  FileText,
  MessageSquare,
  ScrollText,
  CheckCircle,
  File,
  Layers
} from "lucide-react";

export default function Sidebar({ documentInfo }) {

  function go(id) {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }

  const shortName =
    documentInfo.filename.length > 24
      ? documentInfo.filename.slice(0, 24) + "..."
      : documentInfo.filename;

  return (

    <aside className="sidebar">

      <h3>Workspace</h3>

      <ul>

        <li onClick={() => go("upload")}>
          <FileText size={20} />
          <span>Upload</span>
        </li>

        <li onClick={() => go("summary")}>
          <ScrollText size={20} />
          <span>Summary</span>
        </li>

        <li onClick={() => go("chat")}>
          <MessageSquare size={20} />
          <span>AI Chat</span>
        </li>

      </ul>

      <div className="sidebar-info">

        <h4>Current Document</h4>

        <div className="document-name">

          <div className="document-icon">
            <File size={22} />
          </div>

          <div>

            <span className="label">
              Uploaded File
            </span>

            <p>
              {shortName || "No document uploaded"}
            </p>

          </div>

        </div>

        <div className="info-row">

          <span>📄 Pages</span>

          <strong>
            {documentInfo.pages}
          </strong>

        </div>

        <div className="info-row">

          <span>🧩 Chunks</span>

          <strong>
            {documentInfo.chunks}
          </strong>

        </div>

        <div className="ready">

          <CheckCircle size={18} />

          {documentInfo.uploaded
            ? "AI READY"
            : "WAITING"}

        </div>

      </div>

    </aside>

  );

}