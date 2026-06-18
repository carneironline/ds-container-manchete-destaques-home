# ds-container-manchete-destaques-home - Delivery Component

Renderização de componente com Module Federation e Server Side Render (SSR).

# Setup, Build, Lint e Run

Para realizar o setup do componente:

    $ make setup

Para rodar no modo de desenvolvimento:

    $ make start

Para rodar no modo produção:

    $ make build
    $ make run

Para rodar o lint:

    $ make lint

# Instalando um componente

### O fluxo recomendado para instalação de componentes é gerar uma release e fazer a instalação nos targets (env, tipo de conteúdo e tenant) via [Backstage Console](https://console.backstage.globoi.com/).


! ATENÇÃO

Caso deseje fazer o deploy automático do componente para algum target de teste (recomendamos que seja feito apenas no ambiente de QA!), é necessário configurá-lo no seu `backstage.yaml`:

```
deliveryComponents:
  - slug: uma/slug
    path: um/path
    version: 0.0.1
    installationTargets:
      qa:
      - tenant: dev-beta
        env: qa
    hooks:
      predeploy:
      - cmd: make
        args:
        - -C
        - deliveryComponent/teste
        - build
```

Uma vez configurado o target, é possível executar o deploy diretamente para o ambiente usando

```
$ backstage deploy qa
```

# Module Federation

Acesse a [documentação](https://webpack.js.org/concepts/module-federation/) do Module Federation para obter mais informações sobre a implementação.

# Compatibilidade de Navegadores

Este componente é configurado para suportar navegadores legados, incluindo:
- Chrome 68+
- Safari 12+

Isso é especialmente importante para aplicações que rodam em TVs e dispositivos antigos. A transpilação do `react-helmet-async` está configurada automaticamente.
