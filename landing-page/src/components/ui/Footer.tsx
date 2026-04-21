import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        padding: "1rem",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "0.5rem",
      }}
    >
      <Typography sx={{ fontWeight: 600 }}>
        Valorant Patch Bot {new Date().getFullYear()}
      </Typography>

      <Link
        href="https://github.com/AustinFWK/Bot-Landing-Page"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "default" }}
      >
        <GitHubIcon />
      </Link>
    </Box>
  );
}
