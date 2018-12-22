export default function ({ app, redirect }) {
  const routerName = app.router.currentRoute.name
  if (routerName === 'news-post-id' ||
      routerName === 'blog-post-id' ||
      routerName === 'article-post-id' ||
      routerName === 'media-post-id') {
    return redirect(`/post/${app.router.currentRoute.params.id}`)
  }
}
