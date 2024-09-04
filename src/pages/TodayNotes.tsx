import { Header } from "../components/Header";
// import { Title } from "../components/Title";
// import { Items } from "../components/Items";
// import { AddItem } from "../components/sub-components/AddItem";
// import { Footer } from "../components/Footer";
import { CssBaseline, Container, Stack}  from "@mui/material";

export const TodayNotes = () => {
    return (
    <Container>
        <CssBaseline />
        <Header />
        <Stack>
            {/*<Title titlePage="Today" />*/}
            {/*<AddItem customPostRoute="/api/add"*/}
            {/*<Items getRequest="items" />*/}
             {/*<Footer />*/}
        </Stack>
    </Container>
    );
}