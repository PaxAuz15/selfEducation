from logger_base import log
from Connection import Connection

class CursorPool:
    def __init__(self) -> object:
        self._connection = None
        self._cursor = None
    
    def __enter__(self):
        try:
            self._connection = Connection.getConnection()
            self._cursor = self._connection.cursor()
            log.debug(f"Connection and Cursor succesfully get")
            return self._cursor
        except Exception as e:
            log.error(f"Error happened with using Cursor Pool: {e}")
    
    def __exit__(self,typeException,valueException,traceback):
        if valueException:
            self._connection.rollback()
            log.error(f"Error happened. It do to rollack: {valueException} - {typeException} - {traceback}")
        else:
            self._connection.commit()
            log.debug(f"Commit running")
        self._cursor.close()
        Connection.unlockConnection(self._connection)

if __name__ == "__main__":
    with CursorPool() as cursor:
        log.debug("Enter block with")
        cursor.execute("SELECT * FROM person ORDER BY id_person")
        log.debug(cursor.fetchall())