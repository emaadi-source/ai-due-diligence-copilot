from fastapi import APIRouter

from app.schemas.question import QuestionRequest
from app.rag.embedder import embed_text
from app.rag.vector_store import search_embeddings
from app.rag.llm import ask_llm

router = APIRouter()


@router.post("/ask")
def ask_question(request: QuestionRequest):

    embedding = embed_text(request.question)

    results = search_embeddings(
        embedding.tolist(),
        n_results=3
    )

    documents = results["documents"][0]

    context = "\n\n".join(documents)

    answer = ask_llm(
        context=context,
        question=request.question
    )

    return {
        "question": request.question,
        "answer": answer,
        "sources": documents
    }