import * as react from 'react';

export type CardPageProps = react.PropsWithChildren<{}>;
const CardPage = ({ children }: CardPageProps) => (
  <div className='mx-[20vw] my-14'>
    {children}
  </div>
);

export default CardPage;