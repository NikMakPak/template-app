This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

## Структура json объектов:
- начиная с 1 - категории покупок 
- начиная с 100 - категории личных финансовых целей
- начиная с 1000 - клиентские id
- [с 1 - 10] 4 цифры - id карты клиента

## Структура архитектуры:
Работает на стеке классического MVC. Когда происходит изменение в view, передается в controller И потом данные возвращаются в view. Таким образом возможно расширение проекта.

