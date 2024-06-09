# Module: feature_extraction.py

## Functions

```python
import pandas as pd
import numpy as np

def extract_features(series):
    """
    Extract statistical features from a time series.

    Parameters:
        series (pd.Series): Pandas Series representing the time series.

    Returns:
        dict: A dictionary with statistical features.
    """
