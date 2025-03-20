FROM python:3.13.0a4-slim
WORKDIR /python-docker


# Install system dependencies
RUN apt-get update && apt-get install -y gcc build-essential

COPY requirements.txt requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .
CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]