import * as react from 'react';

export type AbilityListItemProps = react.PropsWithChildren<{}>;
const AbilityListItem = ({ children }: AbilityListItemProps) => (
  <li>
    {children}
  </li>
);

export default AbilityListItem;