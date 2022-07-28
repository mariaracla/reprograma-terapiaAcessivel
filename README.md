## Terapia acessível

Como projeto final do meu curso de Back-End na Reprograma, resolvi fazer uma API baseada em psicólogos que atendem com valor social.
Escolhi esse tema porque durante a trajetória do curso, vi que a migração de carreira gera muitos sentimentos autosabotadores, como duvidar da própria capacidade, comparar o seu aprendizado com o de outras pessoas, insegurança e afins. E sei que apoio psicológico ajuda muito a se livrar e se curar desses bloqueios, mas o valor de mercado de cada sessão é muito alto e não são todas as pessoas que conseguem ter acesso.
Por isso, pensei em buscar projetos e psicólogos que atendem por valor social, um valor bem reduzido (definido ou combinado com o paciente durante as conversas).

### Dependências utilizadas: 
- Cors
- Express
- Nodemon

## Rotas
GET - "/psicologos" - retorna todos os psicólogos da lista.
GET - "/psicologos/buscar/:id" - retorna todos os psicólogos selecionados por id.
GET - "/psicologos/filtro" - retorna os psicólogos selecionados por modalidade, online ou presencial.
POST - "/psicologos/cadastrar" - cadastra um novo psicólogo que atende por valor social.
DELETE - "/psicologos/deletar/:id" - deleta um cadastro de psicólogo.
PUT - "/psicologos/substituir/:id" - atualiza os dados de um cadastro.
PATCH - "/psicologos/updateValor/:id" - atualiza o valor de cada sessão.