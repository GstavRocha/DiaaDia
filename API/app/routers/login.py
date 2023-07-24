from fastapi import FastAPI, HTTPException
from passlib.context import CryptContext

from .tokenSession import serializa
from ..db import conn,cursor


app = FastAPI()
pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")

def generateSessionToken(userId: int):
    return serializa.dumps({"userId": userId})
@app.post("/login")
async def loginUser(username: str, password: str):
    cursor = conn.cursor()
    query = "SELECT * FROM apiKeys AS a INNER JOIN tbUser AS u on a.userId = u.id WHERE username = %s"
    values = (username,)
    cursor.execute(query, values)
    user = cursor.fetchone()

    if not user:
        raise HTTPException(status_code=422, detail="Usuário não encontrado")

    hashPass = user[1]

    if not pwd.verify(password, hashPass):
        raise HTTPException(status_code=422, detail="Senha inválida")

    sessionToken = generateSessionToken(user[0])

    return {"message": "Login realizado com sucesso", "session_token": sessionToken}

