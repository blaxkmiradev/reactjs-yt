import express from "express";
import cors from "cors";
import ytdl from "ytdl-core";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/download", async (req, res) => {
  try {
    const url = req.query.url as string;

    if (!url || !ytdl.validateURL(url)) {
      return res.status(400).send("Invalid YouTube URL");
    }

    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title.replace(/[^\w\s]/gi, "");

    res.header("Content-Disposition", `attachment; filename="${title}.mp4"`);

    ytdl(url, { quality: "highestvideo" }).pipe(res);
  } catch (error) {
    res.status(500).send("Error downloading video");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
