from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {
        "project": "AI Due Diligence Copilot",
        "status": "running"
    }