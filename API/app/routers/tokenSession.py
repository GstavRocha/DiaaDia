from fastapi import FastAPI,Depends
from fastapi.security import  HTTPBasic,HTTPBasicCredentials
from itsdangerous import URLSafeSerializer, BadSignature
import secrets
import uuid

app  = FastAPI()
seguro = HTTPBasic()
SECRET_KEY = secrets.token_hex(36)
serializa = URLSafeSerializer(secret_key=SECRET_KEY)

def verificarSessaoToken(token: str):
    try:
        return serializa.loads(token)["userId"]
    except BadSignature:
        return None


