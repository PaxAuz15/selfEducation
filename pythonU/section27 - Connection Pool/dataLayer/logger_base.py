import logging as log

# log.basicConfig(level=log.DEBUG)
log.basicConfig(
    level=log.DEBUG,
    format="%(asctime)s: %(levelname)s [%(filename)s:%(lineno)s] %(message)s",
    datefmt="%I:%M:%S",
    handlers=[
        log.FileHandler("data_layer.log"),
        log.StreamHandler()
    ]
)

if __name__ == "__main__":
    log.debug("Debug Message")
    log.info("Info Message")
    log.warning("Warning Message")
    log.error("Error Message")
    log.critical("Critical Message")