import * as react from 'react';

export type CardPreviewGridPageProps = react.PropsWithChildren<{}>;
const CardPreviewGrid = ({ children }: CardPreviewGridPageProps) => (
  <div className="mx-[10vw] my-14">
    {children}
  </div>
);

export default CardPreviewGrid;