from fastapi import FastAPI
from infraestructure.sqlalchemy.filters.domain_exception import domain_exception_handler

app = FastAPI()
app.add_exception_handler(Exception, domain_exception_handler)

print("Hola Mundo")