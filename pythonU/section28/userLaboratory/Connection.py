from psycopg2 import pool
from logger_base import log
import sys

class Connection:
    _DATABASE:str = "user_laboratory"
    _USERNAME:str = "postgres"
    _PASSWORD:str = "postgres"
    _DB_PORT:str = "5432"
    _HOST:str = "127.0.0.1"
    _MIN_CON:int = 1
    _MAX_CON:int = 5
    _pool = None

    @classmethod
    def getPool(cls):
        if cls._pool == None:
            try:
                cls._pool = pool.SimpleConnectionPool(
                    cls._MIN_CON,
                    cls._MAX_CON,
                    host=cls._HOST,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    port=cls._DB_PORT,
                    database=cls._DATABASE
                )
                log.debug(f"Pool getted: {cls._pool}")
                return cls._pool
            except Exception as e:
                log.error(f"Error happened while getting Pool: {e}")
        else:
            return cls._pool
    
    @classmethod
    def getConnection(cls):
        try:
            connection = cls.getPool().getconn()
            log.debug(f"Connection obtained: {connection}")
            return connection
        except Exception as e:
            log.error(f"Error happened while getting connection: {e}")
            sys.exit()
    
    @classmethod
    def unlockConnection(cls,connection):
        try:
            cls.getPool().putconn(connection)
            log.debug(f"Unlocked Connection: {connection}")
        except Exception as e:
            log.error(f"Error happened while unlocking Connection: {e}")
            # sys.exit()
    
    @classmethod
    def closeAllConnections(cls):
        try:
            cls.getPool().closeall()
            log.debug(f"Closed All Connections Succesfully")
        except Exception as e:
            log.error(f"Error happened while close all connections: {e}")
            # sys.exit()

