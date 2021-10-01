import logging as log

log.basicConfig(
    level=log.INFO,
    format="%(asctime)s: %(levelname)s [%(filename)s:%(lineno)s] %(message)s",
    datefmt="%I:%M:S",
    handlers=[
        log.FileHandler("data_layer.log"),
        log.StreamHandler()
    ]
)