import chromadb

client = chromadb.Client()

collection = client.get_or_create_collection(
    name="due_diligence"
)


def clear_collection():
    ids = collection.get()["ids"]

    if ids:
        collection.delete(ids=ids)


def store_embedding(chunk_id, text, embedding):
    collection.add(
        ids=[chunk_id],
        documents=[text],
        embeddings=[embedding],
    )


def search_embeddings(query_embedding, n_results=3):
    return collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results,
    )