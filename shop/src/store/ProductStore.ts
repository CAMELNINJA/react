import {makeAutoObservable} from 'mobx';
import {Product} from '../models/Product';

class ProductStore {
  descr =
    'Лучшее пиво всех времен и народов! Покупаем, выпиваем, балдеем! Только сегодня! При покупке пива - у вас будет пиво.';

  products: Product[] = [
    new Product(
      '1',
      'Volfas Engelman',
      this.descr,
      'https://s3-eu-west-1.amazonaws.com/straus/media/products2/f15477f84db54769991a5b7aa4396162.png',
      150,
      false,
    ),
    new Product(
      '2',
      'Volfas Engelman B',
      this.descr,
      'https://drinksnow.ru/upload/iblock/bbf/qzlcsdrtlfubq39x1c50yt4u5x82e69v.jpg',
      155,
      false,
    ),
    new Product(
      '3',
      'Corona Extra Max',
      this.descr,
      'https://forumsamogon.ru/wp-content/uploads/4/3/9/4390dc85f9b27ed478d798f131ab0f32.jpg',
      600,
      false,
    ),
    new Product(
      '4',
      'Leffe',
      this.descr,
      'https://artcafe-royal.ru/wp-content/uploads/4/4/a/44a0d9c8926bc642d32d1a6e0b80be25.jpeg',
      130,
      false,
    ),
    new Product(
      '5',
      'Балтика 99',
      this.descr,
      'https://sun6-23.userapi.com/s/v1/ig2/iOvzqtUKl6V_9-3spJWeyXqIEEk-f4LGU0oo7HTZjYNIHF0LhrIT8FDahY2iSMjF7GF1LCilNdtrA598FAVkrt6P.jpg?size=934x934&quality=96&crop=14,8,934,934&ava=1',
      49,
      false,
    ),
  ];

  constructor() {
    makeAutoObservable(this);
  }

  handleFavourite(oldProduct: Product) {
    this.products = this.products.map((product: Product) => {
      return oldProduct.id === product.id
        ? new Product(
            product.id,
            product.title,
            product.description,
            product.imageUrl,
            product.price,
            !product.isLiked,
          )
        : product;
    });
  }
}

export default new ProductStore();
