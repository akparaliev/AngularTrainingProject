1) создал сервис ProductService, который берет данные с product-mock.ts
2) сервис используется в ProductListComponent, который получает список продуктов и выводит с помощью компонента ProductComponent
3) создал сервис CartService, который хранит продукты, который были отправлены в корзину
4) CartService хранит данные в виде Map<string(id продукта), number(кол-во продукта)>. При отображении вызывает метод ProductService и передает id продукта и получает данные продукта. Также получает кол-во продукта с коллекции Map<string,number>;
5) CartComponent использует ProductComponent, который передает ему сам продукт и значение readonly = true.
6) поле readonly прячет кнопку Buy в ProductComponent
