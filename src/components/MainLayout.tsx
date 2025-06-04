import { Box, Button, Typography } from "@mui/material";

interface MainLayoutProps {
  title: string;
  description: string;
}
export default function MainLayout(props: MainLayoutProps) {
  const { title, description } = props;

  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/b1.jpg")',
        height: "500px",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        textAlign: "center",
        paddingTop: "150px",
      }}
    >
      <Box>
        <Typography variant="h2" fontSize="80px" color="white">
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          {description}
        </Typography>
        <Button variant="outlined" color="secondary">
          Visit Channel
        </Button>
      </Box>
    </Box>
  );
}
