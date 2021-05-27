import { Box, Button } from "@material-ui/core";

// ! What did I undestand about

// ? Box is a wrapper that can serve for many purposes, like:
// Organizing DOM in parent/children elements,
// For style necessities and etc.

// ? It can accept certain props, like:
// - children: Its children elements (that can be passed as prop, and not necessarily nested)
// - clone: Prop for recycling its children.
//    - Default: false
// - component: The component that will be rendered by Box.
//    - Default: div
//    - It can be an HTML Element, a Functional Component or an Object.
// * Any other prop will be received as style or spreaded to the root

export const BoxStudy = () => {
  return (
    <Box>
      {/* Simple example of Box as Wrapper */}
      <Box>
        <Button variant="primary">Hello World Box</Button>
      </Box>
      {/* Example of Box using a HTML Element as component */}
      <Box component="main">
        <Button variant="primary">Hello World Box</Button>
      </Box>
      {/* Example of Box using a Function as component */}
      <Box component={FunctionAsComponent}>
        <Button variant="primary">Hello World Box</Button>
      </Box>
      {/* Example of Box using a Function as children */}
      <Box children={ButtonAsChildren}>
        <Button variant="primary">Hello World Box</Button>
      </Box>
    </Box>
  );
};

export const FunctionAsComponent = ({ children }) => {
  return <section>{children}</section>;
};

export const ButtonAsChildren = () => {
  return <Button variant="secondary">Hello World Box</Button>;
};
