from fastapi import FastAPI
from passlib.context import CryptContext

from ..db import conn,cursor


app = FastAPI()
pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")
@app.post("/login")
async def loginUser(username: str, password: str):
    cursor = conn.cursor()
    query = "SELECT * FROM apiKeys AS a INNER JOIN tbUser AS u on a.userId = u.id WHERE username = %s"
    values = (username,)
    cursor.execute(query, values)
    user = cursor.fetchone()

    if not user:
        return {"message": "Usuário não encontrado"}
    hashPass = user[1]
    print(hashPass)
    print(password)
    print(pwd.verify(password,hashPass))

    if not pwd.verify(password, hashPass):
        return {"message": "Senha inválida"}
    return {"message": "Login realizado com sucesso"}