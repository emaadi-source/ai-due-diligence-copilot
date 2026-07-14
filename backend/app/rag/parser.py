import fitz


def extract_text_from_pdf(pdf_path: str):
    document = fitz.open(pdf_path)

    full_text = ""

    for page in document:
        full_text += page.get_text()

    pages = len(document)

    document.close()

    return {
        "pages": pages,
        "characters": len(full_text),
        "preview": full_text[:500],
        "text": full_text
    }