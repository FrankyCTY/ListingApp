const env = "dev";
const Url = env === "dev" ? `http://localhost:6001/api/v1` : "/api/v1";

export default Url;