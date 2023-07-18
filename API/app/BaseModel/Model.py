from pydantic import BaseModel


class RegistreUser(BaseModel):
    id: int
    username: str
    name: str
    lastname: str
    email: str
    password: str
    tipeClient: int

class Login(BaseModel):
    username:str
    password: str
