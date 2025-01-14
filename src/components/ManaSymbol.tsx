export type ManaSymbolProps = {
  imagePath: string;
  alt?: string;
};
const ManaSymbol = ({ imagePath, alt }: ManaSymbolProps) => (
  <img src={imagePath} alt={alt} />
);

export default ManaSymbol;