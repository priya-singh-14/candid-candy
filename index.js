// server with url defined as localhost

import app from "./api/app.js";

const HOSTNAME = "localhost";
const PORT = 3000;

// imported app to do the actual server
app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});