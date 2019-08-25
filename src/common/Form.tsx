import React, { FormEventHandler } from "react";

// What if we want to create our own Form component that
// will just be a wrapper around <form /> that always calls
// e.preventDefault() ? Do we have to re-define all of the
// props for <form />? No, we do not!

// Here we're using a <form /> element's natural props!
// We want to maintain that same interface for consumers
// and we're going to spread all the rest of the props.
// To find this information in the type definitions,
// CMD+Click on the <form /> element
const Form: React.FC<JSX.IntrinsicElements["form"]> = ({
  onSubmit,
  children,
  ...rest
}) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit && onSubmit(e);
      }}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
