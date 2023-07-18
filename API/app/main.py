import mysql.connector
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .db import conn,cursor
from .BaseModel.Model import *
from .routers.newUser import registerUser
from .routers.login import loginUser

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
        await loginUser(user.username, user.password)
    @app.get("/")
    def serveload():
        verify = HTTPException
        return HTTPException(status_code=200, detail=" Server Online", headers=verify)

    @app.post("/user/cadastro/user{user}last{last}email{emailpass}{password}tipe{tipe}")
    def create(userName: str, name: str, last: str, email: str, password: str,tipe:int):
        query= f'INSERT INTO tbUser( USERNAME, NAME, LASTNAME, EMAIL, PASSWORD, TIPECLIENT) VALUES ("{userName}","{name}","{last}","{email}","{password}",{tipe});'
        cursor.execute(query)
        result = cursor.fetchall()
        print(cursor.rowcount, 'Insert Success', result)
        conn.commit()
    @app.post("/user/cadastro/idUser:{iduser}sugar:{level}")
    def measuereDaily(idUser: int, sugar: float ):
        query = f'INSERT INTO tbMeasurements(IDUSER, SUGARLEVEL) VALUES ({idUser},{sugar});'
        cursor.execute(query)
        result = cursor.fetchall()
        if HTTPException(status_code= 200) is True:
            return HTTPException(status_code=200, detail='Sucesso', headers=result)
        else:
            return HTTPException
        conn.commit()
        conn.close()
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

# finally:
#     if conn.is_connected():
#         conn.close()
#         print("Mysql Connection Closed")


