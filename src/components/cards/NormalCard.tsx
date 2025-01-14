import * as react from 'react';
import Title from '@/components/Title';

export type NormalCardProps = {
  title: string;
  keywords?: react.ReactNode[];
  cardImageSource: string;
};

type CardContentProps = {
  title: string;
}
const CardContentItem = ({ title, children }: react.PropsWithChildren<CardContentProps>) => (
  <div className='flex space-x-14 align-middle'>
    <h1>{title}</h1>
    {children}
  </div>
);

const NormalCard = ({ title, keywords, cardImageSource }: NormalCardProps) => (
  <div className='space-y-6'>
    <Title>{title}</Title>
    <div className='flex space-x-28'>
      <img src={cardImageSource} alt='card image' />
      <div>
        <CardContentItem title='Keyword'>
          {(keywords ?? []).length > 0 && (
            <div>
              {keywords}
            </div>
          )}
        </CardContentItem>
      </div>
    </div>
  </div>
);

export default NormalCard;
