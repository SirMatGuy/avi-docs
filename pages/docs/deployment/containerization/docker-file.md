# Module: deployment/containerization/Dockerfile

## Dockerfile for Containerizing ML Model Deployment

This Dockerfile is used to containerize the deployment of machine learning models using FastAPI and Flask. It sets up the environment, installs dependencies, copies the application files, and runs the FastAPI application.

### Dockerfile Content

```dockerfile
# Use Python 3.9 as the base image
FROM python:3.9

# Install dependencies
RUN pip install fastapi uvicorn flask pydantic

# Copy application files
COPY serving/fastapi_deployment.py /app/fastapi_deployment.py
COPY serving/flask_deployment.py /app/flask_deployment.py
COPY trained_model.pkl /app/trained_model.pkl

# Set working directory and run the application
WORKDIR /app
CMD ["uvicorn", "fastapi_deployment:app", "--host", "0.0.0.0", "--port", "8000"]
