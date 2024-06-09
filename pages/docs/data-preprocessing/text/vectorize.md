# Module: vectorize.py

## Functions

```python
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer

def vectorize_text_tfidf(texts):
    """
    Vectorize text data using TF-IDF method.

    Parameters:
        texts (list): List of text documents.

    Returns:
        scipy.sparse.csr.csr_matrix: TF-IDF feature matrix.
    """


def vectorize_text_count(texts):
    """
    Vectorize text data using Count Vectorizer method.

    Parameters:
        texts (list): List of text documents.

    Returns:
        scipy.sparse.csr.csr_matrix: Count Vector feature matrix.
    """
