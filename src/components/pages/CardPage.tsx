import * as react from 'react';

export type CardPageProps = react.PropsWithChildren<{}>;
const CardPage = ({ children }: CardPageProps) => (
  <div className='max-w-screen-2xl mx-[max(20vw,20px)] my-14'>
    {children}
  </div>
);

export default CardPage;