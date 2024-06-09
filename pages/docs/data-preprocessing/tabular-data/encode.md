# Module: encode.py

## Functions

```python
import pandas as pd
from sklearn.preprocessing import LabelEncoder

def label_encode(dataframe, columns):
    """
    Apply label encoding to specified columns.

    Parameters:
        dataframe (pd.DataFrame): The dataframe containing the data.
        columns (list): List of column names to encode.

    Returns:
        pd.DataFrame: DataFrame with label encoded columns.
    """


def one_hot_encode(dataframe, columns):
    """
    Apply one-hot encoding to specified columns.

    Parameters:
        dataframe (pd.DataFrame): The dataframe containing the data.
        columns (list): List of column names to encode.

    Returns:
        pd.DataFrame: DataFrame with one-hot encoded columns.
    """
