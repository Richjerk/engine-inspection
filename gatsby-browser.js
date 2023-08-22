/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react";
import { ChatBot } from "./components/ChatBot"; // Assuming your ChatBot component is in the components folder

// Wrap the entire application with your ChatBot component
export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      <ChatBot />
    </>
  );
};

