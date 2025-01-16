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
import CardPage from '@/components/pages/CardPage';

const MsBumbleflower = () => (
  <main>
    <CardPage>
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
          "あなたが呪文1つを唱えるたび、対戦相手1人を対象とし、クリーチャー1体を対象とする。そのプレイヤーはカードを1枚引く。そのクリーチャーの上に+1/+1カウンター1個を置く。ターン終了時まで、そのクリーチャーは飛行を得る。この能力が解決されたのがこのターン内の2回目なら、あなたはカードを2枚引く。"
        ]}
        stats={{ power: 1, toughness: 5}}
        mana={[
          <GenericMana1Symbol key="generic-mana-1" />,
          <GreenManaSymbol key="green-mana-1" />,
          <WhiteManaSymbol key="white-mana-1" />,
          <BlueManaSymbol key="blue-mana-1" />,
        ]}
      />
    </CardPage>
  </main>
);

export default MsBumbleflower;
