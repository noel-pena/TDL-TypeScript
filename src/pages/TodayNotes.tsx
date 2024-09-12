import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Items } from "../components/Items";
import { AddItem } from "../util/AddItem.tsx";
// import { Footer } from "../components/Footer";
import {CssBaseline, Container, Stack, ThemeProvider} from "@mui/material";
import theme from "../theme/theme.ts";

export const TodayNotes = () => {
    return (
    <Container>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Stack>
                <Title titlePage="Today" />

                <Items getRequest="items" />
                <AddItem customPostRoute="/api/add" />
                 {/*<Footer />*/}
            </Stack>
        </ThemeProvider>
    </Container>
    );
}