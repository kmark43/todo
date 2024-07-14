if [ ! -f db.env ]; then
    cp .defaultdb.env db.env
fi

docker compose up
