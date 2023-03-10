/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.get('/', async () => {
  return { hello: 'world' };
});

Route.group(() => {
  Route.get('scrapers/articles', 'ScrapersController.articles');
  Route.get('article-categories', 'ArticleCategoriesController.index');
  Route.get('sources', 'SourcesController.index');
  Route.get('articles', 'ArticlesController.index');
  Route.get('articles/:id', 'ArticlesController.show');
  Route.get('cities', 'CitiesController.index');
  Route.get('sholat-schedules', 'SholatSchedulesController.index');
  Route.post('feedbacks', 'FeedbacksController.store');
  Route.get('channels', 'ChannelsController.index');
  Route.get('videos', 'VideosController.index');
  Route.get('videos/:id', 'VideosController.show');
}).prefix('v1');
