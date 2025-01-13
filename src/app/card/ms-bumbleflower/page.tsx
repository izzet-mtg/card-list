import VigilanceKeyword from '@/components/keywords/vigilance';
import NormalCard from '@/components/cards/normal';

const MsBumbleflower = () => (
  <NormalCard
    title='Ms. Bumbleflower'
    keywords={[
     <VigilanceKeyword key="vigilance" />
    ]}
  />
);

export default MsBumbleflower;
