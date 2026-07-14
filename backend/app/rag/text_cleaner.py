import re


def clean_text(text: str) -> str:
    # Replace multiple whitespace/newlines with a single space
    text = re.sub(r"\s+", " ", text)

    # Remove null characters
    text = text.replace("\x00", "")

    # Trim leading/trailing spaces
    text = text.strip()

    return text