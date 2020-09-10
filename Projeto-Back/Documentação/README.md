
# Documentação 📃

> **Repositório ->** https://github.com/danillovictor/Generation-Brasil-Projeto-Integrador

**Model usuario**

    id (long),
    nomeCompleto (String)
    email (String)
    senha (String)

**Model Tema**

    id (Long)
    nome (String)
    descricao (String)
    status (Boolean)
    private List<PostagemModel> postagem


**Model postagem**

    id (long),
    titulo (String)
    conteudo (String)
    referencia (String)
    data (date)
    private TemaModel tema
    private UsuarioModel usuario

# EndPoints

### Usuario

> **[Em desenvolvimento...]**

##

### Tema

> Method GET

    FindAll -> /tema
    
    FindById -> /tema/{id}
    
    FindByTitulo -> /nome/{nome}
    
    FindByTitulo -> /status/{status}

###

> Method POST

    FindAll -> /tema
    
###

> Method PUT

    FindAll -> /tema
    
###

> Method DELETE	

    FindById -> /tema/{id}

##

### Postagem

> Method GET
	
	FindAll -> /titulo
	FindById -> /postagem/{id}
	FindByTitulo -> /postagem/titulo/{titulo}
	
###

> Method POST

	FindAll -> /postagem
	
###

> Method PUT
	
	FindAll -> /postagem
	
###

> Method DELETE	

	FindById -> /postagem/{id}

##

> POST/PUT Exemplo (JSON)

    {
    	"titulo" : "Explosão em Beirute no Libano",
    	"conteudo" : "Muitos mortos e Milhares de feridos",
    	"referencia" : "www.g1.com
    	"tema": {
    		"id": 1 
    	},
    	"usuario":{
    		"id":1 
    	}
    }
