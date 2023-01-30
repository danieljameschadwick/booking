interface Location {
  id: string;
  name: string;
  address: string;
  image: string | null;
}

const locations: Location[] = [
  {
    id: "123456",
    name: "Pimlico Academy School",
    address: "Lupus Street, Westminster, London, SW1V 3AT", // probably handle as an obj
    image: "/images/location/pimlico_academy.jpg", // we should use ids/uuid here
  },
  {
    id: "543312",
    name: "Globe Academy",
    address: "Harper Road, Southwark, London, SE1 6AG", // probably handle as an obj
    image: "/images/location/globe_academy.jpg", // we should use ids/uuid here
  },
];

export const getLocation = (id: string): Location | undefined => {
  return locations.find((location) => location.id === id);
};

export default locations;
