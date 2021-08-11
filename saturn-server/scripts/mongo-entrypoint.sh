mongo -- "$MONGO_INITDB_DATABASE" <<EOF
  db.createUser({
    user: "$MONGO_USERNAME",
    pwd: "$MONGO_PASSWORD",
    roles: [
      { role: 'readWrite', db: "$MONGO_INITDB_DATABASE" }
    ]
  })
  db.createCollection("rols")
  db.createCollection("users")
  db.createCollection("reports")
  db.createCollection("bands")
  db.createCollection("helpers")
  db.createCollection("links")
  db.createCollection("origins")
EOF