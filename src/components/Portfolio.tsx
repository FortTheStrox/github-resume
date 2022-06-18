import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './../css/main.min.css';



const Portfolio = () => {
    return (
      <div className='Portfolio'>
        <div className='title'>Software Engineer, Security Analyst, Adrenaline Seeker</div>
        <div className='intro'>
          <p>Hello! I'm a software engineer who likes security.
            <br />
            I'm currently working on protecting systems
            <br />
            at an undisclosed company!

          </p>
        </div>
        <div className='body'>
          <p>filter:</p>
        <ToggleButtonGroup exclusive>
          <ToggleButton value='work'>

          </ToggleButton>
          <ToggleButton value='hobby'>
            
          </ToggleButton>
        </ToggleButtonGroup>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia>

            </CardMedia>
            <CardContent>

            </CardContent>
            <Typography>
              test
            </Typography>
          </CardActionArea>

        </Card>

        </div>
      </div>
    );
}

export default Portfolio;