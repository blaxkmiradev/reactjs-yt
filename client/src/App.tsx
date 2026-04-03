import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    if (!url) return;

    setLoading(true);

    const link = document.createElement("a");
    link.href = `http://localhost:5000/download?url=${encodeURIComponent(url)}`;
    link.click();

    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">YouTube Downloader</h1>
        <p className="subtitle">Paste your video link below</p>

        <input
          className="input"
          placeholder="https://youtube.com/..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          className="button"
          onClick={handleDownload}
          disabled={loading}
        >
          {loading ? "Downloading..." : "Download Video"}
        </button>
      </div>
    </div>
  );
}

export default App;
