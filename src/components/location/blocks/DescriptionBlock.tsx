import { LocationBlock } from "./LocationBlock";

export const DescriptionBlock = ({ description }: { description: string }) => {
  // example for useContext
  // const { description } = useLocation();

  return (
    <LocationBlock title="Description">
      <p>{description}</p>
    </LocationBlock>
  );
};
