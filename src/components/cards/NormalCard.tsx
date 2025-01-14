import * as react from 'react';
import Title from '@/components/Title';
import * as rarity from '@/features/rarity';
import AbilityList from '../abilities/AbilityList';
import AbilityListItem from '../abilities/AbilityListItem';

type CardContentProps = react.PropsWithChildren<{
  title: string;
}>;
const CardContentItem = ({ title, children }: CardContentProps) => (
  <div className='p-2 flex flex-col'>
    <dt className='mb-1 text-gray-500 dark:text-gray-400 font-semibold'>{title}</dt>
    <dd>{children}</dd>
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
  mana?: react.ReactNode[];
};
const NormalCard = ({ title, keywords, cardImageSource, supertypes, subtypes, rarity, stats, abilities, mana }: NormalCardProps) => (
  <div className='space-y-6'>
    <Title>{title}</Title>
    <div className='flex space-x-5'>
      <img src={cardImageSource} alt='card image' className='max-h-96' />
      <dl className='max-h-0 border-spacing-x-7 border-spacing-y-1 divide-y divide-gray-200 dark:text-white dark:divide-gray-700'>
        <CardContentItem title='Rarity'>
          {rarity === 'common' && "Common" || rarity === 'mythic' && "Mythic" || rarity === 'rare' && 'Rare' || rarity === 'uncommon' && 'Uncommon'}
        </CardContentItem>
        {(mana ?? []).length > 0 && (
          <CardContentItem title='Mana'>
            <div className='flex space-x-1'>
              {mana?.map((mana, index) => (
                <div key={`mana-${index}`} className='w-9'>{mana}</div>
              ))}
            </div>
          </CardContentItem>
        )}
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
      </dl>
    </div>
  </div>
);

export default NormalCard;
