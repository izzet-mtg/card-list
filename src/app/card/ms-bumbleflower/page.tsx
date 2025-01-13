import VigilanceKeyword from '@/components/keywords/VigilanceKeyword';
import NormalCard from '@/components/cards/NormalCard';

const MsBumbleflower = () => (
  <main>
    <NormalCard
      title='Ms. Bumbleflower'
      cardImageSource='https://mtg-jp.com//img_sys/cardImages/BLC/670858/cardimage.png'
      keywords={[
      <VigilanceKeyword key="vigilance" />
      ]}
    />
  </main>
);

export default MsBumbleflower;
