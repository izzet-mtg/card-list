import VigilanceKeywordAbility from '@/components/keyword-abilities/VigilanceKeywordAbility';
import NormalCard from '@/components/cards/NormalCard';
import CitizenSubtype from '@/components/card-types/subtypes/CitizenSubtype';
import RabbitSubtype from '@/components/card-types/subtypes/RabbitSubtype';
import CreatureSupertype from '@/components/card-types/supertypes/CreatureSupertype';
import LegendarySupertype from '@/components/card-types/supertypes/LegendarySupertype';

const MsBumbleflower = () => (
  <main>
    <NormalCard
      title='Ms. Bumbleflower'
      cardImageSource='https://mtg-jp.com//img_sys/cardImages/BLC/670858/cardimage.png'
      keywords={[
        <VigilanceKeywordAbility key="vigilance" />
      ]}
      supertypes={[
        <LegendarySupertype key="legendary" />,
        <CreatureSupertype key="creature" />,
      ]}
      subtypes={[
        <RabbitSubtype key="rabbit" />,
        <CitizenSubtype key="citizen" />,
      ]}
      rarity='mythic'
    >
      test1
      test2
    </NormalCard>
  </main>
);

export default MsBumbleflower;
