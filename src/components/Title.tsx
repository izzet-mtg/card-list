export type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-3xl">{children}</h1>
  );
};

export default Title;
