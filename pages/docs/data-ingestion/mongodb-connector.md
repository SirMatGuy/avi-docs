# Module: mongodb_connector.py

## Class and Functions

### MongoDBConnector

```python
class MongoDBConnector:
    """
    MongoDBConnector facilitates interactions with a MongoDB database.
    """


def __init__(self, uri, db_name):
    """
    Initializes the MongoDBConnector with the specified MongoDB URI and database name.

    Parameters:
        uri (str): The MongoDB URI.
        db_name (str): The name of the database.
    """


def save_data(self, collection_name, data):
    """
    Inserts a single document into the specified collection.

    Parameters:
        collection_name (str): The name of the collection.
        data (dict): The data to be inserted.

    Returns:
        None
    """


def load_data(self, collection_name, query):
    """
    Finds the first document that matches the query in the specified collection.

    Parameters:
        collection_name (str): The name of the collection.
        query (dict): The query to filter documents.

    Returns:
        dict: The first document that matches the query, or None if no document matches.
    """


def drop_collection(self, collection_name):
    """
    Drops a collection from the database.

    Parameters:
        collection_name (str): The name of the collection to drop.

    Returns:
        None
    """


def find_data(self, collection_name, query={}):
    """
    Finds all documents in the collection that match the query.

    Parameters:
        collection_name (str): The name of the collection.
        query (dict): The query to filter documents.

    Returns:
        pymongo.cursor.Cursor: A cursor to the documents that match the query.
    """


def update_data(self, collection_name, query, new_values):
    """
    Updates documents in the collection.

    Parameters:
        collection_name (str): The name of the collection.
        query (dict): The query to filter documents.
        new_values (dict): The new values to update in the documents.

    Returns:
        None
    """


def insert_many(self, collection_name, data_list):
    """
    Inserts multiple documents into the collection.

    Parameters:
        collection_name (str): The name of the collection.
        data_list (list): A list of dictionaries, each representing a document to be inserted.

    Returns:
        None
    """


def delete_data(self, collection_name, query):
    """
    Deletes documents from the collection.

    Parameters:
        collection_name (str): The name of the collection.
        query (dict): The query to filter documents.

    Returns:
        None
    """


def save_image(self, collection_name, image_path, label):
    """
    Saves an image to MongoDB.

    Parameters:
        collection_name (str): The name of the collection.
        image_path (str): The path to the image file.
        label (str): A label associated with the image.

    Returns:
        None
    """


def load_images(self, collection_name, query={}, limit=0):
    """
    Loads images from MongoDB.

    Parameters:
        collection_name (str): The name of the collection.
        query (dict): The query to filter documents.
        limit (int): The maximum number of images to load.

    Returns:
        tuple: A tuple containing two numpy arrays: one for images and one for labels.
    """


def load_image(self, collection_name, query):
    """
    Loads a single image from MongoDB.

    Parameters:
        collection_name (str): The name of the collection.
        query (dict): The query to filter documents.

    Returns:
        PIL.Image.Image: The image loaded from MongoDB, or None if no document matches the query.
    """
```