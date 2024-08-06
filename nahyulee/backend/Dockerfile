FROM alpine:3.18.2

RUN apk update && \
    apk add --no-cache python3 py3-pip postgresql-dev gcc python3-dev musl-dev && \
    python3 --version && pip3 --version
RUN mkdir /app
WORKDIR /app
COPY backend/requirements.txt /app/
# RUN pip3 install --no-cache-dir -r requirements.txt
RUN pip3 install --no-cache-dir virtualenv && \
    python3 -m venv /app/venv && \
    /app/venv/bin/pip install --no-cache-dir -r requirements.txt
RUN pip3 install django && django-admin startproject backend
RUN cd backend && \
    python manage.py startapp users && \
    python manage.py startapp games
RUN pip install psycopg2-binary
ENV PATH="/app/venv/bin:$PATH"

COPY backend /app
COPY setting.sh /app
RUN chmod +x /app/setting.sh
# ENTRYPOINT ["/app/setting.sh"]
# CMD ["python3", "manage.py"]
CMD ["tail", "-f", "/dev/null"]