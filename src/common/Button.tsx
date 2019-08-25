import React, { MouseEventHandler } from "react";

// Let's say we want to have custom button component
// that only accepts on onClick handler. What should the
// type be for onClick? Do we need to define it ourselves?

type Props = {
  // onClick: () => void;
  // We could do something quick and easy like this
  // but it is lacking the click event

  // onClick: (event: any) => void
  // So we have the event, but how should we type it?
  // When I want to see what a type *should* be, I
  // sometimes just assign the *wrong* type to get an
  // informative error. Uncomment the exmaple below
  // to see what it should be.

  // onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  // So, the above is what React tells us the type *should* be,
  // and this works. But typing that out kinda sucks.

  onClick: MouseEventHandler<HTMLButtonElement>;
  // Fortunately for us React already has a type that
  // matches this signature!

  // onClick: JSX.IntrinsicElements["button"]["onClick"];
  // Alternately, we could also simply define it by grabbing
  // it from JSX.IntrinsicElements
};

// 👇uncomment this example to see what type onClick should be
// const whatTypeShouldOnClickBe = <button onClick={3} />;

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: 20,
        fontWeight: 700,
        backgroundColor: "rebeccapurple",
        color: "goldenrod",
        borderRadius: 5,
        boxShadow: "0px 3px 3px rgba(0,0,0,.5)",
        margin: 12
      }}
    >
      {children}
    </button>
  );
};

export default Button;
