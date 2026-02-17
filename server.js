const http = require("http");
const os = require("os");

const PORT = 5000;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Server is running 🚀" }));
  }

  else if (url === "/system" && method === "GET") {
    const systemInfo = {
      platform: os.platform(),
      architecture: os.arch(),
      cpuCores: os.cpus().length,
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      uptime: os.uptime(),
      hostname: os.hostname(),
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(systemInfo));
  }

  else if (url === "/health" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "OK", uptime: process.uptime() }));
  }

  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
