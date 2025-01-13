export type TagProps = {
  children: string;
};

const Tag = ({ children }: TagProps) => {
  return (
    <span>{children}</span>
  );
};

export default Tag;
