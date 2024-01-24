import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { HeaderNew } from "./theme2/HomePage";
import Footer from "./theme2/Footer";
import TableView from "./TableView";
import { textDB } from "./App";
import { collection, getDocs, query } from "firebase/firestore";
import ReactGA from "react-ga4";

export default function DashBoard() {
  const [skills, setSkills] = useState<any>([]);
  const [events, setEvents] = useState<any>([]);
  const [contacts, setContacts] = useState<any>([]);

  useEffect(() => {
    ReactGA._gaCommandSendPageview(window.location.pathname, "");
  }, []);

  const getData = async () => {
    const collections = ["Events", "contact", "skills"];

    try {
      for (const coll of collections) {
        const valRef = collection(textDB, coll);
        const orderedQuery = query(valRef);
        const dataDB = await getDocs(orderedQuery);

        console.log(
          `Data for ${coll}:`,
          dataDB.docs.map((doc) => doc.data())
        );

        let tempList = dataDB.docs.map((doc) => ({
          id: doc.id,
          ...doc.data().contactInfo,
          createdAt: doc.data().contactInfo.createdAt.toDate().toLocaleString(),
        }));

        console.log(`The tempList for ${coll} = `, tempList);

        // Sort tempList based on the document ID (which is a timestamp)
        tempList.sort((a, b) => b.id.localeCompare(a.id));

        if (coll === "Events") {
          setEvents(tempList);
        } else if (coll === "contact") {
          setContacts(tempList);
        } else if (coll === "skills") {
          setSkills(tempList);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HeaderNew />

      <Box
        sx={{
          mx: "10%",
          mt: { xs: "0", md: "0" },
          mb: { xs: "0", md: "0" },
          py: 4,
        }}
      >
        <BasicTabs skills={skills} events={events} contacts={contacts} />
      </Box>

      <Footer />
    </>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs(props: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { skills, events, contacts } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Skills" {...a11yProps(0)} />
          <Tab label="Events" {...a11yProps(1)} />
          <Tab label="Contact us" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <TableView data={skills} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <TableView data={events} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <TableView data={contacts} />
      </CustomTabPanel>
    </Box>
  );
}
