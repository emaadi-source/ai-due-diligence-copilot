from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.parse import router as parse_router
from app.api.health import router as health_router
from app.api.upload import router as upload_router
from app.api.ask import router as ask_router

app = FastAPI(
    title="AI Due Diligence Copilot",
    version="1.0.0"
)

# Allow React frontend to access the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(upload_router)
app.include_router(parse_router)
app.include_router(ask_router)