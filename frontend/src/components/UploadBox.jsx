import { useRef, useState } from "react";
import { Upload, FileText, CheckCircle2 } from "lucide-react";
import api from "../services/api";

export default function UploadBox({
  setSummary,
  setDocumentInfo,
}) {

  const inputRef = useRef();

  const [status, setStatus] = useState("Upload a PDF");
  const [fileName, setFileName] = useState("");

  async function uploadFile(file) {

    if (!file) return;

    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);

    try {

      setStatus("Uploading...");

      await api.post("/upload/", formData);

      setStatus("Parsing document...");

      const parseResponse = await api.post("/parse/");

      setSummary(parseResponse.data.summary);

      setDocumentInfo({
        filename: parseResponse.data.filename,
        pages: parseResponse.data.pages,
        chunks: parseResponse.data.chunks_indexed,
        uploaded: true,
      });

      setStatus("Ready ✅");

    } catch (error) {

      console.error(error);

      if (error.response) {
        console.log(error.response.data);
      }

      setStatus("Upload Failed ❌");

    }

  }

  return (

    <div className="upload-card">

      <div
        className="drop-zone"
        onClick={() => inputRef.current.click()}
      >

        <Upload
          size={60}
          color="#6C63FF"
        />

        <h2>Upload Document</h2>

        <p>
          Click anywhere to upload your PDF
        </p>

        <input
          hidden
          ref={inputRef}
          type="file"
          accept=".pdf"
          onChange={(e) => uploadFile(e.target.files[0])}
        />

      </div>

      <div className="file-card">

        <FileText size={20} />

        <span>
          {fileName || "No file selected"}
        </span>

        {status === "Ready ✅" && (

          <CheckCircle2
            color="#22C55E"
          />

        )}

      </div>

      <div className="status">

        {status}

      </div>

    </div>

  );

}