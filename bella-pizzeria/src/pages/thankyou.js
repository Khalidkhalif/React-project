import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ThankYou =() => {
    return (
    
    
    <div>
        <Container>
            <Typography>Thank you for your order! You will receive a confirmation e-mail shortly.</Typography>
            <Typography>Return to <Link to="/menu">menu.</Link></Typography>
        </Container>
        
    </div>
        )
}
export default ThankYou;