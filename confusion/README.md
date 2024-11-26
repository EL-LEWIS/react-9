# Projeto Ristorante Con Fusion

## Instalação

No começo fez-se a instalação e configuração do react-app utilizando o npm, em seguida extraindo o arquivo indicado com as imagens e movendo para a pasta criada `assets` na pasta `public`.

## Estrutura do Projeto

1. **Criação de Componentes**

Na pasta `src`, foi criada uma nova pasta chamada `components`, e dentro dela, foi criado o arquivo `MenuComponent.js`. Este arquivo contém o código do componente que exibe o menu de pratos do restaurante.


## Finalizaçao 

e por ultimo dando o npm start gerando localhost;3000

![alt text](<Captura de tela 2024-11-25 201101.png>)

e por ultimo mandando tudo que foi feito para o repositório GitHub com o commit "Components Part 1"
e por ultimo um git push.

## Código do MenuComponent.js

```javascript
import React, { useState } from 'react';

(aqui ele esta importando o React para criar componentes e utilizar a sintaxe JSX. Já o useSrtate é um hook do react usado para gerenciar o estado dos componentes funcionais.)

import { Media } from 'reactstrap';

(o Media é um componete da blibioteca reactstrap que facilita o uso dos elementos da midea no estilo boostrap)

const Menu = () => {
  const [dishes] = useState([
   
   (aqui criou-se um Arrow utilizando o (Menu) que é um componente do react com as funcionalidades das funções de js que retornam elementos JSX. 

O [dishes] com o useState falado anteriormente que utiliza o dishes para iniciar o estado com um arrey contendo informações sobre os pratos do menu)

   {
      id: 0,
      name: 'Uthappizza',
      image: 'assets/images/uthappizza.png',
      category: 'mains',
      label: 'Hot',
      price: '4.99',
      description:
        'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    },
    {
      id: 1,
      name: 'Zucchipakoda',
      image: 'assets/images/zucchipakoda.png',
      category: 'appetizer',
      label: '',
      price: '1.99',
      description:
        'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce.',
    },
    {
      id: 2,
      name: 'Vadonut',
      image: 'assets/images/vadonut.png',
      category: 'appetizer',
      label: 'New',
      price: '1.99',
      description:
        'A quintessential ConFusion experience, is it a vada or is it a donut?',
    },
    {
      id: 3,
      name: 'ElaiCheese Cake',
      image: 'assets/images/elaicheesecake.png',
      category: 'dessert',
      label: '',
      price: '2.99',
      description:
        'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms.',
    },
  ]);

(todos os pratos do menu estão em ordem ao canto esquedor, utilizando class para a distribuição de informações contendo as imagens na pasta assets contendo id, nome, categoria e outas informações de customização.)


  const menu = dishes.map((dish) => {
   
    return (
      <div key={dish.id} className="col-12 mt-5">
        <Media tag="li">
          <Media left middle>
            <Media object src={dish.image} alt={dish.name} />
          </Media>
          <Media body className="ml-5">
            <Media heading>{dish.name}</Media>
            <p>{dish.description}</p>
          </Media>
        </Media>
      </div>
    );
  });


##Explicaçao
(este arrow organiza as informações postas no arrow de cima como ordem dos pratos, a posição e as informações postas.)

  return (
    <div className="container">
      <div className="row">
        <Media list>{menu}</Media>
      </div>
    </div>
  );
};

(os componentes funcionais eles retornam JSX que é uma sintaxe parecida com HTML, criando uma estrutura funcional, organizando o layout como boostrap)

export default Menu;

(aqui ele exporta o componente menu como principal arquivo)

já na pasta src mandou colocar os seguintes códigos:

import Menu from './components/MenuComponent'
<Menu />

onde ele importa o arquivo MenuComponents.js para o arquivo App.js e o menu para a organização.

