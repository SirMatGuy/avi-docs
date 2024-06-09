# Module: sql_connector.py

## Class and Functions

### SQLConnector

```python
class SQLConnector:
    """
    SQLConnector facilitates connecting to a SQLite database.
    Handles connection, iterating over tables, printing table contents, and executing queries.

    Attributes:
        db_file (str): Path to the SQLite database file.
        engine (object): SQLAlchemy engine instance.
    """


def __init__(self, db_file):
    """
    Initializes the SQLConnector with the path to the SQLite database file.

    Parameters:
        db_file (str): The path to the SQLite database file.
    """


def fetch_data(self, query):
    """
    Executes a SQL query and fetches the result.

    Parameters:
        query (str): SQL query to be executed.

    Returns:
        result (DataFrame): A pandas DataFrame containing the query results.
    """


def execute_query(self, query):
    """
    Executes a SQL query for data manipulation or schema changes.

    Parameters:
        query (str): The SQL query to execute.

    Returns:
        None
    """


def print_table_contents(self):
    """
    Connects to the SQLite database, iterates over each table, and prints all rows in each table.

    Returns:
        None
    """
```