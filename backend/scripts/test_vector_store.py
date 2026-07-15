from app.rag.embedder import embed_text
from app.rag.vector_store import store_embedding, search_embeddings

text = "Project managers create KPIs and dashboards."

embedding = embed_text(text)

store_embedding(
    chunk_id="test1",
    text=text,
    embedding=embedding.tolist(),
)

results = search_embeddings(embedding.tolist())

print(results)