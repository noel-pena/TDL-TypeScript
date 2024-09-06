/* eslint-disable react/prop-types */
import { Grid2 } from "@mui/material";

export const Title = ({ titlePage: String }) => {
    return (
        <Grid2
            container
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Grid2
                container
                sx={{
                    pt: 2,
                    pb: 4,
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    fontWeight: 200,
                    lineHeight: "0",
                }}
            >
                <p
                    style={{
                        fontWeight: 500,
                        fontSize: "2.5rem",
                        letterSpacing: "0.5rem",
                        paddingLeft: "12px",
                        color: "rgb(230, 230, 230)",
                    }}
                >
                    {titlePage}
                </p>
                <p style={{ color: "rgb(230, 230, 230)" }}>
                    Write <span style={{ fontWeight: 500 }}>down</span>, Check{" "}
                    <span style={{ fontWeight: 500 }}>off</span>
                </p>
            </Grid2>
        </Grid2>
    );
};
