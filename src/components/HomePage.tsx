import { Box } from "@mui/material";
import React from "react";
import MainLayout from "./MainLayout";

export default function HomePage() {
  return (
    <Box>
      <MainLayout
        title="Digital Development"
        description="Teaching programming with a unique method!
                    From now you can watch and learn while having fun!"
      />
    </Box>
  );
}
