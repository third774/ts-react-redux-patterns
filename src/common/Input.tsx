import React from "react";

// What if we want to create our own input component that
// handles pulling out the value from e.target.value for us?
// We're wanting to over-ride a single prop from the standard
// <input /> element's props! How do we do this?

type Props = {
  onChange: (text: string) => void;
};

// Here we rely on React's already existing prop definitions.
// We're going to spread the rest of props, so we don't want
// to lose all that type information, but we also want to
// omit the types for onChange since we're over-riding the
// type signature in Props above
type IntrinsicInputPropsWithoutOverrides = Omit<
  JSX.IntrinsicElements["input"],
  keyof Props
>;

// Here we intersect the types together.
// const Input: React.FC<JSX.IntrinsicElements["input"] & Props> = ({
// 👇Comment the line below out and uncomment the line above 👆
const Input: React.FC<IntrinsicInputPropsWithoutOverrides & Props> = ({
  onChange,
  ...rest
}) => {
  return (
    // To see input's normal React props, CMD+Click on input below
    <input
      onChange={e => {
        onChange(e.target.value);
      }}
      {...rest}
    />
  );
};

export default Input;
