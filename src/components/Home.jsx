import { Box, Link as LinkMaterialUi, List, ListItem, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography variant="h2" align="center">
        Material UI + Redux Study
      </Typography>
      <List>
        <ListItem alignItems="center">
          <Link component={LinkMaterialUi} to="/box-study">
            Box Study
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
