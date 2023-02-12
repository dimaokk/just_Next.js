import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

export const CardItem = ({ img, name, desc }: any) => {
  return (
    <Card sx={{ maxWidth: 340, marginBottom: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="10px"
          image="https://gaogroup.kz/images/products/dekast-stvh-65-strim.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
