import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state) => state.user);

  // Ensure user data is always defined
  const _id = user?._id || "";
  const picturePath = user?.picturePath || "";

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/* LEFT SIDEBAR */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {_id && <UserWidget userId={_id} picturePath={picturePath} />}
        </Box>

        {/* MAIN CONTENT */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          {_id && <PostsWidget userId={_id} />}
        </Box>

        {/* RIGHT SIDEBAR */}
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            {_id && <FriendListWidget userId={_id} />}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
