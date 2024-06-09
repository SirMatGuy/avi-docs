# Module: handle_missing.py

## Functions

```python
import pandas as pd
import numpy as np

def linear_interpolate_series(series):
    """
    Fill missing values in a time series using linear interpolation.

    Parameters:
        series (pd.Series): Pandas Series representing the time series.

    Returns:
        pd.Series: Time series with missing values filled using linear interpolation.
    """


def forward_fill_series(series):
    """
    Forward fill missing values in a time series.

    Parameters:
        series (pd.Series): Pandas Series representing the time series.

    Returns:
        pd.Series: Time series with missing values forward filled.
    """


def backward_fill_series(series):
    """
    Backward fill missing values in a time series.

    Parameters:
        series (pd.Series): Pandas Series representing the time series.

    Returns:
        pd.Series: Time series with missing values backward filled.
    """
