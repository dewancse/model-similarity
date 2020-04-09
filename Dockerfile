FROM nginx

COPY public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

RUN apt-get update && \
    apt-get install -y python3-pip python3-dev && \
	pip3 install --upgrade pip && \
    pip3 install sanic && \
    pip3 install numpy pandas scipy scikit-learn

COPY server/serverML.py server/mainML.py /