import React from "react";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { grey, red } from "@mui/material/colors";
import { Button, Typography, Box } from "@mui/material";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteAllFromCart,
  removeFromCart,
} from "../feature/wishList/wishListSlice";
import { NavLink } from "react-router-dom";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
const WishList = () => {
  const { wishListProduct } = useAppSelector((state) => state.cartR);
  const dispatch = useAppDispatch();
  const deleteAll = () => {
    dispatch(deleteAllFromCart());
  };
  const deleteSingleItem = (id: string) => {
    dispatch(removeFromCart(id));
  };
  const wishListProductDetail = () =>{
    
  }
  return (
    <Paper variant="outlined" square sx={{ backgroundColor: grey[400] }}>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          padding: 2,
        }}
      >
        <Button
          onClick={() => deleteAll()}
          sx={{ borderRadius: 2, backgroundColor: red[800], color: grey[800] }}
        >
          <ClearAllIcon color="error" />
        </Button>
        <Typography variant="h3">
          You have {wishListProduct.length} in your wish list.
        </Typography>
      </section>
      {wishListProduct.map((wishProduct) => (
        <Box
          key={wishProduct.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{
              width: "10%",
              height: "10%",
              objectFit: "cover",
              overflow: "hidden",
              borderRadius: 8,
              padding: 4,
            }}
            src={wishProduct.images[0]}
            alt={wishProduct.title}
          />
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              justifyItems: "flex-start",
            }}
          >
            <Typography variant="h5">{wishProduct.title}</Typography>
            <Typography variant="body1">
              {wishProduct.description.substring(0, 50)}...
            </Typography>
            <Typography variant="body2">
              Price:{" "}
              {wishProduct.price.toLocaleString("en-US", {
                style: "currency",
                currency: "EUR",
              })}
            </Typography>
          </article>
          <Button
            onClick={() => deleteSingleItem(wishProduct.id)}
            sx={{ borderRadius: 2, justifySelf: "center", alignSelf: "center" }}
          >
            <DeleteIcon color="error" />
          </Button>
        </Box>
      ))}
      <NavLink
        to="/"
        style={{
          float: "right",
          margin: 10,
          backgroundColor: "green",
          borderRadius: 4,
          padding: 4,
        }}
      >
        <ReplyAllIcon color="secondary" />
      </NavLink>
    </Paper>
  );
};

export default WishList;
