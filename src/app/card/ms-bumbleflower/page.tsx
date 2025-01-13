import VigilanceKeyword from '@/components/keywords/VigilanceKeyword';
import NormalCard from '@/components/cards/NormalCard';

const MsBumbleflower = () => (
  <main>
    <NormalCard
      title='Ms. Bumbleflower'
      keywords={[
      <VigilanceKeyword key="vigilance" />
      ]}
    />
  </main>
);

export default MsBumbleflower;
