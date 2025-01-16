import * as react from 'react';

export type CardPreviewGridProps = react.PropsWithChildren;
const CardPreviewGrid = ({ children }: CardPreviewGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-center">
    {children}
  </div>
);

export default CardPreviewGrid;