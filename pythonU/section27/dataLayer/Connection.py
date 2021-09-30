from logger_base import log
from psycopg2 import pool
import sys

class Connection:

    _DATABASE:str="test_db"
    _USERNAME:str="postgres"
    _PASSWORD:str="postgres"
    _DBPORT:str="5432"
    _HOST:str="127.0.0.1"

    _MIN_CONNECTION:int=1
    _MAX_CONNECTION:int=5
    _pool = None

    @classmethod
    def getPool(cls):
        if cls._pool is None:
            try:
                cls._pool = pool.SimpleConnectionPool(cls._MIN_CONNECTION,cls._MAX_CONNECTION,
                                                    host=cls._HOST,
                                                    user=cls._USERNAME,
                                                    password=cls._PASSWORD,
                                                    port=cls._DBPORT,
                                                    database=cls._DATABASE)
                log.debug(f"Pool getted: {cls._pool}")
                return cls._pool
            except Exception as e:
                log.error(f"Error happened with get pool: {e}")
                sys.exit()
        else:
            return cls._pool
    
    @classmethod
    def getConnection(cls):
        try:
            connection = cls.getPool().getconn()
            log.debug(f"Connection getted: {connection}")
            return connection
        except Exception as e:
            log.error(f"Error happened with Get Connection: {e}")
            sys.exit()
    
    @classmethod
    def unlockConnection(cls,connection):
        try:
            cls.getPool().putconn(connection)
            log.debug(f"Unlock Connection succesfully: {connection}")
        except Exception as e:
            log.error(f"Error happened unlock connection: {e}")
    
    @classmethod
    def closeAllConnections(cls):
        try:
            cls.getPool().closeall()
            log.debug(f"Close all connections succesfully")
        except Exception as e:
            log.error(f"Error happened on close all conecctions: {e}")

if __name__ == "__main__":
    connection1:Connection = Connection.getConnection()
    Connection.unlockConnection(connection1)
    connection2:Connection = Connection.getConnection()
    connection3:Connection = Connection.getConnection()
    conecction4:Connection = Connection.getConnection()
    connection5:Connection = Connection.getConnection()
    connection6:Connection = Connection.getConnection()