import * as react from 'react';

export type CardPreviewGridProps = react.PropsWithChildren<{}>;
const CardPreviewGrid = ({ children }: CardPreviewGridProps) => (
  <div className="mx-[max(10vw,20px)] my-14">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
      {children}
    </div>
  </div>
);

export default CardPreviewGrid;