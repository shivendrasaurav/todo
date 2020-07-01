create DATABASE todo;

create TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);