# Module: eda.py

## Functions

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

def show_summary_statistics(df):
    """
    Display summary statistics for numerical columns in the dataframe.

    Parameters:
        df (pd.DataFrame): The dataframe containing the data.
    """


def plot_distributions(df, numerical_columns):
    """
    Plot distributions for numerical columns.

    Parameters:
        df (pd.DataFrame): The dataframe containing the data.
        numerical_columns (list): List of names of numerical columns.
    """


def plot_correlation_matrix(df):
    """
    Plot a heatmap of the correlation matrix.

    Parameters:
        df (pd.DataFrame): The dataframe containing the data.
    """


def plot_missing_values(df):
    """
    Plot the count of missing values for each column.

    Parameters:
        df (pd.DataFrame): The dataframe containing the data.
    """


def plot_pairwise_relationships(df, hue=None):
    """
    Plot pairwise relationships in the dataset.

    Parameters:
        df (pd.DataFrame): The dataframe containing the data.
        hue (str, optional): Variable in `data` to map plot aspects to different colors.
    """


def plot_categorical_distributions(df, categorical_columns):
    """
    Plot distribution of categorical variables using count plots.

    Parameters:
        df (pd.DataFrame): The dataframe containing the data.
        categorical_columns (list): List of names of categorical columns.
    """


def plot_boxplots(df, numerical_columns):
    """
    Plot boxplots for numerical columns to identify outliers.

    Parameters:
        df (pd.DataFrame): The dataframe containing the data.
        numerical_columns (list): List of names of numerical columns.
    """
