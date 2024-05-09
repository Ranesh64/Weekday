import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import styles from "./Card.module.css";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";

const JobCard = () => {
  return (
    <Paper elevation={2} className={styles.paper}>
      <Card className={styles.card}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                padding: 0.5,
                border: 1,
                borderRadius: 2.5,
                borderColor: "#E6E6E6",
              }}
            >
              <Typography paragraph sx={{ fontSize: 10, marginBottom: 0 }}>
                ⌛Posted a day ago
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", columnGap: 2, alignItems: "center" }}>
            <Box>
              <Avatar variant="rounded" />
            </Box>
            <Box>
              <Typography sx={{ fontSize: 12 }}>Company name</Typography>
              <Typography sx={{ fontSize: 16 }}>Position</Typography>
              <Typography sx={{ fontSize: 12 }}>Location</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography component="div" className={styles.salary}>
              Estimated Salary: 10-20 LPA{" "}
            </Typography>

            <CheckBoxRoundedIcon style={{ fill: "green" }} />
          </Box>
          <Box className={styles.jobDescription}>
            <Typography>About Company:</Typography>
            <Typography variant="body2" sx={{ paddingBottom: 0.5 }}>
              This is a description of the card content. You can add more text
              or other components here. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam sunt aperiam eius, distinctio, aspernatur
              illo tempora delectus molestias dolorem praesentium deleniti
              voluptates molestiae, pariatur ut accusamus quo vel error
              eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, amet recusandae laboriosam distinctio facere odit
              reiciendis nobis earum assumenda dolorem?
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption">Minimum Experience</Typography>
            <Typography sx={{ fontSize: 14 }}>3 years</Typography>
          </Box>
        </CardContent>
        <Button
          className={styles.button}
          variant="contained"
          startIcon={<BoltRoundedIcon />}
        >
          {" "}
          Easy Apply
        </Button>
      </Card>
    </Paper>
  );
};

export default JobCard;
