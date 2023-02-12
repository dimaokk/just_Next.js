import Head from "next/head";
import { Header } from "../components/Header";
import styles from "../styles/Main.module.css";
import {
  AppBar,
  Box,
  Divider,
  Stack,
  Toolbar,
  Typography,
  Container,
  Menu,
  Tooltip,
  MenuItem,
  Avatar,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import { CardItem } from "../components/CardItem";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RIVERSTONE</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/images/favicon.svg"
        />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
      </Head>
      <Header />
      <main className={styles.container}>
        <Container sx={{ paddingY: "20px" }} maxWidth="xl">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((el) => (
              <Grid item>
                <CardItem
                  key={el}
                  name={"Название"}
                  desc={
                    "  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={styles.footer}>
        <Box></Box>
      </footer>
    </div>
  );
}
