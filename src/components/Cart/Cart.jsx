import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import {Link} from 'react-router-dom'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'



const Cart = ({ cart,handleUpdateCartQty,handleRemoveFromCart,handleEmptyCart }) => {
    const classes = useStyles()
    const renderEmptyCart = () => (
        <Typography variant="subtitle1">Vous n'avez pas d'item dans votre carte d'achat, <Link to="/"className={classes.link}>commencez vos achats</Link></Typography>
      );
      
    const renderCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem item={lineItem} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQty={handleUpdateCartQty} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">le totale : {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Vider la carte</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )
    
    if (!cart.line_items) return '...loading';
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Votre carte d'achat</Typography>
            {!cart.line_items.length ? renderEmptyCart() : renderCart()}
        </Container>
    )
}

export default Cart
