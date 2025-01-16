import * as react from 'react';

export type CardPreviewGridPageProps = react.PropsWithChildren<{}>;
const CardPreviewGrid = ({ children }: CardPreviewGridPageProps) => (
  <div className="mx-[max(10vw,20px)] my-14">
    {children}
  </div>
);

export default CardPreviewGrid;