import { Box, Button } from "@mui/material";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import Avatar from "@mui/material/Avatar";

export default function CreatePost() {
  return (
    <Box className="createPostContainer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingX: "8px",
          paddingY: "15px",
        }}
      >
        <Box className="profile_image">
          <Avatar alt="user_picture" src="friend1.jpg" />
        </Box>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            placeholder={"What's happening ... ?"}
            className="createPostInput"
            style={{
              flex: 1,
              padding: "20px",
              marginLeft: "5px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              marginLeft: "5px",
            }}
          >
            <Box>
              <Button
                variant="outlined"
                startIcon={<VideoFileIcon />}
                sx={{ textTransform: "none" }}
              >
                Photos/Videos
              </Button>
            </Box>
            <Button
              variant="contained"
              sx={{
                width: "60px",
                textAlign: "right",
                marginLeft: "10px",
                textTransform: "none",
                background: "#4267B2",
              }}
            >
              {" "}
              Post
            </Button>
          </Box>
        </Box>
      </Box>
      <hr className="divider" />
    </Box>
  );
}
