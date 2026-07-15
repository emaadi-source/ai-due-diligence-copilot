import ollama


def ask_llm(context: str, question: str):
    prompt = f"""
You are an AI Due Diligence assistant.

Answer ONLY using the provided context.

If the answer isn't in the context, say:
"I couldn't find the answer in the uploaded document."

Context:
{context}

Question:
{question}
"""

    response = ollama.chat(
        model="llama3.2",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response["message"]["content"]