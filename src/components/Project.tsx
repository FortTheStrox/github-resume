import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import ceimg from '../img/portfolio/ce.png';

type Props = {
id: number,
title: string,
tags: string[],
desc: string,
image: string,
altimg: string,
class: string,
}

const Project = (item: Props) => {
    return (
        <Card 
        sx={{ maxWidth: 345}} 
        key={item.id}
        >
        <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={item.image}
          alt={item.altimg}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {item.desc}
            </Typography>
            </CardContent>
            </CardActionArea>
        </Card>  
    )
}

export default Project;