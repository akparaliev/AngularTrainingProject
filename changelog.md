1) создал LocalStorageService, ConfigOptionsService, ConstantsService, GeneratorService и внедрил в CoreModule.
2) переписал CartService
3) задание( Напишите директиву, которая добавляет обработчик события click к хост элементу. 
   Клик изменяет размер шрифта элемента, рамку или что-то другое на Ваше усмотрение. 
   Добавьте @Input() для директивы. Используйте ElementRef/Renderer2) выполнил еще в ветке Task2.
bug: не работают сервисы в главном модуле, после регистрации их в CoreModule.