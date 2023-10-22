FROM python:3.11-slim-buster

RUN apt-get update && apt-get install -y \
    python3-dev \
    libpq-dev \
    gcc
RUN pip install poetry

WORKDIR /app

COPY . /app

RUN poetry install

EXPOSE 8000

CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]