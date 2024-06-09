# Module: data_preparation.py

## Functions

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from config import FEATURE_COLUMNS, TARGET_COLUMN, TEST_SIZE, RANDOM_STATE

def load_and_prepare_data(filepath: str):
    """
    Load a CSV file (or any other db) and prepare features and target columns.

    Parameters:
        filepath (str): Path to the CSV file.

    Returns:
        tuple: X_train, X_test, y_train, y_test DataFrames and Series for training and testing.
    """
