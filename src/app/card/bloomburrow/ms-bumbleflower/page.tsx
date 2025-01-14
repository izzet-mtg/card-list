import VigilanceKeywordAbilityTag from '@/components/abilities/keywords/VigilanceKeywordAbilityTag';
import NormalCard from '@/components/cards/NormalCard';
import CitizenSubtypeTag from '@/components/types/subtypes/CitizenSubtypeTag';
import RabbitSubtypeTag from '@/components/types/subtypes/RabbitSubtypeTag';
import CreatureSupertypeTag from '@/components/types/card-types/CreatureSupertypeTag';
import LegendarySupertypeTag from '@/components/types/card-types/LegendarySupertypeTag';
import GreenManaSymbol from '@/components/mana-symbols/colored/GreenManaSymbol';
import WhiteManaSymbol from '@/components/mana-symbols/colored/WhiteManaSymbol';
import BlueManaSymbol from '@/components/mana-symbols/colored/BlueManaSymbol';
import GenericMana1Symbol from '@/components/mana-symbols/colorless/GenericMana1';

const MsBumbleflower = () => (
  <main>
    <NormalCard
      title='バンブルフラワー夫人'
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
      cardRarity='mythic'
      abilities={[
        "test1",
        "test2"
      ]}
      stats={{ power: 1, toughness: 5}}
      mana={[
        <GenericMana1Symbol key="generic-mana-1" />,
        <GreenManaSymbol key="green-mana-1" />,
        <WhiteManaSymbol key="white-mana-1" />,
        <BlueManaSymbol key="blue-mana-1" />,
      ]}
    />
  </main>
);

export default MsBumbleflower;
