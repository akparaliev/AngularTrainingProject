1) создал CartModule, ProductModule и соответственно сервисы CartService и ProductService.
2) ProductService отдает данные по продуктам с мока.
3) CartService сохраняет id продукта в массив, выдает кол-во продукта в корзине и выдает полную сумму всех продуктов в корзине.
4) ProductComponent не отображает кнопку купить, если у продукта свойство IsAvailable равен false;
5) CartItemComponent принимает в качестве инпутов сам продукт и его количество, и есть оутпут, который при возникновении события keyup на поле с количеством продукта, емиттит событие.
6) CartListComponent подписывается на событие CartItemComponent - изменение кол-ва продукта CartItemComponent - с помощью CartService меняет кол-во продукта.
7) CartListComponent берет как ViewChild компонент CartItemComponent, и выдает название первого попавщего такого компонента как самый популярный на текущий день.
