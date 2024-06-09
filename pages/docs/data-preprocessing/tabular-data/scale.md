# Module: scale.py

## Functions

```python
from sklearn.preprocessing import MinMaxScaler, StandardScaler
import pandas as pd

def normalize_columns(dataframe, columns):
    """
    Normalize specified columns to a range between 0 and 1.

    Parameters:
        dataframe (pd.DataFrame): The dataframe containing the data.
        columns (list): List of column names to normalize.

    Returns:
        pd.DataFrame: DataFrame with normalized columns.
    """


def standardize_columns(dataframe, columns):
    """
    Standardize specified columns to have mean 0 and variance 1.

    Parameters:
        dataframe (pd.DataFrame): The dataframe containing the data.
        columns (list): List of column names to standardize.

    Returns:
        pd.DataFrame: DataFrame with standardized columns.
    """
