from pathlib import Path

from fastapi import APIRouter, HTTPException

from app.rag.parser import extract_text_from_pdf
from app.rag.text_cleaner import clean_text
from app.rag.chunker import chunk_text
from app.rag.embedder import embed_text
from app.rag.vector_store import (
    clear_collection,
    store_embedding,
)
from app.rag.llm import ask_llm

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

    latest_pdf = max(
        pdf_files,
        key=lambda f: f.stat().st_mtime
    )

    result = extract_text_from_pdf(str(latest_pdf))

    cleaned_text = clean_text(result["text"])

    chunks = chunk_text(cleaned_text)

    clear_collection()

    for index, chunk in enumerate(chunks):

        embedding = embed_text(chunk)

        store_embedding(
            chunk_id=f"{latest_pdf.stem}_{index}",
            text=chunk,
            embedding=embedding.tolist(),
        )

    summary = ask_llm(
        cleaned_text[:5000],
        """
        Summarize this document in exactly 5 bullet points.
        """
    )

    return {
        "message": "Document parsed successfully.",
        "summary": summary,
        "filename": latest_pdf.name,
        "pages": result["pages"],
        "characters": len(cleaned_text),
        "chunks_indexed": len(chunks),
    }