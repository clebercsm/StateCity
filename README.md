### StateCity é um Módulo JavaScript para gerenciamento de Estados e Cidades brasileiros.
  - Simples e com pouco código;
  - Sem requisição de API;
  - IDs padrão IBGE;
  - Controle de validação (Bootstrap);
  
#### Veja como é simples:  

#### Passo 1: Inserir dois elementos `<select>`
```
<boby>
   ...
   <select id="state"></select>
   <select id="city"></select>
   ...
</boby>
```

#### Passo 2: Importar Módulo StateCity `<script type="module">`, passando como parâmetros os elementos `<select>` criados no passo 1.
```
<boby>
   ...
   <script type="module">
     import StateCity from '../js/sc-json.mjs'
     new StateCity(document.querySelector('#state'), document.querySelector('#city'))
   </script>
   ...
</boby>
```
  
Pronto! os elementos serão controlados pelo Módulo StateCity.
  
#### Opcionalmento poderá ser informado o ID do Estado e ou o ID da Cidade, assim os elementos serão preenchidos automaticamente.
```
<boby>
   ...
   <script type="module">
     import StateCity from '../js/sc-json.mjs'
     new StateCity(document.querySelector('#state'), document.querySelector('#city'), 42, 4207007)
   </script>
   ...
</boby>  
```
Observação: Os IDs seguem o padrão IBGE e podem ser conferidos no arquivo: statecity.json   
  
Apenas dois arquivos são necessários, sendo eles: 
  - sc-json.mjs (Módulo JavaScript que ira controlar os elementos)
  - statecity.json (Arquivo Json contendo Estados e Cidades brasileiros)
  
Esta é minha primeira contribuição com a comunidade DEV, espero que ajude...
