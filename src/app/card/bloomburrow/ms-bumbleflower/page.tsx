import VigilanceKeywordAbilityTag from '@/components/keyword-abilities/VigilanceKeywordAbilityTag';
import NormalCard from '@/components/cards/NormalCard';
import CitizenSubtypeTag from '@/components/card-types/subtypes/CitizenSubtypeTag';
import RabbitSubtypeTag from '@/components/card-types/subtypes/RabbitSubtypeTag';
import CreatureSupertypeTag from '@/components/card-types/supertypes/CreatureSupertypeTag';
import LegendarySupertypeTag from '@/components/card-types/supertypes/LegendarySupertypeTag';

const MsBumbleflower = () => (
  <main>
    <NormalCard
      title='Ms. Bumbleflower'
      cardImageSource='https://cards.scryfall.io/large/front/6/e/6e15124e-ad7b-49f5-b60e-c68029482d06.jpg?1730180794'
      keywords={[
        <VigilanceKeywordAbilityTag key="vigilance" />
      ]}
      supertypes={[
        <LegendarySupertypeTag key="legendary" />,
        <CreatureSupertypeTag key="creature" />,
      ]}
      subtypes={[
        <RabbitSubtypeTag key="rabbit" />,
        <CitizenSubtypeTag key="citizen" />,
      ]}
      rarity='mythic'
      abilities={[
        "test1",
        "test2"
      ]}
      stats={{ power: 1, toughness: 5}}
    />
  </main>
);

export default MsBumbleflower;
