import ArticleComponent from '@/components/molecules/Article';
import { Category } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Link from 'next/link';

export type Article = {
  article_id: string;
  category_id: string;
  article_type: string;
  original_cate: string;
  site_id: string;
  title: string;
  lead: string;
  share_url: string;
  thumb_list: {
    thumb_500_300_100_1_crop: string;
    thumb_500_300_100_2_crop: string;
    thumb_default: string;
    thumb_380_228_100_1_crop: string;
    thumb_380_228_100_2_crop: string;
    thumb_300_180_100_1_crop: string;
    thumb_300_180_100_2_crop: string;
    thumb_100_100_100_1_crop: string;
    thumb_100_100_100_2_crop: string;
    thumb_120_72_100_1_crop: string;
    thumb_120_72_100_2_crop: string;
  };
  thumbnail_url: string;
  thumbnail_url2: string;
  thumbnail_url3: string;
  publish_time: string;
  publish_time_format: string;
  privacy: string;
  article_icon: number;
  author_id: string;
  score: string;
  iscomment: string;
  article_category: {
    cate_name: string;
    cate_url: string;
  };
  location_name: string;
  off_thumb: string;
  content: string;
  vn_zone: number;
  type_new: string;
};

export type ArticlesProps = {
  loading: boolean;
  error: Error | null;
  articles: Article[];
};

export const Articles: React.FC<ArticlesProps> = ({
  loading = false,
  error = null,
  articles = [],
}) => {
  if (loading) {
    return (
      <Container>
        <div className="py-16 text-center">
          <p className="uppercase text-xl">Loading</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="py-16">
          <p className="uppercase text-xl">{error.message || 'Error'}</p>
        </div>
      </Container>
    );
  }

  if (!articles) {
    return (
      <Container>
        <div className="py-16">
          <p className="uppercase text-xl">No Articles</p>
        </div>
      </Container>
    );
  }

  const allCategories = articles.map((article) => article.article_category);
  const categoryNames: string[] = Array.from(
    new Set([...allCategories.map((category) => category.cate_name)])
  ).sort();
  const uniqueCategories: { cate_name: string; cate_url: string }[] =
    categoryNames.map((categoryName) => {
      return (
        allCategories.find(
          (category) => category.cate_name === categoryName
        ) || { cate_name: '', cate_url: '/' }
      );
    });

  const articlesByCategories = uniqueCategories.map((category) => {
    return {
      category,
      articles: articles.filter(
        (article) => article.article_category.cate_name === category.cate_name
      ),
    };
  });

  return (
    <Container>
      <div className="py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesByCategories.map(({ category, articles }) => {
            return (
              <div
                key={category.cate_name}
                className={`${
                  articles.length > 1
                    ? 'col-span-1 md:col-span-2'
                    : 'col-span-1'
                }`}
              >
                <div className="border-b py-4 mb-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl uppercase">{category.cate_name}</h2>
                    <p className="text-blue-500">
                      <Link
                        href={`https://vnexpress.net${category.cate_url}`}
                        target="_blank"
                        className="underline"
                      >
                        View All Stories
                      </Link>
                    </p>
                  </div>
                </div>
                <div
                  className={`grid gap-8 ${
                    articles.length > 1
                      ? 'grid-cols-1 md:grid-cols-2'
                      : 'grid-cols-1'
                  }`}
                >
                  {(articles || []).map((article: Article) => {
                    return (
                      <div key={article.article_id}>
                        <ArticleComponent
                          url={article.share_url}
                          title={article.title}
                          image={article.thumbnail_url}
                          category={article.article_category.cate_name}
                          description={article.lead}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

Articles.displayName = 'Articles';

export default Articles;
