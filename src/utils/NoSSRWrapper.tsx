import React, { ReactNode } from "react";
import dynamic from "next/dynamic";

interface Props {
  children: ReactNode;
}

// NoSSRWrapper for when SSR context, will be different to client logic and throw hydration issues.
//  So for now this will do.
//   https://nextjs.org/docs/messages/react-hydration-error 
//   https://nextjs.org/docs/basic-features/pages#pre-rendering
const NoSSRWrapper: React.FC<Props> = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
  ssr: false,
});
