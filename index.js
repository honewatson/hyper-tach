// http://tachyons.io/components/article-lists/title-preview-author-media-flipped/index.html

import { h, app } from "hyperapp"

const state = {
  title: 'News',
  articles: [
    {
      title: 'Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction',
      summary: 'The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.',
      image: 'http://mrmrs.github.io/photos/cpu.jpg',
      alt: 'Photo of a dimly lit room with a computer interface terminal.',
      author: 'Robin Darnell',
      date: 'Nov. 21, 2016'
    }
  ]
}

const css = {
  article: 'pv4 bt bb b--black-10 ph3 ph0-l',
  blockTitle: 'athelas ph3 ph0-l',
  articleSummary: "f5 f4-l lh-copy athelas",
  articleTitle: "f3 athelas mt0 lh-title",
  articleInner: "w-100 w-60-ns pr3-ns order-2 order-1-ns",
  articleImageWrapper: "pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns",
  articleAuthor: "f6 lh-copy gray mv0",
  articleDate: "f6 db gray"
};

const ArticleText = ({article}) =>
  <div class={css.articleInner}>
    <h1 class={css.articleTitle}>{article.title}</h1>
    <p class={css.articleSummary}>
      {article.summary}
    </p>
  </div>

const ArticleImage = ({article}) =>
  <div class={css.articleImageWrapper}>
    <img src={article.image} class="db" alt={article.alt} />
  </div>

const ArticleMeta = ({article}) =>
  <div>
    <p class={css.articleAuthor}>By <span class="ttu">{article.author}</span></p>
    <time class={css.articleDate}>{article.date}</time>
  </div>

const Article = ({article}) =>
  <article class={css.article}>
    <div class="flex flex-column flex-row-ns">
      <ArticleText article={article} />
      <ArticleImage article={article} />
    </div>
    <ArticleMeta article={article} />
  </article>

const News = (state, actions) =>
  <section class="mw7 center">
    <h2 class={css.blockTitle}>{state.title}</h2>
    {state.articles.map( (article, index) => <Article article={article} key={`article-${index}`} />)}
  </section>

app({
  state,
  view: News,
  actions: {}
})
