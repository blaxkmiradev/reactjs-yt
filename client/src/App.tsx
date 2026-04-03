import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    if (!url) return;

    setLoading(true);

    const link = document.createElement("a");
    link.href = `http://localhost:5000/download?url=${encodeURIComponent(url)}`;
    link.setAttribute("download", "video.mp4");
    document.body.appendChild(link);
    link.click();
    link.remove();

    setLoading(false);
  };

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>YouTube Downloader</h1>

      <input
        type="text"
        placeholder="Paste YouTube URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "60%", padding: "10px" }}
      />

      <br /><br />

      <button onClick={handleDownload} disabled={loading}>
        {loading ? "Downloading..." : "Download"}
      </button>
    </div>
  );
}

export default App;
