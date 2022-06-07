import {Box, Button, Link} from "@mui/material";
import { Typography } from '@mui/material';
import {Label} from "@mui/icons-material";



function Navbar() {
    return (
            <Box  className="Navbar" sx={{ '& button': { m: 1 } }} >
                <Button variant="contained" size="large">Live Recording</Button>
                <Button variant="contained" size="large">Image Processing</Button>
              <Link variant="contained" style={{ textDecoration: 'none' }}  color="inherit" >Showroom-Adelte Door Detection Client</Link>
                <Link style={{ textDecoration: 'none' }} className="watch" id="watch"  color="inherit">12:12:40</Link>
            </Box>
    );
}



export default Navbar;
