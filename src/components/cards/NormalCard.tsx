import * as react from 'react';
import Title from '@/components/Title';
import * as rarity from '@/features/rarity';
import AbilityList from '../abilities/AbilityList';
import AbilityListItem from '../abilities/AbilityListItem';

type CardContentProps = react.PropsWithChildren<{
  title: string;
}>;
const CardContentItem = ({ title, children }: CardContentProps) => (
  <div className='flex space-x-14 align-middle'>
    <h1>{title}</h1>
    <div>
      {children}
    </div>
  </div>
);

const TagList = ({ children }: react.PropsWithChildren<{}>) => (
  <div className='flex space-x-2'>
    {children}
  </div>
);

export type NormalCardProps = {
  title: string;
  keywords?: react.ReactNode[];
  cardImageSource: string;
  supertypes: react.ReactNode[];
  subtypes?: react.ReactNode[];
  rarity: rarity.Rarity;
  abilities?: string[];
  stats?: Record<"power" | "toughness", number | string>;
};
const NormalCard = ({ title, keywords, cardImageSource, supertypes, subtypes, rarity, stats, abilities }: NormalCardProps) => (
  <div className='space-y-6'>
    <Title>{title}</Title>
    <div className='flex space-x-28'>
      <img src={cardImageSource} alt='card image' />
      <div className='space-y-6'>
        <CardContentItem title='Rarity'>
          {rarity === 'common' && "Common" || rarity === 'mythic' && "Mythic" || rarity === 'rare' && 'Rare' || rarity === 'uncommon' && 'Uncommon'}
        </CardContentItem>
        {supertypes.length > 0 && (
          <CardContentItem title='Supertypes'>
            <TagList>
              {supertypes}
            </TagList>
          </CardContentItem>
        )}
        {(subtypes ?? []).length > 0 && (
          <CardContentItem title='Subtypes'>
            <TagList>
              {subtypes}
            </TagList>
          </CardContentItem>
        )}
        {(keywords ?? []).length > 0 && (
          <CardContentItem title='Keywords'>
            <TagList>
              {keywords}
            </TagList>
          </CardContentItem>
        )}
        {typeof stats !== 'undefined' && (
          <CardContentItem title='Stats'>
            {stats.power}/{stats.toughness}
          </CardContentItem>
        )}
        {(abilities ?? []).length > 0 && (
          <CardContentItem title="Abilities">
            <AbilityList>
              {(abilities ?? []).map((ability, index) => (
                <AbilityListItem key={`ability-${index}`}>
                  {ability}
                </AbilityListItem>
              ))}
            </AbilityList>
          </CardContentItem>
        )}
      </div>
    </div>
  </div>
);

export default NormalCard;
