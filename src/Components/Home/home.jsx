import { Box,Typography } from "@mui/material";
import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";
import { useSelector } from "react-redux";

export const Home=()=>{
    const theme=useSelector((state)=>state.theme.theme);
    const style=`container main ${theme}`;
    return(
        <>
            <Header/>
            <Box className={style}>
                <Typography variant="body1" sx={{ display: 'inline-block' }}>
                    Home
                </Typography>
            </Box>
            <Footer/>
        </>
    )
}