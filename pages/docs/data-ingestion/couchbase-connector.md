# Module: couchbase_connector.py

## Class and Functions

### CouchbaseConnector

```python
class CouchbaseConnector:
    """
    CouchbaseConnector facilitates connecting to a Couchbase cluster and performing CRUD operations.
    
    Attributes:
        cluster (Cluster): A Couchbase Cluster instance for connections.
        bucket_name (str): The name of the bucket to interact with.
    """


def __init__(self, connection_string, username, password, bucket_name):
    """
    Initializes the Couchbase connector with credentials and bucket name.

    Parameters:
        connection_string (str): Connection string to the Couchbase cluster.
        username (str): Username for Couchbase cluster authentication.
        password (str): Password for Couchbase cluster authentication.
        bucket_name (str): Name of the bucket to perform operations on.
    """


def insert_document(self, doc_id, document):
    """
    Inserts a new document into the Couchbase bucket.

    Parameters:
        doc_id (str): Document ID for the new document.
        document (dict): The document content to insert.
    """


def get_document(self, doc_id):
    """
    Retrieves a document from the Couchbase bucket by its ID.

    Parameters:
        doc_id (str): Document ID of the document to retrieve.

    Returns:
        dict: The requested document if found, or None if not found.
    """


def update_document(self, doc_id, document):
    """
    Updates an existing document in the Couchbase bucket.

    Parameters:
        doc_id (str): Document ID of the document to update.
        document (dict): New content for the document.
    """


def delete_document(self, doc_id):
    """
    Deletes a document from the Couchbase bucket by its ID.

    Parameters:
        doc_id (str): Document ID of the document to delete.
    """
```