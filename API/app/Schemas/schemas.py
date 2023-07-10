from pydantic import BaseModel
from datetime import datetime

class user(BaseModel):
    userName: str
    name: str
    lastName: str
    email: str
    password: str
    tipeClient: int
class schema_measure(BaseModel):
    idUser: int
    sugar: float
