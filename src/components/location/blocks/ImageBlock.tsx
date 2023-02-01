import { LocationBlock } from "./LocationBlock";

export const ImageBlock = ({ image }) => {
  return (
    <LocationBlock>
      <img src={image} />
    </LocationBlock>
  );
};
