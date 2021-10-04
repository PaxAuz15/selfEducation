import psycopg2

connection = psycopg2.connect(
    user='postgres',
    password='postgres',
    host='127.0.0.1',
    port=5432,
    database='test_db'
    )
try:
    with connection:
        with connection.cursor() as cursor:
            sentence:str = 'SELECT * FROM person'
            cursor.execute(sentence)
            #executemany(sentence) -> it's to run many queries
            registers = cursor.fetchall()
            #fetchone() -> it's to get only one register (first result from query)
            #cursor.rowcount() -> it's to count how register was modified
            print(registers)
except Exception as e:
    print(f"Error happened: {e}")
finally:
    connection.close()