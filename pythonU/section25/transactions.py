import psycopg2 as bd

connection = bd.connect(
    user='postgres',
    password='postgres',
    host='127.0.0.1',
    port=5432,
    database='test_db'
    )
try:
    # connection.autocommit = True
    connection.autocommit= False
    cursor = connection.cursor()
    sentence = "INSERT INTO person(name,last_name,email) VALUES(%s,%s,%s)"
    name = 'Geoconda'
    lastname = 'Garcia'
    email = 'ggarcia@mail.com'
    cursor.execute(sentence,(name,lastname,email))
    connection.commit()
    print("Transaction finished")
except Exception as e:
    connection.rollback()
    print(f"Error happened: {e}")
finally:
    connection.close()