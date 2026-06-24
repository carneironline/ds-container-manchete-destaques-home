# Highlight

Componente importado de `backstage-pages` utilizado para configurar cada bloco de conteúdo (manchete/destaque) nos layouts do editor.

## Props de controle de visibilidade

| Prop       | Tipo   | Padrão | Descrição                         |
| ---------- | ------ | ------ | --------------------------------- |
| `hat`      | `bool` | `true` | Exibe/oculta o campo "Chapéu"     |
| `subtitle` | `bool` | `true` | Exibe/oculta o campo "Sub-Título" |
| `media`    | `bool` | `true` | Exibe/oculta o seletor de mídia   |
| `image`    | `bool` | `true` | Exibe/oculta o seletor de imagem  |
| `video`    | `bool` | `true` | Exibe/oculta o seletor de vídeo   |

## Props de configuração

| Prop                   | Tipo               | Padrão  | Descrição                                                                     |
| ---------------------- | ------------------ | ------- | ----------------------------------------------------------------------------- |
| `idx`                  | `string \| number` | —       | Identificador do highlight. Define o caminho no formulário: `highlights[idx]` |
| `name`                 | `string`           | —       | Nome do campo no formulário (via `getFieldName`)                              |
| `imageAspect`          | `number`           | `16/9`  | Proporção do crop da imagem                                                   |
| `imageOrientation`     | `string`           | —       | Orientação da imagem (`"Horizontal"` / `"Vertical"`)                          |
| `mediaStyle`           | `object`           | —       | Estilo CSS para o seletor de mídia                                            |
| `maxLinks`             | `number`           | —       | Número máximo de links (0 = sem seção de links)                               |
| `tenant`               | `string`           | —       | ID do tenant para os seletores de imagem/vídeo                                |
| `multiTenantEnabled`   | `bool`             | `false` | Habilita suporte multi-tenant                                                 |
| `renderCustomFields`   | `func`             | —       | Função para renderizar campos customizados extras                             |
| `fieldLevelValidation` | `object`           | `{}`    | Configuração de validação por campo                                           |
| `content`              | `object`           | —       | Dados atuais do highlight (injetado via redux-connect)                        |
| `documentURLs`         | `object`           | —       | URLs para autocomplete de links                                               |

## Props obrigatórias (via `{...props}` do formulário pai)

| Prop           | Tipo     | Descrição                                        |
| -------------- | -------- | ------------------------------------------------ |
| `getFieldName` | `func`   | Função para gerar os nomes dos campos redux-form |
| `meta`         | `object` | Objeto meta do redux-form                        |
| `input`        | `object` | Objeto input do redux-form                       |
| `dispatch`     | `func`   | Redux dispatch                                   |

## Exemplo de uso

```jsx
import { Highlight } from "backstage-pages"

;<Highlight
  idx="layout-1-manchete-com-foto"
  name={props.getFieldName("layout-1-manchete-com-foto")}
  hat={false}
  subtitle={false}
  image={true}
  video={false}
  imageAspect={16 / 9}
  tenant={props.tenant}
  {...props}
/>
```
