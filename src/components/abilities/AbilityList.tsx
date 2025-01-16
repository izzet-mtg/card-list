import * as react from 'react';

export type AbilityListProps = react.PropsWithChildren;
const AbilityList = ({ children }: AbilityListProps) => (
  <ul className='max-w-max space-y-1 list-none list-inside'>
    {children}
  </ul>
);

export default AbilityList;