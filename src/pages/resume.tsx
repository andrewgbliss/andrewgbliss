import type { NextPage } from "next";
import { Grid, Box, Divider, Link, Container } from "@mui/material";
import Theme from "../components/mui/theme/Theme";
import { Paper, List, Chips } from "../components/mui/containers";
import Gravatar from "../components/img/Gravatar";
import { H4, H6, Caption, Body2 } from "../components/mui/typography";
import { resume } from "../lib/resume";
import {
  Home as HomeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  DateRange as DateRangeIcon,
  Link as LinkIcon,
  Circle as CircleIcon,
  School as SchoolIcon,
} from "@mui/icons-material";

const Resume: NextPage = () => {
  return (
    <Theme>
      <Box
        py={2}
        sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5} md={4} lg={3}>
              <Paper>
                <Box
                  textAlign="center"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Gravatar email={resume.email} size={256} />
                </Box>
                <H4 py={1} textAlign="center">
                  {resume.name}
                </H4>
                <Caption color="textSecondary" gutterBottom>
                  {resume.bio}
                </Caption>
                <List
                  dense
                  items={[
                    {
                      icon: <HomeIcon />,
                      text: (
                        <Caption>
                          {resume.address.city}, {resume.address.state}
                        </Caption>
                      ),
                    },
                    {
                      icon: <EmailIcon />,
                      text: <Caption>{resume.email}</Caption>,
                      copyText: resume.email,
                    },
                    {
                      icon: <PhoneIcon />,
                      text: <Caption>{resume.phone}</Caption>,
                      copyText: resume.phone,
                    },
                  ]}
                />
                <Divider />
                <H6 pt={2}>Education</H6>
                <List
                  dense
                  items={[
                    {
                      icon: <SchoolIcon />,
                      text: (
                        <>
                          <Box>
                            <Body2>{resume.education.school}</Body2>
                          </Box>
                          <Box>
                            <Caption>{resume.education.name}</Caption>
                          </Box>
                          <Box>
                            <Caption>
                              {resume.education.from} to {resume.education.to}
                            </Caption>
                          </Box>
                        </>
                      ),
                    },
                  ]}
                />
                <Divider />
                <H6 pt={2}>Links</H6>
                <List
                  dense
                  items={resume.links.map((href) => {
                    return {
                      icon: <LinkIcon />,
                      text: (
                        <Caption>
                          <Link
                            target="_blank"
                            rel="noreferrer"
                            color="inherit"
                            href={href}
                            underline="hover"
                          >
                            {href}
                          </Link>
                        </Caption>
                      ),
                    };
                  })}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={7} md={8} lg={9}>
              <Paper>
                <H4 gutterBottom>Work Experience</H4>
                {resume.workExperience.map((workExperience, i: number) => {
                  return (
                    <Box pb={2} key={i}>
                      <H6>
                        {workExperience.title} / {workExperience.company}
                      </H6>
                      <List
                        dense
                        items={[
                          {
                            icon: <DateRangeIcon />,
                            text: `${workExperience.from} - ${workExperience.to}`,
                          },
                        ]}
                      />
                      <List
                        dense
                        items={workExperience.bulletpoints.map(
                          (bulletpoint) => {
                            return {
                              icon: <CircleIcon fontSize="small" />,
                              text: (
                                <Body2 color="textSecondary">
                                  {bulletpoint}
                                </Body2>
                              ),
                            };
                          }
                        )}
                      />
                      <Chips chips={workExperience.skills} />
                      {i < resume.workExperience.length - 1 && (
                        <Divider sx={{ m: 0 }} />
                      )}
                    </Box>
                  );
                })}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Theme>
  );
};

export default Resume;
