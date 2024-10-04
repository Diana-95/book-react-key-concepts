import { useContext } from 'react';
import dummyEvents from '../../data/dummy-events';
import EventItem from './EventItem';
import classes from './Events.module.css';
import CartContext from '../../data/cart_context';

function Events() {

  const cartContext = useContext(CartContext);
  const cartItems = cartContext.cartItems;
  return (
    <ul className={classes.events}>
      {dummyEvents.map((event) => (
        <EventItem
          key={event.id}
          event={event}
          isInCart={cartItems.some((item) => item.id === event.id)}
          onAddToCart={() => cartContext.addItem(event)}
          onRemoveFromCart={() => cartContext.removeItem(event.id)}
        />
      ))}
    </ul>
  );
}

export default Events;
