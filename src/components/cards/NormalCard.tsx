import * as react from 'react';
import Title from '@/components/Title';

export type NormalCardProps = {
  title: string;
  keywords?: react.ReactNode[];
};

const NormalCard = ({ title, keywords }: NormalCardProps) => (
  <div>
    <Title>{title}</Title>
    {(keywords ?? []).length > 0 && (
      <div>
        {keywords}
      </div>
    )}
  </div>
);

export default NormalCard;
