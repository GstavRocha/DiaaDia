import mysql.connector
from passlib.context import CryptContext
from fastapi import FastAPI,HTTPException
from ..db import conn,cursor
from pydantic import BaseModel

app = FastAPI()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
@app.post("/register")
async def registerUser(id: int, username: str, name: str,lastname:str, email: str, password: str,tipeClient: int ):
    hashedPass = pwd_context.hash(password)
    cursor = conn.cursor()
    query1 = 'INSERT INTO tbUser (id, username, name, lastname, email, password, tipeClient) VALUES (%s, %s, %s, %s, %s, %s, %s)'
    values1 = (id, username, name, lastname, email, password, tipeClient)
    cursor.execute(query1, values1)

    query2 = 'INSERT INTO apiKeys (key_value, userId) VALUES (%s, %s)'
    values2 = (hashedPass, id)
    cursor.execute(query2, values2)

    conn.commit()

    return {"message": "User registered successfully"}