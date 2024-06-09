# Module: smooth.py

## Functions

```python
import pandas as pd
import np

def apply_moving_average(series, window_size=3):
    """
    Apply a moving average to smooth a time series.

    Parameters:
        series (pd.Series): Pandas Series representing the time series.
        window_size (int): Size of the moving window.

    Returns:
        pd.Series: Smoothed time series as Pandas Series.
    """
