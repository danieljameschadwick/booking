import { LocationBlock } from "./LocationBlock";

interface Props {
  image: string;
}

export const ImageBlock = ({ image }: Props) => {
  return (
    <LocationBlock>
      <img src={image} />
    </LocationBlock>
  );
};
