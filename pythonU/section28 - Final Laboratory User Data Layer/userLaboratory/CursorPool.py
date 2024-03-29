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
            log.debug(f"Connection and Cursor obtnained succesfully: {self._cursor}")
            return self._cursor
        except Exception as e:
            log.error(f"Error happened while using Cursor Pool: {e}")
    
    def __exit__(self, typeException, valueException, traceback):
        if valueException:
            self._connection.rollback()
            log.error(f"Error happened with query. We do rollback: {valueException} - {typeException} - {traceback}")
        else:
            self._connection.commit()
            log.debug(f"Commit running")
        self._cursor.close()
        Connection.unlockConnection(self._connection)