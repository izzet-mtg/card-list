import * as react from 'react';
import Title from '@/components/Title';
import * as rarity from '@/features/rarity';
import AbilityList from '../abilities/AbilityList';
import AbilityListItem from '../abilities/AbilityListItem';

type CardContentProps = react.PropsWithChildren<{
  title: string;
}>;
const CardContentRow = ({ title, children }: CardContentProps) => (
  <div className='flex table-row'>
    <dt className='font-semibold table-cell'>{title}</dt>
    <dd className='table-cell'>
      {children}
    </dd>
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
    <div className='flex space-x-5'>
      <img src={cardImageSource} alt='card image' className='max-h-96' />
      <dl className='table max-h-0 border-spacing-x-7 border-spacing-y-2'>
        <CardContentRow title='Rarity'>
          {rarity === 'common' && "Common" || rarity === 'mythic' && "Mythic" || rarity === 'rare' && 'Rare' || rarity === 'uncommon' && 'Uncommon'}
        </CardContentRow>
        {supertypes.length > 0 && (
          <CardContentRow title='Supertypes'>
            <TagList>
              {supertypes}
            </TagList>
          </CardContentRow>
        )}
        {(subtypes ?? []).length > 0 && (
          <CardContentRow title='Subtypes'>
            <TagList>
              {subtypes}
            </TagList>
          </CardContentRow>
        )}
        {(keywords ?? []).length > 0 && (
          <CardContentRow title='Keywords'>
            <TagList>
              {keywords}
            </TagList>
          </CardContentRow>
        )}
        {typeof stats !== 'undefined' && (
          <CardContentRow title='Stats'>
            {stats.power}/{stats.toughness}
          </CardContentRow>
        )}
        {(abilities ?? []).length > 0 && (
          <CardContentRow title="Abilities">
            <AbilityList>
              {(abilities ?? []).map((ability, index) => (
                <AbilityListItem key={`ability-${index}`}>
                  {ability}
                </AbilityListItem>
              ))}
            </AbilityList>
          </CardContentRow>
        )}
      </dl>
    </div>
  </div>
);

export default NormalCard;
