# Module: model_factory.py

## Functions

```python
import tensorflow as tf
from transformers import TFAutoModelForSequenceClassification, AutoTokenizer
from config import MAX_WORDS, MAX_LEN, HUGGING_FACE_MODEL

def get_nlp_model(model_type: str, num_classes: int):
    """
    Get a specific NLP model.

    Parameters:
        model_type (str): Model type like "LSTM", "Transformer", or "HuggingFace".
        num_classes (int): Number of output classes.

    Returns:
        model: Compiled NLP model instance.
        tokenizer (Optional): Tokenizer instance if model_type is "HuggingFace".
    """
