import Http from "@api/http";
import { articleModule } from "@config/requestUrlConfig";

const {
  getArticlesUrl,
  getArticleDetailUrl,
  getArticlesArchivesUrl,
  getCategoriesUrl,
  getArticlesByCategoryUrl
} = articleModule;

const getArticles = paginationConfig => {
  const { countsPerPage, currentPage } = paginationConfig;
  const bizData = {
    url: getArticlesUrl,
    data: {
      countsPerPage,
      currentPage
    }
  };
  return Http.post(bizData);
};
const getArticlesByDetail = category => {
  const bizData = {
    url: getArticlesByCategoryUrl,
    data: {
      category
    }
  }
  return Http.post(bizData)
};

const getArticleDetail = id => {
  const bizData = {
    url: getArticleDetailUrl,
    data: { id }
  };
  return new Promise((resolve, reject) => {
    Http.post(bizData).then(data => {
      if (data.code === '001') return resolve(data.articleDetail);
      reject({ msg: '获取文章详情失败' });

    })
  })
};

const getArticlesArchives = () => Http.get({ url: getArticlesArchivesUrl });

const getCategories = () => Http.get({ url: getCategoriesUrl });

export { getArticles, getArticleDetail, getArticlesArchives, getCategories, getArticlesByDetail };
