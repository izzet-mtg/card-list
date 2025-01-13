import VigilanceKeyword from '@/components/keywords/vigilance';
import NormalCard from '@/components/cards/normal';

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
