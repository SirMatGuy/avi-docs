# Module: data_preparation.py

## Functions

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from config import MAX_WORDS, MAX_LEN, TEXT_COLUMN, LABEL_COLUMN, DATA_FILE

def load_and_prepare_data():
    """
    Load and prepare text data for NLP models.

    Returns:
        tuple: Padded sequences and labels for training and validation data.
        Tokenizer: Fitted tokenizer instance.
    """
