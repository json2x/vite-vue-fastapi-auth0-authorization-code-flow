from fastapi import FastAPI

app = FastAPI(
    title="🚀 FastAPI backend with Vite+Vue frontend and OAuth2 authorization and authentication",
    description="This is a backend application that uses FastAPI to provide a REST API and OAuth2 for authorization and authentication.",
)

@app.get("/")
def read_root():
    return {"Hello": "World"}