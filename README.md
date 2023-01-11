
# Desafio Ancar Back-end
Descrição do desenvolvimento da API. Todos as informações, ajuestes e problemas.



## Stack utilizada



**Back-end:** Node, NestJS, TypeORM, PostgreSQL, Render



## Aprendizados
- Configurações do Nest que não conhecia. ex: ```ConfigModule.forRoot()``` e ```@ApiProperty()```. 
- Subir imagens Docker para o Google Cloud.
- Apesar de não conseguir fazer o deploy no GCP, li bastante as documentações do Cloud Run, Cloud Functions e SQL Cloud.
    - Enfrentei o mesmo problema ao subir a API tanto no **Run** quanto no **Functions**. ```The user-provided container failed to start and listen on the port defined provided by the PORT=8080 environment variable. Logs for this revision might contain more information.```
    - No **SQL Cloud** consegui me conectar de forma local, mas ao tentar conectar quando subi o container no Cloud Run, aparentemente ele não estava lendo as variáveis de ambiente.
- Busquei uma solução para conseguir hospedar a API e também oferecesse o serviço de Banco de dados. Utilizei o [Render](https://render.com/).
## Documentação & Deploy

- [Documentação da API](https://desafio-ancar.onrender.com/api)
- URL - https://desafio-ancar.onrender.com/

