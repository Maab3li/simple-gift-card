import { useState } from "react";
import './App.css';


export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard((prevState)=> {

      return ({...prevState, text: "Your coupon has been used.", valid:false, instructions:
        "Please visit our restaurant to renew your gift card."
    })
    })
  }

  return (
    <div className="card">
      <h1>
        Gift Card
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard} disabled= {giftCard.valid==false} className="button">
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
