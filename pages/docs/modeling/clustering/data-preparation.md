# Module: data_preparation.py

## Functions

```python
import pandas as pd
from modeling.clustering.config import FEATURE_COLUMNS

def load_and_prepare_data(filepath: str):
    """
    Load a CSV file and prepare features for clustering.

    Parameters:
        filepath (str): Path to the CSV file.

    Returns:
        pd.DataFrame: DataFrame containing features to be used for clustering.
    """
