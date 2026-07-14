from nltk.tokenize import sent_tokenize


def chunk_text(
    text: str,
    chunk_size: int = 500,
    overlap_sentences: int = 1,
):
    sentences = sent_tokenize(text)

    chunks = []
    current_chunk = ""
    previous_sentences = []

    for sentence in sentences:

        if len(current_chunk) + len(sentence) <= chunk_size:

            current_chunk += " " + sentence

            previous_sentences.append(sentence)

        else:

            chunks.append(current_chunk.strip())

            overlap = previous_sentences[-overlap_sentences:]

            current_chunk = " ".join(overlap) + " " + sentence

            previous_sentences = overlap + [sentence]

    if current_chunk:

        chunks.append(current_chunk.strip())

    return chunks