from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def root():
    return {
        "project": "AI Due Diligence Copilot",
        "status": "running"
    }


@router.get("/health")
def health():
    return {
        "status": "healthy"
    }