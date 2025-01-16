export type CardPreviewProps = {
  imageUrl: string;
  href: string;
};
const CardPreview = ({ imageUrl, href }: CardPreviewProps) => (
  <a href={href}>
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full h-[80%] object-cover object-top" src={imageUrl} alt="card image" />
    </div>
  </a>
);

export default CardPreview;