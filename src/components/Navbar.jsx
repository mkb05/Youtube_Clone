import { stack } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { Stack } from "@mui/material";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
  </Stack>
);

export default Navbar;
