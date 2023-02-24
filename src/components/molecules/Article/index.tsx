import Link from 'next/link';

export type ArticleProps = {
  url: string;
  title: string;
  image: string;
  category: string;
  description: string;
};

export const Article: React.FC<ArticleProps> = ({
  url = '#',
  title = '',
  image = '',
  category = '',
  description = '',
}) => {
  return (
    <Link href={url} target="_blank">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
        <div className="col-span-1">
          <div
            title={title}
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="pb-[75%] bg-center bg-cover bg-no-repeat rounded"
          />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-2">
            <p className="text-red-500 font-bold">{category}</p>
            <h3 className="truncate-multipleline text-xl font-medium">
              {title}
            </h3>
            <p className="truncate-multipleline">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Article;
