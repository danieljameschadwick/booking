import { useLocation } from "../../../state/location";

export const LocationHeader = () => {
  const { name, address } = useLocation();

  return (
    <div className="mb-4 flex flex-col gap-2">
      <h1 className="text-3xl text-white">{name}</h1>

      <span className="text-lg text-white">{address}</span>
    </div>
  );
};
