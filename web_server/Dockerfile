# pull official base image
FROM python:3.9.6-alpine

RUN apk update \
  && apk add postgresql-dev gcc python3-dev musl-dev
WORKDIR /api

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy project откуда - куда
COPY . .