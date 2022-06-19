import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

type Props = {
id: number,
title: string,
tags: string[],
desc: string,
class: string,
}

const Project = (item: Props) => {
    return (
        <Card 
        sx={{ maxWidth: 345 }} 
        key={item.id}
        >
        <CardActionArea>
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