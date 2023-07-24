import mysql.connector
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from starlette.responses import JSONResponse

from .db import conn,cursor
from .BaseModel.Model import *
from .routers.newUser import registerUser
from .routers.login import loginUser
from .routers.tokenSession import verificarSessaoToken

app = FastAPI()
origins = [
    "http://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
try:
    @app.post("/register")
    async def register(user: RegistreUser):
        await registerUser(user.id, user.username, user.name, user.lastname, user.email, user.password, user.tipeClient)


    @app.post("/login")
    async def login(user: Login):
        try:
            response = await loginUser(user.username, user.password)
            return response
        except HTTPException as e:
            return JSONResponse(content={"detail": e.detail}, status_code=e.status_code)


    @app.get("/protected")
    async def routeProtected(userId: int = Depends(verificarSessaoToken)):
        if userId is None:
            return {"message": "Acesso Negado. Token inválido"}
        return {"message": "Acesso Permitido para Usuário {}".format(userId)}
    @app.get("/")
    def serveload():
        verify = HTTPException
        return HTTPException(status_code=200, detail=" Server Online", headers=verify)

    @app.get("/usuarios")
    def topos():
        select = 'SELECT * FROM tbUser;'
        cursor.execute(select)
        result = cursor.fetchall()
        return HTTPException(status_code=200, detail="sucesso", headers=result)

except ConnectionError  or mysql.connector.errors:
    if ConnectionError is True:
        print(ConnectionError, 'Erro na Conexão')
    else:
        print(mysql.connector.errors, 'Erro no Mysql')


