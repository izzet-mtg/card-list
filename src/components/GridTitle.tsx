import * as react from 'react';

export type GridTitleProps = react.PropsWithChildren;
const GridTitle = ({ children }: GridTitleProps) => (
  <h1 className='text-4xl text-center m-4 font-bold'>{children}</h1>
);

export default GridTitle;