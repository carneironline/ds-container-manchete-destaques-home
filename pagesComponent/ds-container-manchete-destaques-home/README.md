# ds-container-manchete-destaques-home - Pages Component

ds-container-manchete-destaques-home

## Repositórios

Gitlab: [gitlab@gitlab.globoi.com:ds-container-manchete-destaques-home.git](https://gitlab.globoi.com/ds-container-manchete-destaques-home)

> A criação do repositório no gitlab não é automática, porém recomendada. E lembre-se de atualizar o remote local `git remote set-url origin gitlab@gitlab.globoi.com:<nome-do-grupo>/<slug-do-repo>.git`.

## Sobre o componente

Este componente é composto de dois tipos de componentes:

* __Pages (CMA)__ - Componente `React` utilizado no admin do `Pages` para gerenciar os dados do documento.

Para criar lógica de renderização, ou seja, enriquecer os dados do contexto para utilizar no componente do `Show`, deve-se utilizar `render_functions`.

Consulte a doc para mais informações:

* [Pages](http://docs.backstage.globoi.com/pages/)
* [Show](http://docs.backstage.globoi.com/show/componentes/)
* [Render Functions](http://docs.backstage.globoi.com/show/componentes/render_functions/)

## Desenvolvimento

### Instalação

Para instalação:

```
make setup
```

Este comando instala:

* Dependências `node` dos componentes

## Execução

Para executar o sandbox dos componentes:

```
make run
```

O sandbox do `Pages` estará disponível em [http://localhost:3000](http://localhost:3000).

## Release

Os componentes precisam de uma pasta `dist` com a build dos assets necessários para sua instalação no provision.

