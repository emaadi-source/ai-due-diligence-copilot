from pathlib import Path
from app.rag.chunker import chunk_text
from fastapi import APIRouter, HTTPException

from app.rag.parser import extract_text_from_pdf
from app.rag.text_cleaner import clean_text

router = APIRouter(prefix="/parse", tags=["Parser"])

UPLOAD_DIR = Path("uploads")


@router.post("/")
def parse_latest_pdf():
    pdf_files = list(UPLOAD_DIR.glob("*.pdf"))

    if not pdf_files:
        raise HTTPException(
            status_code=404,
            detail="No PDF found in uploads folder."
        )

    latest_pdf = max(pdf_files, key=lambda f: f.stat().st_mtime)

    result = extract_text_from_pdf(str(latest_pdf))

    cleaned_text = clean_text(result["text"])
    chunks = chunk_text(cleaned_text)

    return {
    "filename": latest_pdf.name,
    "pages": result["pages"],
    "characters": len(cleaned_text),
    "chunks": len(chunks),
    "first_chunk": chunks[0],
}