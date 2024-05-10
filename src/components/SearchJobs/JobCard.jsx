import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Typography,
  Link,
} from "@mui/material";
import styles from "./Card.module.css";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";

const JobCard = ({ data }) => {
  const {
    jobDetailsFromCompany,
    location,
    maxJdSalary,
    minJdSalary,
    minExp,
    jobRole,
    companyName,
    logoUrl,
  } = data;
  return (
    <Paper elevation={3} className={styles.paper}>
      <Card className={styles.card}>
        <CardContent
          component="div"
          sx={{ display: "flex", flexDirection: "column", rowGap: "6px" }}
        >
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
              <Avatar variant="rounded" src={logoUrl} />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: "#4D596A" }}>
                {companyName}
              </Typography>
              <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
                {jobRole} Engineer
              </Typography>
              <Typography
                variant="caption"
                sx={{ textTransform: "capitalize" }}
              >
                {location}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography component="div" className={styles.salary}>
              Estimated Salary: &#x20B9;{" "}
              {`${minJdSalary ?? "5"}-${maxJdSalary} LPA`}
            </Typography>

            <CheckBoxRoundedIcon style={{ fill: "green" }} />
          </Box>
          <Box className={styles.jobDescription}>
            <Typography>About Company:</Typography>
            <Typography variant="body2" sx={{ paddingBottom: 0.5 }}>
              {jobDetailsFromCompany}
            </Typography>
          </Box>
          <Box className={styles.viewMore}>
            <Link underline="none">View job</Link>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ color: "#4D596A" }}>
              Minimum Experience
            </Typography>
            <Typography variant="body1">{minExp ?? "2"} years</Typography>
          </Box>
          <Button className={styles.button} variant="contained">
            {" "}
            ⚡Easy Apply
          </Button>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default JobCard;
