## Terapia acessível
- https://terapiaacessivel.herokuapp.com/
### Resumo:
Como projeto final do meu curso de Back-End na Reprograma, resolvi fazer uma API baseada em psicólogos que atendem com valor social.
Escolhi esse tema porque durante a trajetória do curso, vi que a migração de carreira gera muitos sentimentos autosabotadores, como duvidar da própria capacidade, comparar o seu aprendizado com o de outras pessoas, insegurança e afins. E sei que apoio psicológico ajuda muito a se livrar e se curar desses bloqueios, mas o valor de mercado de cada sessão é muito alto e não são todas as pessoas que conseguem ter acesso.
Por isso, pensei em buscar projetos e psicólogos que atendem por valor social, um valor bem reduzido (definido ou combinado com o paciente durante as conversas).

### Dependências utilizadas: 
- Cors
- Express
- Nodemon

# Rotas
## - GET - "/psicologos" - retorna todos os psicólogos da lista.

![get_all](https://user-images.githubusercontent.com/99006307/181865731-80ccd41a-edd0-45e2-b3b5-32961bfaf247.gif)


## - GET - "/psicologos/buscar/:id" - retorna todos os psicólogos selecionados por id.


![id](https://user-images.githubusercontent.com/99006307/181865722-b97f7086-41e1-4917-a926-f59c81c0d8f8.gif)


## - GET - "/psicologos/filtro" - retorna os psicólogos selecionados por modalidade, online ou presencial.

![filtro](https://user-images.githubusercontent.com/99006307/181865740-e82b2b3b-a0c2-4663-b324-2e45763abcf4.gif)

## - POST - "/psicologos/cadastrar" - cadastra um novo psicólogo que atende por valor social.


![post](https://user-images.githubusercontent.com/99006307/181865752-7d2f056c-23be-4f22-83b4-d71bc50c535a.gif)


## - DELETE - "/psicologos/deletar/:id" - deleta um cadastro de psicólogo.

![delete](https://user-images.githubusercontent.com/99006307/181865765-5679d39e-0942-4237-8838-ecb22c86943c.gif)


## - PUT - "/psicologos/substituir/:id" - atualiza os dados de um cadastro.


![put](https://user-images.githubusercontent.com/99006307/181865768-b58e3e15-664f-4dea-acbd-c09318f7f3d3.gif)


## - PATCH - "/psicologos/updateValor/:id" - atualiza o valor de cada sessão.

![patch](https://user-images.githubusercontent.com/99006307/181865775-b4e32c95-7fa2-4d37-a052-c1d637dae13e.gif)
