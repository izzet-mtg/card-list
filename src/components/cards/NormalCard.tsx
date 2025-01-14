import * as react from 'react';
import Title from '@/components/Title';

export type NormalCardProps = {
  title: string;
  keywords?: react.ReactNode[];
  cardImageSource: string;
};

const NormalCard = ({ title, keywords, cardImageSource }: NormalCardProps) => (
  <div>
    <Title>{title}</Title>
    <img src={cardImageSource} alt='card image' />
    {(keywords ?? []).length > 0 && (
      <div>
        {keywords}
      </div>
    )}
  </div>
);

export default NormalCard;
