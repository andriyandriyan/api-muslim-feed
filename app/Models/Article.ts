import { beforeCreate, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Services/CamelCaseNamingStrategy';
import { DateTime } from 'luxon';
import { nanoid } from 'nanoid';
import ArticleCategory from './ArticleCategory';
import Model from './Model';
import Source from './Source';

export default class Article extends Model {
  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true })
  public id: string;

  @column()
  public title: string;

  @column()
  public image: string | null;

  @column()
  public originArticleId: number;

  @column()
  public sourceUrl: string;

  @column()
  public sourceId: number;

  @belongsTo(() => Source)
  public source: BelongsTo<typeof Source>;

  @column()
  public articleCategoryId: number | null;

  @belongsTo(() => ArticleCategory)
  public articleCategory: BelongsTo<typeof ArticleCategory>;

  @column()
  public tags: string[] | null;

  @column.dateTime()
  public date: DateTime;

  @column.dateTime()
  public modified: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @beforeCreate()
  public static async setArticleId(article: Article) {
    article.id = nanoid(12);
  }
}
