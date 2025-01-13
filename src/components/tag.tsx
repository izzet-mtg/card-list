export type TagProps = {
  children: string;
  backgroundColor: string;
  textColor: string;
};

const Tag = ({ children, backgroundColor, textColor }: TagProps) => {
  return (
    <div className={`rounded-full px-3 py-1 text-sm w-fit ${backgroundColor} ${textColor}`}>{children}</div>
  );
};

export default Tag;
