from logger_base import log
import psycopg2 as db
import sys

class Connection:

    _DATABASE:str="test_db"
    _USERNAME:str="postgres"
    _PASSWORD:str="postgres"
    _DBPORT:str="5432"
    _HOST:str="127.0.0.1"

    _connetion=None
    _cursor=None

    @classmethod
    def getConnection(cls):
        if cls._connetion == None:
            try:
                cls._connetion = db.connect(
                    host=cls._HOST,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    port=cls._DBPORT,
                    database=cls._DATABASE
                )
                log.debug(f"Connection succesfull: {cls._connetion}")
                return cls._connetion
            except Exception as e:
                log.debug(f"Error happened to get connection: {e}")
                sys.exit()
        else:
            return cls._connetion
        
    @classmethod
    def getCursor(cls):
        if cls._cursor == None:
            try:
                cls._cursor = cls.getConnection().cursor()
                log.debug(f"Cursor succesfull: {cls._cursor}")
                return cls._cursor
            except Exception as e:
                log.debug(f"Error happened to get cursor: {e}")
                sys.exit()
        else:
            return cls._cursor

if __name__ == "__main__":
    Connection.getConnection()
    Connection.getCursor()